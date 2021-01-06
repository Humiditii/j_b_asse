/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

    'POST /order': 'OrderAPIController.create',
    'GET /orders' : 'OrderAPIController.find',
    'PUT /orders/:id' : 'OrderAPIController.update'
};
