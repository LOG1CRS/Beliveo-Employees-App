const { model, Schema } = require('mongoose');

const employeesSchema = new Schema({
  employees: Array,
});

module.exports = model('Employees', employeesSchema);
