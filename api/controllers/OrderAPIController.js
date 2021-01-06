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
            return res.json('New order created')
        }).catch( err => {
            res.serverError(err)
        })
    },

    delete(req, res){
        OrderAPI.destroy({
            id: req.params.id
        }).then( product => {
            res.ok(product)
        }).catch( err =>  res.serverError(err))
    },

    update(req, res){
        let attributes = {}
        attributes.status = true
        OrderAPI.update({
            id: req.params.id
        }, attributes).then( product => {
            res.ok(product[0])
        } ).catch( err=> {
            res.serverError(err)
        })
    }
};

