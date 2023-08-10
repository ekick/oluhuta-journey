import User from "../models/User.js";

export const emailExist = async (param) => {
  const user = await User.findOne({ email: param })
  if (user) { return true }
  return false
}
export const usernameExist = async (param) => {
  const user = await User.findOne({ username: param })
  if (user) { return true }
  return false
}
