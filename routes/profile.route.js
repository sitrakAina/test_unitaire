module.exports = (app) => {

    const pers = require('../controller/profile.controller');
    app.post('/profil', pers.create);
    app.get('/profil', pers.findAll);

    // app.put('/profil/:profilId', profil.update);
    // app.delete('/profil/:profilId', profil.delete);
    
}