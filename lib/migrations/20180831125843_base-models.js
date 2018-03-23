
'use strict';

exports.up = function (knex, Promise) {

    return knex
        .schema
        .createTable('products', (productsTable) => {

            // Primary Key
            productsTable.increments();

            productsTable.integer( 'type_id' ).notNullable();
            productsTable.integer( 'brand_id' ).notNullable();

            productsTable.string( 'name' ).notNullable();
            productsTable.integer( 'bottle_volume' ).notNullable(); //measured in mL

            productsTable.string( 'PLU' ).notNullable();
            productsTable.string( 'UPC' ).nullable();

            productsTable.timestamp( 'created_at' );
            productsTable.timestamp( 'modified_at' );

        })

        .createTable('types', (typesTable) => {

            // Primary Key
            typesTable.increments();

            typesTable.integer( 'name' ).notNullable();

            typesTable.timestamp( 'created_at' );
            typesTable.timestamp( 'modified_at' );

        });

};

exports.down = function (knex, Promise) {

    return knex
        .schema
        .dropTableIfExists('products')
        .dropTableIfExists('types');
};
