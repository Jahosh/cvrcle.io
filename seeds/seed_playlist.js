exports.seed = function (knex, Promise) {
  return knex.raw('SET foreign_key_checks = 0')
  .then(() => {
    return knex('playlist').del()
      .then(function () {
        // Inserts seed entries
        return knex('playlist').insert([
          {
            id: 1,
            ownerID: '4',
            itinID: '8',
            name: 'Test Playlist'
          }
        ]);
      })
  })
};