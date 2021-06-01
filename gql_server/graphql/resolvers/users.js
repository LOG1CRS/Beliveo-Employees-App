const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');

const User = require('../../models/User');

module.exports = {
  Mutation: {
    async login(_, { email, password }) {
      // Validating email
      if (email.trim() === '') {
        throw new UserInputError('Invalid email.', {
          errors: {
            email: 'Please add an email.',
          },
        });
      }

      // Validating password
      if (password.trim() === '') {
        throw new UserInputError('Invalid password.', {
          errors: {
            password: 'Please add a password.',
          },
        });
      }

      // Validating if user exist
      const user = await User.findOne({ email });

      if (!user) {
        throw new UserInputError('Email not found.', {
          errors: {
            password: 'The email is not register yet.',
          },
        });
      }

      // Checking password match
      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        throw new UserInputError('Wrong password.', {
          errors: {
            password: 'Please add the correct password of this email.',
          },
        });
      }

      // Generating jwt token
      const token = jwt.sign(
        {
          id: user.id,
          username: user.email,
          email: user.username,
        },
        process.env.SECRET_KEY,
        {
          expiresIn: '1h',
        }
      );

      return {
        ...user._doc,
        id: user._id,
        token,
      };
    },
    async register(
      _,
      { registerInput: { username, email, password } },
      context,
      info
    ) {
      // Validating name
      if (username.trim() === '') {
        throw new UserInputError('Invalid username.', {
          errors: {
            username: 'Please add a name',
          },
        });
      }

      // Validating email
      if (email.trim() === '') {
        throw new UserInputError('Invalid email.', {
          errors: {
            email: 'Please add an email.',
          },
        });
      }

      const user = await User.findOne({ email });

      if (user) {
        throw new UserInputError('The email already exist', {
          errors: {
            email: 'This email already exist',
          },
        });
      }

      // Validating password
      if (password.trim() === '') {
        throw new UserInputError('Invalid password.', {
          errors: {
            password: 'Please add a password.',
          },
        });
      }

      // Encrypting password
      password = await bcrypt.hash(password, 12);

      // Creating and saving the new user in the DB
      const newUser = new User({
        username,
        email,
        password,
      });

      const res = await newUser.save();

      // Generating jwt token
      const token = jwt.sign(
        {
          id: res.id,
          username: res.email,
          email: res.username,
        },
        process.env.SECRET_KEY,
        {
          expiresIn: '1h',
        }
      );

      return {
        ...res._doc,
        id: res._id,
        token,
      };
    },
  },
};
