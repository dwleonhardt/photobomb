const knex = require('../knex');

function getPhotos(){
  return knex()
  .select(
    'p.photo_id AS id',
    'p.photo_url AS url',
    'p.photobomb_user_id AS photographer_id'
  )
  .from('photo as p');

}

function list(){
  return getPhotos();
}

module.exports = {list};
