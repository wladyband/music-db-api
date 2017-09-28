
var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    API_LOCATION: '"http://api.music-db.dev"',
    BROADCAST_AUTH_ENDPOINT: '"http://api.music-db.dev/broadcasting/auth"',
    PUSHER_KEY: '"9e5d5e948a1a6c96f3c2"',
    PUSHER_CLUSTER: '"eu"',
})
