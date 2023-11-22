const Yacht = require("../models/yacht");
const YachtInfo = require("../models/yachtInfo");
const Favorite = require("../models/favourite");
// Retrieve all yachts
exports.getAllYachts = async (req, res) => {
  try {
    const {
      id,
      type,
      price,
      length,
      power,
      year,
      captain,
      passenger,
      cabin,
      bed,
      availablity,
      region,
      manufacturer,
      sort,
    } = req.body;
    const condition = {};
    if (id) condition.id = id;
    if (type) condition.type = type;
    if (price) condition.price = price;
    if (length) condition.length = length;
    if (power) condition.power = power;
    if (year) condition.year = year;
    if (captain) condition.captain = captain;
    if (passenger) condition.passenger = passenger;
    if (cabin) condition.cabin = cabin;
    if (bed) condition.bed = bed;
    if (availablity) condition.availablity = availablity;
    if (region) condition.region = region;
    if (manufacturer) condition.manufacturer = manufacturer;
    const order = [];
    switch (sort) {
      case 0:
        order[0] = ["year", "DESC"];
        break;
      case 1:
        order[0] = ["price", "DESC"];
        break;
      case 2:
        order[0] = ["price", "ASC"];
        break;
      default:
        order[0] = ["year", "DESC"];
        break;
    }

    const yachts = await Yacht.findAll({
      where: condition,
      include: [YachtInfo, Favorite],
      order,
    });
    res.json(yachts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new yacht
exports.createYacht = async (req, res) => {
  try {
    const {
      name,
      region,
      price,
      passenger,
      length,
      bed,
      captain,
      captainInfo,
      type,
      availablity,
      power,
      year,
      cabin,
      model,
      manufacturer,
      about,
      security_deposit,
      ownerID,
    } = req.body;

    const yacht = await Yacht.create({
      name,
      region,
      price,
      passenger,
      length,
      bed,
      captain,
      captainInfo,
      type,
      availablity,
      power,
      year,
      cabin,
      model,
      manufacturer,
      about,
      security_deposit,
      ownerID,
    });
    const images = req.body.images;
    console.log(images);
    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      await YachtInfo.create({
        content: image,
        item: 0,
        yachtID: yacht.id,
      });
    }
    const features = req.body.features ? req.body.features : [];
    for (let i = 0; i < features.length; i++) {
      const feature = features[i];
      await YachtInfo.create({
        content: feature.content,
        status: feature.status,
        item: 1,
        yachtID: yacht.id,
      });
    }
    const allows = req.body.allows ? req.body.allows : [];
    for (let i = 0; i < allows.length; i++) {
      const allow = allows[i];
      await YachtInfo.create({
        content: allow.content,
        status: allow.status,
        item: 2,
        yachtID: yacht.id,
      });
    }
    const cancellations = req.body.cancellations ? req.body.cancellations : [];
    for (let i = 0; i < cancellations.length; i++) {
      const cancellation = cancellations[i];
      await YachtInfo.create({
        content: cancellation,
        item: 3,
        yachtID: yacht.id,
      });
    }
    const bookings = req.body.bookings ? req.body.bookings : [];
    for (let i = 0; i < bookings.length; i++) {
      const booking = bookings[i];
      await YachtInfo.create({
        content: booking.content,
        status: booking.status,
        item: 4,
        yachtID: yacht.id,
      });
    }
    res.status(201).json(yacht);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an existing yacht
exports.updateYacht = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      region,
      price,
      passenger,
      length,
      bed,
      captain,
      captainInfo,
      type,
      availablity,
      power,
      year,
      cabin,
      model,
      manufacturer,
      ownerID,
    } = req.body;
    const updatedYacht = await Yacht.update(
      {
        name,
        region,
        price,
        passenger,
        length,
        bed,
        captain,
        captainInfo,
        type,
        availablity,
        power,
        year,
        cabin,
        model,
        manufacturer,
        ownerID,
      },
      { returning: true, where: { id } }
    );
    res.status(200).json({ status: 200 });

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a yacht
exports.deleteYacht = async (req, res) => {
  try {
    const { id } = req.params;
    await Yacht.destroy({ where: { id } });
    res.status(200).json({ status: 200 });

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
