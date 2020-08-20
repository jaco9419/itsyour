import jwt from 'jasonwebtoken';
import config from './config';

const getToken = user => {
    //first param is the payload, second is a secret key
    return jwt.sign(user, config.JWT_SECRET, {
        expiresIn: '48h',
    })
}

export {
    getToken
}