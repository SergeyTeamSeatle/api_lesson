const chai = require('chai');
chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp)
const shema = require("../shemas/shema");
chai.use(require('chai-json-schema'));

describe("t1", function (){

    it('chai CallBack ',  function (done) {
        chai.request("http://api.weatherbit.io/v2.0")
            .get("/current")
            .query({
                lat:38,
                lon:-78.25,
                key: "52584ccd03684a0ab3ee931197aa8123"
            })
            .end(function (err, res)
            {
                res.should.to.have.status(200);
                res.body.should.to.be.jsonSchema(shema.summary);
                done()
            })
    });


})