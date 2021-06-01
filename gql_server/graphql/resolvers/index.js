const usersResolvers = require('./users');
const employeesResolvers = require('./employees');

module.exports = {
  Query: {
    ...employeesResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
  },
};
