"use strict";

exports.seed = function(knex, Promise) {

  let data = [
    {
      photo_id: 1,
      photobomb_user_id: 1
    },
    {
      photo_id: 1,
      photobomb_user_id: 2
    }
  ];

  return knex('photo_like').insert(data);

};
