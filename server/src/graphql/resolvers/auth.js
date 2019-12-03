const { hash } = require('bcryptjs');
const User = require('../../models/user');

module.exports = {
  signup: async ({ user: { email, password } }) => {
    const hashedPw = await hash(password, 12);
    const user = new User({
      email,
      password: hashedPw
    });
    const result = await user.save();
    return { ...result._doc, password: null };
  }
};
