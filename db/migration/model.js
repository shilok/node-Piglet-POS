
/**
 * Module dependencies.
 */

var knex = require('./knex');

/*
 * Get access token.
 */

module.exports.getAccessToken = function (bearerToken) {
    return knex('oauth_tokens')
        .select('access_token', 'access_token_expires_on', 'client_id', 'refresh_token', 'refresh_token_expires_on', 'user_id')
        .where('access_token', knex.raw('?', [bearerToken])).then(result => {
            var token = result.rows[0];

            return {
                accessToken: token.access_token,
                client: { id: token.client_id },
                expires: token.expires,
                user: { id: token.userId }, // could be any object
            };
        })
};

/**
 * Get client.
 */

module.exports.getClient = function* (clientId, clientSecret) {
    return knex('oauth_clients')
        .select('client_id', 'client_secret', 'redirect_uri')
        .where('client_id', knex.raw('?', [clientId])).andWhere('client_secret', knex.raw('?', [clientSecret])).then(result => {

            var oAuthClient = result.rows[0];

            if (!oAuthClient) {
                return;
            }

            return {
                clientId: oAuthClient.client_id,
                clientSecret: oAuthClient.client_secret,
                grants: ['password'], // the list of OAuth2 grant types that should be allowed
            };
        });
};

/**
 * Get refresh token.
 */

module.exports.getRefreshToken = function* (bearerToken) {
    return knex('oauth_tokens')
        .select('access_token', 'access_token_expires_on', 'client_id', 'refresh_token', 'refresh_token_expires_on', 'user_id')
        .where('refresh_token', knex.raw('?', [bearerToken])).then(result => {

            return result.rowCount ? result.rows[0] : false;
        });
};

/*
 * Get user.
 */

module.exports.getUser = function* (username, password) {
    return knex('users')
        .select('id')
        .where('username', knex.raw('?', [username])).andWhere('password', knex.raw('?', [password])).then(result => {
            return result.rowCount ? result.rows[0] : false;
        });
};

/**
 * Save token.
 */

module.exports.saveAccessToken = function* (token, client, user) {
    knex('oauth_tokens')
        .insert({
            access_token: token.accessToken,
            access_token_expires_on: token.accessTokenExpiresOn,
            client_id: client.id,
            refresh_token: token.refreshToken,
            refresh_token_expires_on: token.refreshTokenExpiresOn,
            user_id: user.id
        }).then(result => {

            return result.rowCount ? result.rows[0] : false; // TODO return object with client: {id: clientId} and user: {id: userId} defined
        });
};