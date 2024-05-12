// email.Controller.js
const { sendEmail } = require('../services/email.service');

// Tester l'envoi d'email
exports.testSendEmailController = async (req, res) => {
  try {
    // Définissez les destinataires, le sujet et le corps de l'e-mail pour le test
    const recipients = ['test@tset.re'];
    const subject = 'Test d\'envoi d\'e-mail';
    const body = 'Ceci est un test d\'envoi d\'e-mail depuis votre application.';

    // Appel de la fonction sendEmail avec les paramètres appropriés
    await sendEmail(recipients, subject, body);

    // Répondre avec un message de succès
    res.status(200).json({ success: true, message: 'Test d\'envoi d\'e-mail réussi !' });
  } catch (error) {
    // Si une erreur se produit, répondre avec un message d'erreur
    console.error('Erreur lors du test d\'envoi d\'e-mail :', error);
    res.status(500).json({ success: false, message: 'Échec du test d\'envoi d\'e-mail.' });
  }
};


exports.sendEmailController = async (req, res) => {
  try {
    const { recipients, subject, body } = req.body;
    await sendEmail(recipients, subject, body);
    res.status(200).json({ success: true, message: 'E-mail envoyé avec succès!' });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email :', error);
    res.status(500).json({ success: false, message: 'Échec de l\'envoi de l\'e-mail' });
  }
};
