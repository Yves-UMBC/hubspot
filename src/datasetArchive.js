const api = require('./api')

/* bent is a function that returns an async function.
   bent takes options which constrain what is accepted by the client. Any response that falls outside the constraints will generate an error.
   Checkout https://github.com/mikeal/bent for more
*/
const bent = require('bent')

let self = module.exports = {
    
    // Separating the data access layer from the main service by making dataArchive a separate module
    getData: async function(){
        const getJSON = bent('GET', 'json')
        return await getJSON(api.GET_ENDPOINT)
    },

    postData: async function(data){
        // target response = 200
        const postJSON = bent('POST', 'json', 200)
        return await postJSON(api.POST_ENDPOINT, data)
    }
}