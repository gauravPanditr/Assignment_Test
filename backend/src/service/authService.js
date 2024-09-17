const jwt = require('jsonwebtoken');
const User = require('../model/user');

const register = async (userData) => {
  const user = new User(userData);
  await user.save();
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return { user, token };
};

const login = async ({ f_userName, password }) => {
  const user = await User.findOne({ f_userName });
  if (!user || !(await user.comparePassword(password))) {
    throw new Error('Invalid email or password');
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return { user, token };
};

module.exports = { register, login };