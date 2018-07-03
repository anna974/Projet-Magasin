var express = require('express');
var router = express.Router();


var magasin = require("../controllers/magasinControllers");

//recuperer les produits
router.get("/", magasin.list);

//cree un magasin
router.get("/ajoutmagasin", magasin.create);

//sauvegarder un produit. /!\ cest un POST 
router.post("/save", magasin.save);


//export du module router
module.exports = router;