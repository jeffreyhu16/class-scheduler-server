const express = require('express');
const cors = require('cors');
const dateRouter = require('./Date/DateRouter');
const classRouter = require('./Class/ClassRouter');
const locationRouter = require('./Location/LocationRouter');
const coachRouter = require('./Coach/CoachRouter');
const studentRouter = require('./Student/StudentRouter');

exports.combinedRoute = (app) => {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use('/date', dateRouter);
    app.use('/class', classRouter);
    app.use('/student', studentRouter);
    app.use('/location', locationRouter);
    app.use('/coach', coachRouter);
}
