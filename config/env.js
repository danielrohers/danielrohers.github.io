const _getEnv = env => process.env[env.toUpperCase()];

module.exports = {

  clientId: _getEnv('INSTAGRAM_CLIENT_ID'),

  accessToken: _getEnv('INSTAGRAM_ACCESS_TOKEN'),

  userId: _getEnv('INSTAGRAM_USER_ID')

};