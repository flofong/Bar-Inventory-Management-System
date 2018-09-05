const Moment = require('moment');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
          id: 1, 
          name: 'Blue Label', 
          bottle_volume: 750, 
          type_id: 1, 
          brand_id: 1, 
          PLU: 'ALKDJDLSKFJDSLFKSJDFJKLD',
          UPC: '123293923231',
          created_at: Moment(),
          modified_at: null
        },

      ]);
    });
};
