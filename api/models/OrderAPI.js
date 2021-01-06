/**
 * OrderAPI.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName : 'orders',
  attributes: {
   productName: {
     type: 'string',
     required: true,
     columnName: 'product_name'
   },
   productPrice : {
     type: 'number',
     required: true,
     columnName: 'product_price'
   },
   status:{
     type: 'boolean',
     columnName: 'status'
   },
   date: {
     type: 'string',
     columnType: 'date',
     columnName: 'data'
   }

  },

};

