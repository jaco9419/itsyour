import jwt from 'jsonwebtoken';
import config from './config';

const getToken = user => {
    //first param is the payload, second is a secret key
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,

    }, config.JWT_SECRET, {
        expiresIn: '48h',
    })
}

export {
    getToken
}