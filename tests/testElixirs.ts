import chai from 'chai';
import chaiHttp from 'chai-http';
import 'mocha';
import { Response } from 'superagent';
import {Elixirs} from '../pages/elixirs'

chai.use(chaiHttp);
const expect = chai.expect;

describe("Elixirs API request", function()
{
    var elixirs = new Elixirs();
    var response: Response;
    var responseJSON;

    it("response should contains requested id", async function()
    {
        response = await chai.request('https://wizard-world-api.herokuapp.com')
            .get("/Elixirs/"+ elixirs.felixFelicisID);
        responseJSON = JSON.parse(response.text);
        expect(responseJSON.id).to.equal(elixirs.felixFelicisID);
    })

    for (var i = 0; i < elixirs.difficultyLevelsNames.length; i++)
    {
        var difficultyName = elixirs.difficultyLevelsNames[i];
        it("response should contains only elixirs of difficulty: " + difficultyName, async function()
        {
            response = await chai.request('https://wizard-world-api.herokuapp.com')
                .get("/Elixirs?Difficulty=" + difficultyName);
            responseJSON = JSON.parse(response.text);
            var everyElixirHasDifficultyRequested = true;

            for(var element of responseJSON)
                {
                    if(element.difficulty == difficultyName) continue;
                    everyElixirHasDifficultyRequested = false;
                    return;
                }

            expect(everyElixirHasDifficultyRequested).to.be.true;
        })
    }
})