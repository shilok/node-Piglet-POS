const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('./auth')

module.exports = (passport) => {
    var opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt')
    opts.secretOrKey = 'secret'

    passport.use(new JwtStrategy(opts, (jwt, done) => {
        User.getEmpByID(jwt.id, emp => {
            if (emp && emp.isActive) {
                User.comparePassword(jwt.pass, emp.hash, (err, isMatch) => {
                    if (err) {
                        return done(null, false)
                    }
                    if (isMatch) {
                        return done(null, emp)
                    }
                    return done(null, false)
                })
            } else {
                return done(null, false)
            }
        })
    }))
}