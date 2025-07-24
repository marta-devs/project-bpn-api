export default {
  secret: process.env.JWT_SECRET || "defaultSecret",
  expiresIn: process.env.JWT_EXPIRES_IN || "1d",
};
