'use strict';

const Schwifty = require('schwifty');
const Joi = require('joi');

module.exports = class Products extends Schwifty.Model {

    static get tableName() {

        return 'products';
    }

    static get joiSchema() {

        
        return Joi.object({
            name: Joi.number().required(), 
            bottle_volume: Joi.number().required(), 
            type_id: Joi.number().required(), 
            brand_id: Joi.number().required(), 
            PLU: Joi.string().required(),
            UPC: Joi.string(),
            created_at: Joi.date(),
            modified_at: Joi.date()
        }); // eslint-disable-line no-undef
    }
};
