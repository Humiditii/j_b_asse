/**
 * OrderAPIController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
  
    create(req, res){
        OrderAPI.create(
            {
                productName: req.body.productName,
                productPrice: req.body.productPrice,
                status: false,
                date: Date.now()
            }
        ).then( order => {
            return res.ok(order)
        }).catch( err => {
            res.serverError(err)
        })
    }
};

