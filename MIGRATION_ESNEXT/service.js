const request = require('request-promise-native');
//const request = require('request');

//https://hwa-spring.herokuapp.com/clients?start=0&size=10
//http://localhost:8080/clients/lister?start=0&size=10
/* function listerClients(callback) {
    request('https://hwa-spring.herokuapp.com/clients?start=0&size=10', { json: true }, function(err, res, body) {
        if (err) { return console.log('Erreur', err); }
        // body contient les données récupérées
        callback(body)
    });
} */
class Service {
    listerClients() {
        return request('https://hwa-spring.herokuapp.com/clients?start=0&size=10', { json: true })
        .then(body => {
            let response = "" ;
            body.forEach(element => {
                response += `${element.nom} - ${element.prenoms}\n`;
            });

            return response;
        })
    }
    /*
    function ajouterClient(nom,prenoms, callbackSuccess, callbackErr) {

        request('https://hwa-spring.herokuapp.com/clients', { 
            json: true, 
            method: 'POST', 
            body: {
                nom : `nom`,
                prenoms : `prenoms`
            } 
        }, function(res, err, body) {
            if (err) { 
                return console.log('Erreur', err); 
            } else {
                console.log("Client corretement ajouté !");
            }
        });

    }
    */
    ajouterClient(nom,prenoms) {

        return request('https://hwa-spring.herokuapp.com/clients', { 
            json: true, 
            method: 'POST', 
            body: {
                'nom' : nom,
                'prenoms' : prenoms
            } 
        }).then( body => {
            return `Client corretement ajouté ! : ${body.nom} - ${body.prenoms}`
        });

    }
}

exports.mesSuperServices = new Service();
/* exports.service = new Service(); */
/* exports.listerClients = listerClients;
exports.ajouterClient = ajouterClient; */