const userRouter = require('./user');
const motiveRouter = require('./motive');

module.exports = app => {
    app.use('/user', userRouter);
    app.use('/motive', motiveRouter);
};
