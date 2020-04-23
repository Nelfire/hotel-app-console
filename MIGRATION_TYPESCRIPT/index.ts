console.log("** Administration Hotel **");
import {Presentation} from './presentation';
import readline from 'readline'
import Service from './services'
const service = new Service()
// création d'un objet `rl` permettant de récupérer la saisie utilisateur
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
const presentation = new Presentation(service, rl)
presentation.start();
