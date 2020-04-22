// récupération du module `readline`
const readline = require('readline');

// récupération du module `service`
//const service = require('./service');

const service = require('./service').mesSuperServices;



// récupération du module `menu`
const menu = require('./menu');

// création d'un objet `rl` permettant de récupérer la saisie utilisateur
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//La fonction start
function start() {
    //Affichage du menu
    menu.afficherMenu();
    
    //Scanner
    rl.question('-- Quel est votre choix ? -- ', saisie => {
        // la variable `saisie` contient la saisie effectuée

        if(saisie==1) {
            console.log('>>>>>> Liste des clients <<<<<<');
            service.listerClients().then(tabClient => {
                console.log(tabClient);
                start();
            }).catch(erreur => {
                console.log("erreur");
                start();
            });
        } else if (saisie==2) {
             rl.question('Nom du client : ', nom => {
                rl.question('Prenom du client : ', prenoms => {
                    service.ajouterClient(nom,prenoms).then(message => {
                        console.log(`\n${message}\n`);
                        start();
                    }).catch(erreur => {
                        console.log(`Erreur : ${erreur.message}\n`);
                        start();
                    });
            }) ;
        });
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





