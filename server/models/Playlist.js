const Model = require('objection').Model;
const User = require('./User')
const Itinerary = require('./Itinerary')
const Entry = require('./Entry')

class Playlist extends Model {
  static get tableName() {
    return 'playlist'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['ownerID', 'itinID' ],

      properties: {
        id: { type: 'integer' },
        ownerID: { type: 'string', minLength: 1, maxLength: 255 },
        itinID: { type: 'string', minLength: 1, maxLength: 255 },
        name: { type: 'string', minLength: 1, maxLength: 255 }
      }
    };
  }

  static get relationMappings() {
    return {

      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/User',
        join: {
          from: 'playlist.ownerID',
          to: 'users.id'
        }
      },

      itinerary: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/Itinerary',
        join: {
          from: 'playlist.itinID',
          to: 'itinerary.id'
        }
      }
    }

  }

}

module.exports = Playlist;
