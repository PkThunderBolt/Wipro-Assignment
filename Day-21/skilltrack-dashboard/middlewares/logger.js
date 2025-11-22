module.exports = (req, res, next) => {
  let time = new Date().toISOString();
  console.log(`[${time}] ${req.method} ${req.url}`);
  next();
};
