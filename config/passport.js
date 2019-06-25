 const JwtStrategy = require('passport-jwt').Strategy
 const ExtractJwt = require('passport-jwt').ExtractJwt
 const User = require('./auth')

 module.exports = (passport) => {
     var opts = {}
     opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt')
     opts.secretOrKey = 'secret'

     passport.use(new JwtStrategy(opts, (jwt_payload, done) => {

         User.getEmpByID(jwt_payload.employeeID, emp => {
             if (emp){
                 return done(null, emp)
             }else{
                 return done(null, false)
             }
         })
     }))
 }