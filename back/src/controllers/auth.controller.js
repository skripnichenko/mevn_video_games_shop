require('dotenv').config()
const jwt = require('jsonwebtoken')

const { User, Token } = require('../model')

module.exports = {
  async logout({ body: { refreshToken } }, res) {
    const foundToken = await Token.findOne({ token: refreshToken })

    if (!foundToken) {
      return res.status(403).send({
        message: 'The user is not authorized'
      })
    }

    await Token.findByIdAndDelete(foundToken._id)

    return res.status(200).send({
      message: 'The user is logged out'
    })
  },
  async refreshToken({ body: { refreshToken } }, res) {
    if (!refreshToken) {
      return res.status(403).send({
        message: 'The action is forbidden'
      })
    }
    const currentToken = await Token.findOne({ token: refreshToken })

    if (!currentToken) {
      return res.status(403).send({
        message: 'The action is forbidden'
      })
    }

    jwt.verify(refreshToken, process.env.JWT_SECRET_REFRESH, (err, user) => {
      if (err) {
        return res.status(403).send({
          message: 'The action is forbidden'
        })
      }

      const accessToken = jwt.sign({
        userId: user._id,
        email: user.email,
      }, process.env.JWT_SECRET, {
        expiresIn: '1m'
      })

      return res.status(200).send({
        accessToken,
        email: user.email
      })

    })
  },
  async login({ body: { email, password } }, res) {
    try {
      const foundUser = await User.findOne({ email })

      if (!foundUser) {
        return res.status(403).send({
          message: 'Invalid email or password',
          err
        })
      }
      
      const isPasswordCorrect = foundUser.password === password

      if (!isPasswordCorrect) {
        return res.status(403).send({
          message: 'Invalid email or password',
          err
        })
      }

      const accessToken = jwt.sign({
        userId: foundUser._id,
        email: foundUser.email,
      }, process.env.JWT_SECRET, {
        expiresIn: '1m'
      })

      const refreshToken = jwt.sign({
        userId: foundUser._id,
        email: foundUser.email,
      }, process.env.JWT_SECRET_REFRESH)

      const foundToken = await Token.findOne({
        user: foundUser._id
      })

      if (foundToken) {
        await Token.findByIdAndUpdate(foundToken._id, { token: refreshToken })
        return res.status(200).send({
          accessToken,
          refreshToken,
          email: foundUser.email,
        })
      }

      const item = new Token({ token: refreshToken, user: foundUser._id });
      await item.save();

      return res.status(200).send({
        accessToken,
        refreshToken,
        email: foundUser.email,
      })

    } catch (err) {
      return res.status(403).send({
        message: 'Invalid email or password',
        err
      })
    }
  },
  async signUp({ body: { email, password } }, res) {
    try {
      const foundUser = await User.findOne({ email })

      if (foundUser) {
        return res.status(403).send({
          message: 'The email is already in use',
          err
        })
      }

      const createdUser = await new User({ email, password })
      await createdUser.save();

      return res.status(200).send({
        message: "The user is created"
      })

    } catch (err) {
      return res.status(403).send({
        message: 'Invalid email or password',
        err
      })
    }
  }
}