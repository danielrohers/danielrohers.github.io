const env = require('../../config/env');
const ig = require('instagram-node').instagram();

let _pagination;

const _getImages = () => {
  return new Promise((resolve, reject) => {
    const { clientId, accessToken, userId } = env;

    ig.use({
      access_token: accessToken,
      client_id: clientId
    });

    ig.user_media_recent(userId, (err, medias, pagination, remaining, limit) => {
      if (err) return reject(err);
      _pagination = pagination;
      resolve(medias);
    });
  });
};

const _getImagesPagination = () => {
  return new Promise((resolve, reject) => {
    if (!_pagination.next_max_id) return resolve(null);

    _pagination.next((err, medias, pagination) => {
      if (err) return reject(err);
      resolve(medias);
      _pagination = pagination;
    });
  });
};

module.exports = {

  index(req, res, next) {
    _getImages()
      .then(medias => res.render('index', { medias }))
      .catch(next);
  },

  pagination(req, res) {
    _getImagesPagination()
      .then(medias => res.status(200).json({ medias }))
      .catch(err => res.status(500).json({ err }));
  }

};