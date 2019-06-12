
const Profile = require('../models/profile.model');
const fs = require('fs');

//Create new profil
exports.create = (req, res) => {
    
    Profile.find()
    .then(user => {
        //autoincrement
        let idautom;
        if(user.length == 0){
            idautom = 0
        }else {
            idautom = parseInt(user[user.length - 1]._id) + 1
        }
        
        // // //images
        // let imageFile = req.files.photo_profil;
        // //console.log('inona ny ato o!'+imageFile)
        // let nomImage = idautom
        // res.setHeader('Content-Type', 'text/plain');

        // imageFile.mv(`${__dirname}/public/${nomImage }.jpg`, function(err) {
        //   if (err) {
        //     return res.status(500).send(err);
        //   }
          
          
        //   //res.send({file:`public/${nomImage }.jpg`});
          
          
        // });
        
        
        
        //console.log('image file '+req.body.filename)
    const profil = new Profile({   
             
        _id: idautom,
        nom: req.body.nom , 
        prenom: req.body.prenom,
    });

    // bcrypt.genSalt((err,salt) =>{
    //     bcrypt.hash(profil.password, salt, (err,hash)=>{
    //         if(err) throw err;
    //         profil.password = hash;
    //         profil
    //             .save()
    //             // .then(profk => res.json(profk))
    //             // .catch(err => {
    //             //     res.status(500).send({
    //             //         message: err.message || "Something wrong while retrieving profils."
    //             //     });
    //             // })
    //     })
    // })

    // Save p in the database
    profil.save()
    .then(() => {
        Profile.find()
        .then(data=>{
            res.send(data);
        })
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the profil."
            
        });
    });
})
};

exports.findAll = (req, res) => {   
    Profile.find()
    .then(users => {    
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving profils."
        });
    });
};


