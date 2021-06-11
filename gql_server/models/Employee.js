const { model, Schema } = require('mongoose');

const employeeSchema = new Schema({
  id: Number,
  name: String,
  lastName: String,
  email: String,
  nationality: String,
  phone: String,
  civilStatus: String,
  birthday: String,
});

module.exports = model('Employee', employeeSchema);
