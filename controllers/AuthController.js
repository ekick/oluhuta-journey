import dotenv from "dotenv"
import User from "../models/User.js"
import Biodata from "../models/Biodata.js"
import { emailExist, usernameExist} from "../libraries/identityExist.js"
import bcrypt from "bcrypt"
import jsonwebtoken from "jsonwebtoken"

const env = dotenv.config().parsed

const generateAksesToken = async (payload) => {
  return jsonwebtoken.sign(payload, env.JWT_ACCESS_TOKEN, {expiresIn: env.JWT_ACCESS_TOKEN_EXPIRATION_TIME})
}
const generateRefreshToken = async (payload) => {
  return jsonwebtoken.sign(payload, env.JWT_REFRESH_TOKEN, {expiresIn: env.JWT_REFRESH_TOKEN_EXPIRATION_TIME})
}

class AuthController {
  async register(req, res) {
    try {
      if (!req.body.name) { throw { code : 400, message : 'NAME_IS_REQUIRED' } }
      if (!req.body.email) { throw { code : 400, message : 'EMAIL_IS_REQUIRED' } }
      if (!req.body.nohp) { throw { code : 400, message : 'NUMBER_HP_IS_REQUIRED' } }
      if (!req.body.username) { throw { code : 400, message : 'USERNAME_IS_REQUIRED' } }
      if (!req.body.password) { throw { code : 400, message : 'PASSWORD_IS_REQUIRED' } }
      if (req.body.password.length < 8) { throw { code : 400, message : 'PASSWORD_MINIMUM_8_CHARACTERS' } }

      const isEmailExist = await emailExist(req.body.email)
      if (isEmailExist) { throw { code: 409, message: 'EMAIL_ALREADY_EXIST'} }
      const isUsernameExist = await usernameExist(req.body.username)
      if (isUsernameExist) { throw { code: 409, message: 'USERNAME_ALREADY_EXIST'} }

      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(req.body.password, salt)

      const user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: hash,
      })
      if (!user) {
        throw { code: 500, message: 'USER_REGISTER_FAILED'}
      }
      const biodata = await Biodata.create({
        idUser: user._id,
        nama: req.body.name,
        nomorHP: req.body.nohp
      })
      if (!biodata) {
        throw { code: 500, message: 'BIODATA_REGISTER_FAILED'}
      }

      return res.status(200)
                  .json({
                      status: true,
                      message: 'USER_REGISTER_SUCCESS',
                      user,
                      biodata
                    })
    } catch (error) {
      return res.status(error.code || 500)
                  .json({ 
                    status: false,
                    message: error.message 
                  })
    }
  }

  async login(req, res) {
    try {
      if (!req.body.user) { throw { code: 400, message: "USERNAME_OR_EMAIL_IS_REQUIRED" } }
      if (!req.body.password) { throw { code: 400, message: "PASSWORD_IS_REQUIRED" } }

      // const isUserExist = await userExist(req.body.email)
      const user = await User.findOne({$or: [{email: req.body.user},{username: req.body.user}] })
      if (!user) { throw { code: 404, message: 'EMAIL_OR_USERNAME_NOT_FOUND'} }

      const isPasswordValid = await bcrypt.compare(req.body.password, user.password)
      if (!isPasswordValid) { throw { code: 400, message: "INVALID_PASSWORD" } }

      const biodata = await Biodata.findOne({ idUser: user._id})
      if (!biodata) { throw { code: 404, message: 'BIODATA_NOT_FOUND'} }

      let payload = { id: user._id }
      const accessToken = await generateAksesToken(payload);
      const refreshToken = await generateRefreshToken(payload);

      return res.status(200)
                  .json({
                    status: true,
                    message: "USER_LOGIN_SUCCESS",
                    username: user.username,
                    nama: biodata.nama,
                    no_hp: biodata.nomorHP,
                    accessToken,
                    refreshToken
                  })
    } catch (error) {
      return res.status(error.code || 500)
                  .json({
                    status: false,
                    message: error.message
                  })
    }
  }

  async refreshToken(req,res) {
    try{
      if (!req.body.refreshToken) { throw { code: 400,  message: 'REFRESH_TOKEN_IS_REQUIRED' } }

      const verify = await jsonwebtoken.verify(req.body.refreshToken, env.JWT_REFRESH_TOKEN)

      let payload = { id: verify.id }
      const accessToken = await generateAksesToken(payload);
      const refreshToken = await generateRefreshToken(payload);

      return res.status(200)
                  .json({
                    status: true,
                    message: "REFRESH_TOKEN_SUCCESS",
                    accessToken,
                    refreshToken
                  })

    }catch (error) {
      const errorJwt = ['invalid signature','jwt malformed','jwt must be provided','invalid token']
      if (error.message == 'jwt expired') {
          error.message = 'REFRESH_TOKEN_EXPIRED'
      } else if(errorJwt.includes(error.message)) {
        error.message = 'INVALID_REFRESH_TOKEN'
      }

      return res.status(error.code || 500)
                  .json({
                    status: false,
                    message: error.message
                  })
    }
  }

}

export default new AuthController()