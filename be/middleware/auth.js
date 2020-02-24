/**
 * This file is the middleware file for the Api's
 * All the middleware related method will be written here :
 * 1. @method baseAuth
 */

/**
 * Method for Validating API key
 * @method baseAuth
 * @param {*} req 
 * @param {*} res
 * @param {*} next 
 */
function baseAuth(req, res, next) {
    try {
        let token = req.headers['authorization'];
        
        if(token) {

            /** Remove the Basic keyword from the Token string */
            token = token.split(' ')[1];
         
            if(token === process.env.BASE_AUTH_KEY) {
                return next();
            }
        }
        /**
         * If Token not undefined or null just push out the error
         * message with the status code 401 Unauthorize Access
         */
        res.status(401)
            .json({
                response: null,
                error: {
                    message: 'Access Token error'
                }
            });

    } catch (error) {
        res.status(500)
            .json({
                response: null,
                error: {
                    message: 'Internal Server Error'
                }
            });
    }
}

module.exports = baseAuth;