import chai from 'chai';
import chaiHttp from 'chai-http';
import 'mocha';
import { Response } from 'superagent';
import {getHousesNameInHPSorted, getHousesAmountInHP} from '../houses'

chai.use(chaiHttp);
const expect = chai.expect;
var _ = require('lodash');

  describe("Houses API request", function()
  {
    var response: Response;
    var responseJSON;

    before(async function()
    {
      response = await chai.request('https://wizard-world-api.herokuapp.com')
          .get('/Houses');
      responseJSON = JSON.parse(response.text);
    })

    it("status should be 200", function()
    {
      expect(response).to.have.status(200);
    })

    it("response should contains four elements", function()
    {
        expect(responseJSON.length).to.equal(getHousesAmountInHP());
    })

    it("names of houses in responses are correct", function()
    {
      const nameOfHousesInHPAlphabetically = getHousesNameInHPSorted();
      const housesInResponse = [];
      responseJSON.forEach((element)=> housesInResponse.push(element.name));
      housesInResponse.sort();
      expect(_.isEqual(nameOfHousesInHPAlphabetically,housesInResponse)).to.be.true;
    })
  })