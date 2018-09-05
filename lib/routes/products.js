'use strict';

const Boom = require('boom')
let Moment = require('moment')

module.exports = [
    {
        method: 'GET',
        path: '/products/json',
        options: {
            description: 'Return a JSON list of products',
            handler: async (request, h) => {
    
                const { Products } = request.models()
                const products = await Products.query()
    
                return products
    
            }
        }
    },
    {
        method: 'POST',
        path: '/products',
        options: {
            description: 'Create a new product',
            pre: [{
                assign: 'product', 
                method: async (request, h) => {
    
                    const { Products } = request.models()
        
                    let productPayload = {
                        created_at: Moment().format('YYYY/MM/DD HH:mm:ss'),
                        modified_at: Moment().format('YYYY/MM/DD HH:mm:ss')
                    }
        
                    try { 
        
                        return await Products.query().insert(productPayload)            
                    
                    } catch (err){
        
                        console.log('error creating new products record')
                        console.log(err)
                        return boom.badRequest(err.Error)
                    }                
    
    
                }
            }],        
            handler: async (request, h) => {
                        
                
                return request.pre.product
    
            }
        }
    } 
];
