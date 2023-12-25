const { model, Schema } = require("mongoose");

const UsersSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const Users = model("User", UsersSchema);
module.exports = Users;
