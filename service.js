var request = require('request');

function listerClients(callback) {
    request('http://localhost:8080/clients/lister?start=0&size=10', { json: true }, function(err, res, body) {
        if (err) { return console.log('Erreur', err); }
        // body contient les données récupérées
        callback(body)
    });
}
function ajouterClient(nom,prenoms) {

    request('http://localhost:8080/clients', { 
        json: true, 
        method: 'POST', 
        body: {
            nom : `${nom}`,
            prenoms : `${prenoms}`
        } 
    }, function(res, err, body) {
        if (err) { 
            return console.log('Erreur', err); 
        }
        console.log("Client corretement ajouté !");
    });

}


exports.listerClients = listerClients;
exports.ajouterClient = ajouterClient;