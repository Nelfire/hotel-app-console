
//Import

import request, { RequestPromise } from 'request-promise-native'
import { Client } from './domain';

export default class Service {
  ///Fonction pour reccup' les clients    
 listerClient(): RequestPromise<Client[]> {
    return request('https://hwa-spring.herokuapp.com/clients?start=0&size=10', { json: true })
  }

  //Fonction ajout client 
 postClient(nom:string, prenom:string): RequestPromise<Client> {

    return request({
      url: 'https://hwa-spring.herokuapp.com/clients',
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: {
        'nom': nom,
        'prenoms': prenom
      },
      json: true
    });
  }
}


//module.exports = Service;
