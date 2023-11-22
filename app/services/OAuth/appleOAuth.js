import appleSignin from "apple-signin-auth";
// OR const appleSignin = require('apple-signin-auth');
// OR import { getAuthorizationUrl } from 'apple-signin-auth';

const clientSecret = appleSignin.getClientSecret({
  clientID: "com.company.app", // Apple Client ID
  teamID: "teamID", // Apple Developer Team ID.
  privateKey: "PRIVATE_KEY_STRING", // private key associated with your client ID. -- Or provide a `privateKeyPath` property instead.
  keyIdentifier: "XXX", // identifier of the private key.
  // OPTIONAL
  expAfter: 15777000, // Unix time in seconds after which to expire the clientSecret JWT. Default is now+5 minutes.
});

const options = {
  clientID: "com.company.app", // Apple Client ID
  redirectUri: "http://localhost:3000/auth/apple/callback",
  clientSecret: clientSecret,
  // OPTIONAL
  state: "state", // optional, An unguessable random string. It is primarily used to protect against CSRF attacks.
  responseMode: "query" | "fragment" | "form_post", // Force set to form_post if scope includes 'email'
  scope: "email", // optional
};

try {
  const tokenResponse = await appleSignin.getAuthorizationToken(code, options);
} catch (err) {
  console.error(err);
}
