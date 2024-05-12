// authMiddleware.js
exports.authMiddleware = (req, res, next) => {
    // Logique d'authentification ici
    // Vérifier si l'utilisateur est authentifié
    if (!req.user) {
      return res.status(401).json({ message: 'Non autorisé' });
    }
    next();
  };
  