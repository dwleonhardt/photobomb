"use strict";

exports.seed = function(knex, Promise) {

  let data = [
    {
      comment_id: 1,
      photobomb_user_id: 1
    },
    {
      comment_id: 3,
      photobomb_user_id: 1
    },
    {
      comment_id: 2,
      photobomb_user_id: 2
    }
  ];

  return knex('comment_like').insert(data);

};
