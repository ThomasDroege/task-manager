const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded =jwt.verify(token, 'thisismynewcourse')
        const user = await User.findOne({_id: decoded._id, 'tokens.token': token})

        if(!user) {
            throw new Error()
        }

        // the specific token needs to be stored to delete the right token within the logout route
        //(e.g. the laptop token instead the tablet token which is also logged in) 
        req.token = token
        
        //store the found user to the request object 
        req.user = user
        next()
    } catch(e) {
        res.status(401).send({error: 'Please authenticate.'})
    }

}

module.exports = auth