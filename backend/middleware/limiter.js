const rateLimit = require("express-rate-limit");

// const limiter = rateLimit({
//   windowMs: 5 * 60 * 1000,
//   max: 3,
//   message: "Try again in 5 minutes",
// });

// module.exports = { limiter };

module.exports = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 3,
  message: "Try again in 5 minutes",
});
