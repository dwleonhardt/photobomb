const photolist = require('./queries/knex_simple');

photolist().then(result => {

  let obj = result.reduce((acc,cur) => {

    let index = acc.map(function(e) { return e.id; }).indexOf(cur.id);

    if (index === -1) {
      acc.push({
        id: cur.id,
        photo_url: cur.url,
        photographer: cur.photographer,
      });

      index = acc.length - 1;
      if (cur.photo_liked_by) {
        acc[index].photo_liked_by = [
          acc.photo_liked_by
        ];
      } else {
        acc[index].photo_liked_by = [];
      }

    } else {
      if (cur.photo_liked_by && acc[index].photo_liked_by.indexOf(cur.photo_liked_by) === -1) {
        acc[index].photo_liked_by.push(cur.photo_liked_by);
      }
    }
    return acc;
  },[]);
  // console.log(obj);
  process.exit();
});

function buildPhotoObject() {
  
}
