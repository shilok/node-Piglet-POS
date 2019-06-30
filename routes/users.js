const express = require('express')
const router = express.Router()
const Emp = require('../config/auth')
const passport = require('passport')
const jwt = require('jsonwebtoken')

router.post('/updatePass', (req, res, next) => {

    let newEmp = {
        id: req.body.id,
        hash: req.body.pass
    }

    Emp.updatePass(newEmp, isSuccess => {
        if (isSuccess){
            Emp.getEmpByID(newEmp.id, emp => {
                res.redirect(302, '/api/users/authenticate?emp=' + JSON.stringify(emp))
            })
        }else{
            res.json({ success: false, msg: 'Faild to update Password' })
        }
    })
})

router.post('/register', (req, res, next) => {

    let newEmp = req.body.employee

    Emp.getEmpByID(newEmp.id, employee => {
        if (employee) { return res.json({ success: false, msg: 'User Already exist' }) }
        Emp.addEmployee(newEmp, emp => {
            if (!emp) {
                res.json({ success: false, msg: 'Faild to Register' })
            } else {
                res.redirect(302, '/api/users/authenticate?emp=' + JSON.stringify(newEmp))
            }
        })
    })
})

router.get('/authenticate', (req, res, next) => {
    const emp = JSON.parse(req.query.emp)
    const employee = {id: emp.id, firstName: emp.firstName, lastName: emp.lastName}
    const token = jwt.sign(employee, 'secret', {
        expiresIn: 604800,
    })
    res.json({
        success: true,
        token: 'JWT ' + token,
        emp: employee
    })


})


router.post('/authenticate', (req, res, next) => {
    const id = req.body.id
    const pass = req.body.pass
    console.log(id)
    console.log(pass)

    if (!id || !pass){
        return res.json({ success: false, msg: 'Employee ID or Pass is missing' })
    }

    Emp.getEmpByID(id, (emp) => {
        if (!emp || !emp.isActive) {
            return res.json({ success: false, status: 'Employee', msg: 'Employee not found' })
        }
 
        Emp.comparePassword(pass, emp.hash, (err, isMatch) => {
            if (err) { 
                return res.json({success: false, status: 'Error'})
            }
            if (isMatch) {
                const employee = {id: emp.id, firstName: emp.firstName, lastName: emp.lastName}
                const token = jwt.sign(employee, 'secret', {
                    expiresIn: 604800,
                })
                res.json({
                    success: true,
                    status: "Token",
                    token: 'JWT ' + token,
                    emp: employee
                })
            } else {
                return res.json({ success: false, status: 'Password', msg: 'Wrong Password' })
            }
        })
    })
})

router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json({ user: req.user })
})


module.exports = router