const passport = require("passport");

const GoogleStrategy = require("passport-google-oauth20").Strategy;
var GitHubStrategy = require("passport-github2").Strategy;
const GOOGLE_CLIENT_ID =
  "542798051721-gv0j8049pi1p96evnpk4k5vfhnd3a80o.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
const GITHUB_CLIENT_ID = "041b0c62529efcc0e7a5";
const GITHUB_CLIENT_SECRET = "67e1fab7467a29a7b5b31fe56ec9b50017d09b77";
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
