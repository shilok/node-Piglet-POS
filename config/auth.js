const knex = require('../knex')
const Employee = () => knex('Employee')
const bcrypt = require('bcryptjs');



module.exports.getEmpByID = (id, callback) => {
    Employee().where('id', id).first().then(callback)
}


module.exports.addEmployee = (emp, callback) => {
    bcrypt.genSalt(10, (error, salt) => {
        bcrypt.hash(emp.hash, salt, (error, hash) => {
            emp.hash = hash
            Employee().insert(emp).then(callback)
        });
    });
}

module.exports.updatePass = (emp, callback) => {
    bcrypt.genSalt(10, (error, salt) => {
        bcrypt.hash(emp.hash, salt, (error, hash) => {
            emp.hash = hash
            Employee().update({hash: emp.hash}).where('id', emp.id).then(callback)
        });
    });
}

module.exports.comparePassword = (pass, hash, callback) => {
    bcrypt.compare(pass, hash, (err, res) =>{
        callback(err, res)
    });
}


