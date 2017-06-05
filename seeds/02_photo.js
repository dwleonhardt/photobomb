"use strict";

exports.seed = function(knex, Promise) {

  let data = [
    {
      photo_id: 1,
      photo_url: 'https://cdn.pixabay.com/photo/2017/05/20/22/58/batman-2330021_1280.png',
      photobomb_user_id: 1
    }
  ];

  return knex('photo').insert(data)
  .then(() => {
  return knex.raw(
    "SELECT setval('photo_photo_id_seq', (SELECT MAX(photo_id) FROM photo))");
  });

};
