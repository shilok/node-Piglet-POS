const knex = require('../knex')
const EmpAuth = () => knex('EmpAuth')
const bcrypt = require('bcryptjs');



module.exports.getEmpByID = (id, callback) => {
    EmpAuth().where('employeeID', id).first().then(callback)
}


module.exports.addEmpAuth = (emp, callback) => {
    bcrypt.genSalt(10, (error, salt) => {
        bcrypt.hash(emp.hash, salt, (error, hash) => {
            emp.hash = hash
            EmpAuth().insert(emp).then(callback)
        });
    });
}

module.exports.comparePassword = (pass, hash, callback) => {
    bcrypt.compare(pass, hash, (err, res) =>{
        callback(err, res)
    });
}


