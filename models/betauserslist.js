const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const betaUsersListSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  date: { type: Date, default: Date.now },
});

const BetaUsersList = mongoose.model("BetaUsersList", betaUsersListSchema);

module.exports = BetaUsersList;
 