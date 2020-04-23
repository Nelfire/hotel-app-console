// récupération des modules externe
import { Interface } from 'readline';
import Service from './services';



const afficherClient = (unClient: any) => console.log(`Client correctement ajouté :
uuid : ${unClient.uuid}
nom : ${unClient.nom}
prenom : ${unClient.prenoms}`);

export class Presentation {

  constructor(private service: Service, private rl: Interface) {
  }

  start() {
    console.log(`
1. Lister les clients
2. Ajouter un client
3. Rechercher un client
99. Sortir`);

    this.rl.question('Choississez une action : \n', (saisie) => {
      switch (saisie) {
        case '1':
          console.log("Liste des clients : ");

          this.service.listerClient().then(clients => {
            console.log(clients.map(element => `${element.nom}   ${element.prenoms}`).join('\n'))
            this.start();
          }).catch(error => {
            console.log(`
Erreur :  ${error}
`);
            this.start();
          });
          break;
        case '2':
          this.rl.question("Nom du client : ", nom => {
            this.rl.question("Prenom du client : ", prenom => {
              this.service.postClient(nom, prenom).then(UnClient => {
                afficherClient(UnClient);
                this.start();
              }).catch(error => {
                console.log(`\nErreur : ${error} \n`);
                this.start();
              });
            });
          });
          break;
        case '99': console.log("Vous sortez de l'application... Aurevoir");
          this.rl.close();// attention, une fois l'interface fermée, la saisie n'est plus possible
          break;
        default:
          console.log("Choix invalide.\n")
          this.start();
      }

    });
  }

}


//Exports
//exports.Presentation = Presentation;
