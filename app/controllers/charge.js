const stripe = require("stripe")("YOUR_STRIPE_SECRET_KEY");

exports.charge = async (req, res) => {
  try {
    const { amount, currency, description, source } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      description,
      payment_method: source,
      confirm: true,
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
