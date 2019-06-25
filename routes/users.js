const express = require('express')
const router = express.Router()
const Emp = require('../config/auth')
const passport = require('passport')
const jwt = require('jsonwebtoken')

router.post('/register', (req, res, next) => {

    let newEmp = {
        employeeID: req.body.id,
        hash: req.body.pass
    }

    Emp.getEmpByID(newEmp.employeeID, isExist => {
        if (isExist) { return res.json({ success: false, msg: 'User Already exist' }) }
        Emp.addEmpAuth(newEmp, emp => {
            if (!emp) {
                res.json({ success: false, msg: 'Faild to Register' })
            } else {
                res.json({ success: true, msg: 'Register successfully' })
            }
        })
    })
})

router.post('/authenticate', (req, res, next) => {
    const id = req.body.id
    const pass = req.body.pass

    Emp.getEmpByID(id, (emp) => {
        if (!emp) {
            return res.json({ success: false, msg: 'Employee not found' })
        }

        Emp.comparePassword(pass, emp.hash, (err, isMatch) => {
            if (err) {
                return res.send('Error Auth')
            }
            if (isMatch) {
                const token = jwt.sign(JSON.parse(JSON.stringify(emp)), 'secret', {
                    expiresIn: 604800,
                })
                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    emp: {
                        employeeID: emp.employeeID,
                    }
                })
            } else {
                return res.json({ success: false, msg: 'Wrong Password' })
            }
        })
    })
})

router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json({ user: req.user })
})


module.exports = router