const Model = require('objection').Model;
const User = require('./User')
const Itinerary = require('./Itinerary')
const Entry = require('./Entry')

class Track extends Model {
  static get tableName() {
    return 'track'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['ownerID', 'itinID', 'name', 'artwork', 'stream_url' ],

      properties: {
        id: { type: 'integer' },
        ownerID: { type: 'string', minLength: 1, maxLength: 255 },
        itinID: { type: 'string', minLength: 1, maxLength: 255 },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        artwork: { type: 'string', minLength: 1, maxLength: 255 },
        stream_url: { type: 'string', minLength: 1, maxLength: 255 }
      }
    };
  }

  static get relationMappings() {
    return {

      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/User',
        join: {
          from: 'track.ownerID',
          to: 'users.id'
        }
      },

      itinerary: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/Itinerary',
        join: {
          from: 'track.itinID',
          to: 'itineraries.id'
        }
      }
    }

  }

}

module.exports = Track;
