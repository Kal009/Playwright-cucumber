const supertest = require('supertest');
const request = supertest('http://ukisd-session-service.cf.stage-paas.bskyb.com/sessions/');
const testContext = require('../features/helper/testContext')


module.exports = {

getInteraction:  async function(session, sessionKey){
    var header = {
      "Content-Type":'application/json',
      "x-auth-token":(sessionKey == null)? '': sessionKey  
    }

        var response =  await request.get(session)
                      .set(header)
                      .auth('digital_trading','cU5VuzId7BrDM6O')
                      .expect(200)
      
                     // .set('x-auth-token',sessionKey) 
        var sessionid = await response.body.context.default.interactionId;
        
      await testContext.setVar('session', sessionid )

      //return await response;
      return await sessionid

                    
  }

}