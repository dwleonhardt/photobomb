"use strict";

exports.seed = function(knex, Promise) {

  let data = [
    {
      photobomb_user_id: 1,
      name: "Bruce Wayne"
    },
    {
      photobomb_user_id: 2,
      name: "Clark Kent"
    }
  ];

  return knex('photobomb_user').insert(data)
  .then(() => {
  return knex.raw(
    "SELECT setval('photobomb_user_photobomb_user_id_seq', (SELECT MAX(photobomb_user_id) FROM photobomb_user))");
  });
};
