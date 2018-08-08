const _getEnv = env => process.env[env.toUpperCase()];

module.exports = {

  node_env: _getEnv('NODE_ENV'),

  port: _getEnv('PORT'),

  clientId: _getEnv('INSTAGRAM_CLIENT_ID'),

  accessToken: _getEnv('INSTAGRAM_ACCESS_TOKEN'),

  userId: _getEnv('INSTAGRAM_USER_ID'),

  googleAnalytics: _getEnv('GOOGLE_ANALYTICS'),

  googleTagManager: _getEnv('GOOGLE_TAG_MANAGER'),
  
  googleOptimize: _getEnv('GOOGLE_OPTIMIZE')

};