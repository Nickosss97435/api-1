// email.routes.js
const express = require('express');
const router = express.Router();
const { sendEmailController, testSendEmailController } = require('../controllers/email.Controller');

// Route pour envoyer un e-mail
router.post('/send-email', sendEmailController);

// Route pour tester l'envoi d'e-mail
router.post('/test-send-email', testSendEmailController);

module.exports = router;
