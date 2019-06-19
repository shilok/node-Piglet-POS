exports.up = function (knex, Promise) {
  return knex.schema

    .createTable('Address', table => {
      table.increments()
      table.string('country').notNullable()
      table.string('state').notNullable()
      table.string('city').notNullable()
      table.string('street').notNullable()
      table.string('line1').notNullable()
      table.string('line2')
    })
    .createTable('Location', table => {
      table.increments();
      table.string('name').notNullable()
      table.integer('addressID').unsigned().references('id').inTable('Address');
    })
    .createTable('Inventory', table => {
      table.increments()
      table.string('name').notNullable()
    })
    .createTable('Store', table => {
      table.increments();
      table.integer('locationID').unsigned().references('id').inTable('Location');
      table.integer('stockInventoryID').unsigned().references('id').inTable('Inventory');
      table.string('name').notNullable()
    })
    .createTable('SalaryType', table => {
      table.increments()
      table.string('type')
    })
    .createTable('CommissionType', table => {
      table.increments()
      table.string('type')
    })

    .createTable('Employee', table => {
      table.increments()
      table.string('firstName').notNullable()
      table.string('lastName').notNullable()
      table.string('email').notNullable()
      table.date('birthday').notNullable()
      table.date('hireDate').notNullable()
      table.integer('salaryTypeID').unsigned().references('id').inTable('SalaryType');
      table.integer('commissionTypeID').unsigned().references('id').inTable('CommissionType');
      table.string('country').notNullable()
      table.string('state').notNullable()
      table.string('city').notNullable()
      table.string('street').notNullable()
      table.string('line1').notNullable()
      table.string('line2')
      table.string('image')
      table.string('notes')
    })



    .createTable('Supplier', table => {
      table.increments()
      table.string('name').notNullable()
      table.string('email').notNullable()
    })


    .createTable('Product', table => {
      table.increments()
      table.string('name').notNullable()
      table.string('description').notNullable()
      table.double('minPrice')
      table.double('displayPrice')
      table.double('height')
      table.double('width')
      table.double('length')
      table.double('weight')
      table.integer('supplierID').unsigned().references('id').inTable('Supplier');
    })

    .createTable('ShiftStatus', table => {
      table.increments()
      table.string('status').notNullable()
    })
    .createTable('Shift', table => {
      table.increments()
      table.integer('employeeID').unsigned().references('id').inTable('Employee');
      table.date('start').notNullable()
      table.date('end').notNullable()
      table.integer('shiftStatusID').unsigned().references('id').inTable('ShiftStatus');
    })
    .createTable('Break', table => {
      table.increments()
      table.date('start').notNullable()
      table.date('end')
      table.integer('shiftID').unsigned().references('id').inTable('Shift');
    })


    .createTable('DailySalary', table => {
      table.increments()
      table.integer('shiftID').unsigned().references('id').inTable('Shift');
      table.float('total')
    })

    .createTable('Image', table => {
      table.increments()
      table.string('url').notNullable()
      table.string('description')
    })

    .createTable('Phone', table => {
      table.increments()
      table.string('number').notNullable()
    })
    .createTable('Email', table => {
      table.increments()
      table.string('address').notNullable()
    })
    .createTable('Customer', table => {
      table.increments()
      table.string('firstName').notNullable()
      table.string('lastName').notNullable()
      table.integer('defaultAddressID').unsigned().references('id').inTable('Address');
    })
    .createTable('OrderStatus', table => {
      table.increments()
      table.string('status').notNullable()
    })
    .createTable('OrderDetailsStatus', table => {
      table.increments()
      table.string('status').notNullable()
    })

    .createTable('Shipper', table => {
      table.increments()
      table.string('name').notNullable()
      table.string('phone').notNullable()
      table.string('website').notNullable()
      table.string('trackingURL').notNullable()
    })

    .createTable('Payment', table => {
      table.increments()
      table.string('type').notNullable()
    })

    .createTable('Order', table => {
      table.increments()
      table.integer('customerID').unsigned().references('id').inTable('Customer');
      table.integer('employeeID').unsigned().references('id').inTable('Employee');
      table.integer('statusID').unsigned().references('id').inTable('OrderStatus').defaultTo(1);
      table.integer('paymentTypeID').unsigned().references('id').inTable('Payment');
      table.integer('shipperID').unsigned().references('id').inTable('Shipper');
      table.integer('shipAddressID').unsigned().references('id').inTable('Address');
      table.decimal('taxRate', 19, 4)
      table.decimal('shippingPrice', 19, 4)
      table.string('notes')
      table.string('trackingNumber')
      table.timestamp('createdDate').defaultTo(knex.fn.now())
      table.timestamp('modifiedDate').defaultTo(knex.fn.now())
    })

    .createTable('Invoice', table => {
      table.increments()
      table.integer('orderID').unsigned().references('id').inTable('Order');
      table.decimal('taxes', 19, 4)
      table.decimal('totalPrice', 19, 4)
      table.string('notes')
      table.timestamp('createdDate').defaultTo(knex.fn.now())
      table.timestamp('modifiedDate').defaultTo(knex.fn.now())
    })


    .createTable('OrderDetails', table => {
      table.increments()
      table.integer('orderID').unsigned().references('id').inTable('Order');
      table.integer('productID').unsigned().references('id').inTable('Product');
      table.integer('inventoryID').unsigned().references('id').inTable('Inventory');
      table.integer('orderDetailsStatusID').unsigned().references('id').inTable('OrderDetailsStatus');
      table.integer('quantity').notNullable()
      table.decimal('price', 19, 4)
      table.decimal('discount', 19, 4).defaultTo(0)
    })
    .createTable('Tag', table => {
      table.increments()
      table.string('name')
    })
    .createTable('Permission', table => {
      table.increments()
      table.string('name')
    })

    .createTable('InventoryLocation', table => {
      table.integer('locationID').unsigned().references('id').inTable('Location');
      table.integer('inventoryID').unsigned().references('id').inTable('Inventory');
    })

    .createTable('InventoryProduct', table => {
      table.integer('inventoryID').unsigned().references('id').inTable('Inventory');
      table.integer('productID').unsigned().references('id').inTable('Product');
      table.integer('quantity');
    })


    .createTable('ProductTag', table => {
      table.integer('tagID').unsigned().references('id').inTable('Tag');
      table.integer('productID').unsigned().references('id').inTable('Product');
    })

    .createTable('ProductImage', table => {
      table.integer('imageID').unsigned().references('id').inTable('Image');
      table.integer('productID').unsigned().references('id').inTable('Product');
    })

    .createTable('StoreEmployee', table => {
      table.integer('storeID').unsigned().references('id').inTable('Store');
      table.integer('employeeID').unsigned().references('id').inTable('Employee');
    })


    .createTable('EmployeeOrder', table => {
      table.integer('employeeID').unsigned().references('id').inTable('Employee');
      table.integer('orderID').unsigned().references('id').inTable('Order');
    })

    .createTable('EmployeePermission', table => {
      table.integer('permissionID').unsigned().references('id').inTable('Permission');
      table.integer('employeeID').unsigned().references('id').inTable('Employee');
    })

    .createTable('CustomerEmail', table => {
      table.integer('customerID').unsigned().references('id').inTable('Customer');
      table.integer('emailID').unsigned().references('id').inTable('Email');
    })

    .createTable('CustomerAddress', table => {
      table.integer('addressID').unsigned().references('id').inTable('Address');
      table.integer('customerID').unsigned().references('id').inTable('Customer');
    })

    .createTable('CustomerPhone', table => {
      table.integer('phoneID').unsigned().references('id').inTable('Phone');
      table.integer('customerID').unsigned().references('id').inTable('Customer');
    })


};
exports.down = function (knex, Promise) {
  return knex.schema
    .dropTable('CustomerPhone')
    .dropTable('CustomerAddress')
    .dropTable('CustomerEmail')
    .dropTable('EmployeePermission')
    .dropTable('EmployeeOrder')
    .dropTable('StoreEmployee')
    .dropTable('ProductImage')
    .dropTable('ProductTag')
    .dropTable('InventoryProduct')
    .dropTable('InventoryLocation')
    .dropTable('Permission')
    .dropTable('Tag')
    .dropTable('OrderDetails')
    .dropTable('Invoice')
    .dropTable('Order')
    .dropTable('Payment')
    .dropTable('Shipper')
    .dropTable('OrderDetailsStatus')
    .dropTable('OrderStatus')
    .dropTable('Customer')
    .dropTable('Email')
    .dropTable('Phone')
    .dropTable('Image')
    .dropTable('DailySalary')
    .dropTable('Break')
    .dropTable('Shift')
    .dropTable('ShiftStatus')
    .dropTable('Product')
    .dropTable('Supplier')
    .dropTable('Employee')
    .dropTable('CommissionType')
    .dropTable('SalaryType')
    .dropTable('Store')
    .dropTable('Inventory')
    .dropTable('Location')
    .dropTable('Address')
};
//