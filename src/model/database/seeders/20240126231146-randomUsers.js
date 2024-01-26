'use strict';

const { faker } = require('@faker-js/faker');

function User(firstName, lastName, dni){
  this.firstName = firstName;
  this.lastName = lastName;
  this.dni = dni;
  this.createdAt = new Date();
  this.updatedAt = new Date();
}

let randomUsers = [];
for (let index = 0; index < 30; index++) {
  randomUsers.push(new User(faker.person.firstName(), faker.person.lastName(), faker.string.numeric(8))) 
}

module.exports = {
  async up (queryInterface, Sequelize) {

       await queryInterface.bulkInsert('Users', randomUsers, {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Users', null, {});
     
  }
};
