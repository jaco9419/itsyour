export default {
    MONGODB_URL: process.env.NONGODB_URL || 'mongodb://localhost/itsyours',
    JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret'
}