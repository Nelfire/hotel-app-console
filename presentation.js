// récupération du module `readline`
var readline = require('readline');

// récupération du module `service`
var service = require('./service');

// récupération du module `menu`
var menu = require('./menu');

// création d'un objet `rl` permettant de récupérer la saisie utilisateur
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//La fonction start
function start() {
    //Affichage du menu
    menu.afficherMenu();
    
    //Scanner
    rl.question('-- Quel est votre choix ? -- ', function(saisie) {
        // la variable `saisie` contient la saisie effectuée

        if(saisie==1) {
            console.log('>>>>>> Liste des clients <<<<<<');
            service.listerClients(function(tabClient) {
                tabClient.forEach(element => {
                    console.log(element.nom + " " + element.prenoms)
                });
            })
            start();
        } else if (saisie==2) {
            rl.question('Nom du client : ', function(nom) {
                rl.question('Prenom du client : ', function(prenoms) {
                    service.ajouterClient(nom,prenoms)
                    start();
                })
            })
        } else if (saisie==3) {
            console.log('>>>>>> Rechercher un client par nom <<<<<<');
            start();
        } else if (saisie==4) {
            console.log('>>>>>> Vérifier la disponibilité d\'une chambre <<<<<<');
            start();
        } else if (saisie==99) {
            console.log('>>>>>> Aurevoir <<<<<<');
            rl.close();
        } else {
            console.log('-------- Erreur dans la saisie');
            start();
        }
    });
}

//Exporter la fonction pour qu'elle soit visible ailleurs
exports.start = start;





