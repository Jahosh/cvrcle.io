exports.seed = function (knex, Promise) {
  return knex.raw('SET foreign_key_checks = 0')
  .then(() => {
    return knex('track').del()
      .then(function () {
        // Inserts seed entries
        return knex('track').insert([
          {
            id: 1,
            ownerID: '4',
            itinID: '8',
            name: 'Test Playlist',
            artwork: 'test artwork',
            stream_url: 'testing123'
          }
        ]);
      })
  })
};