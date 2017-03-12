var express = require('express');
var router = express.Router();

var ctrlContact = require('../controllers/contact.controllers.js');
var ctrlHome = require('../controllers/home.controllers.js');
var ctrlSponsor = require('../controllers/sponsor.controllers.js');
var ctrlRunner = require('../controllers/runner.controllers.js');


router
  .route('/sponsors')
  .get(ctrlSponsor.sponsorsGetAll);

router
  .route('/sponsor/apply')
  .post(ctrlSponsor.sponsorAddOne);

router
  .route('/contact')
  .post(ctrlContact.contactAddOne);

router
  .route('/contacts')
  .get(ctrlContact.messagesGetAll);


router
  .route('/admin')
  .get(ctrlRunner.runnersGetAll);

router
  .route('/registration/apply')
  .post(ctrlRunner.runnerAddOne);

module.exports = router;
