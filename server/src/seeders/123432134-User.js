const { ROLES, SALT_ROUNDS } = require("../constants");
const bcrypt = require('bcrypt')


module.exports = {
    up: async (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [
        {
            first_name: 'Customer',
              last_name: 'Customerovich',
              display_name: 'Cust',
              password: await bcrypt.hashSync('Customer1234', SALT_ROUNDS),
              email: 'query@customer',
              role: ROLES.CUSTOMER,
        },
        {
            first_name: 'Creator',
              last_name: 'Creatorovich',
              display_name: 'Creat',
              password: await bcrypt.hashSync('Creator1234', SALT_ROUNDS),
              email: 'query@creator.com',
              role: ROLES.CREATOR,
        }
      ], {});
    },
};