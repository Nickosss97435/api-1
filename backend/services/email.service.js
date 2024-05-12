exports.sendEmail = async (recipients, subject, body) => {
  try {
    const nodemailer = require('nodemailer');
    require('dotenv').config(); // Charger les variables d'environnement à partir de .env

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: recipients,
      subject: subject,
      text: body
    }
  );
  console.log(sendMail);

    console.log('E-mail envoyé avec succès');
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
    throw error;
  }
};
