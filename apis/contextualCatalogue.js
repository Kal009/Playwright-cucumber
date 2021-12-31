const https = require('https');
const fetch = require("node-fetch");


module.exports = {


    getCatalogue: async function(scIDs, intID){

        const httpsAgent = new https.Agent({
            rejectUnauthorized: false,
        });
      
        const interactionID = 'https://sisf04.lwsdat.glb.bskyb.com/cbs-sales-interaction-service/v1/contextual-catalogue/interaction/' + intID;

        console.log(`Request (post) : ${interactionID}`)
      
        const body = {
            contexts: [
                { 
                    id: "phones", 
                    productScids: scIDs,
                    salesTypes: ["PROVIDE", "ADD", "UPGRADE"],
                    include: ["pricing","automaticActions","selectableOffers", "piggybankRedemptions"],
                    mutualExclusive: true
                }
            ]
        }
        const response =  await fetch(interactionID, {
            method: 'POST',
            agent: httpsAgent, 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic c2t5LXNlcnZpY2VzOnloVHl4QzlsUWYxdHpzczk='
            },
      
            body: JSON.stringify(body)
        });
      
        return await response.json()
    },

    getProducts: async function(scIDs, intID){
        const productsList = await this.getCatalogue(scIDs, intID)
        return await productsList.contexts[0].products
    },

    getInStockProducts: async function(scIDs, intID){
        const productsList = await this.getProducts(scIDs, intID)
        return await productsList.filter( product => product.additionalDetail.stockAvailability == 'IN_STOCK')
    }

}