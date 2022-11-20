import * as chai from 'chai';
import chaiHttp from 'chai-http';
import 'mocha';

chai.use(chaiHttp);
const expect = chai.expect;

  describe("Houses API request", function()
  {
    it("response should contains four elements", function()
    {
        chai.request('https://wizard-world-api.herokuapp.com')
          .get('/Houses')
          .then(res => {
        var responseJSON = JSON.parse(res.text);
        const housesNumberInHarryPotter = 4;
        chai.expect(responseJSON.length).to.equal(housesNumberInHarryPotter);
      })
    })
  })