"use strict";

exports.seed = function(knex, Promise) {

  let data = [
    {
      comment_id: 1,
      comment_text: 'Awesome!',
      photo_id:1,
      photobomb_user_id: 1
    },
    {
      comment_id: 2,
      comment_text: 'Giving away your secret identity Bruce?',
      photo_id:1,
      photobomb_user_id: 2
    },
    {
      comment_id: 3,
      comment_text: 'Shut Up Superman!',
      photo_id:1,
      photobomb_user_id: 1
    }
  ];

  return knex('comment').insert(data)
  .then(() => {
  return knex.raw(
    "SELECT setval('comment_comment_id_seq', (SELECT MAX(comment_id) FROM comment))");
  });

};
