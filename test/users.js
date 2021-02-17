const chai = require('chai');
const expect = chai.expect;
const sendRequest = require('../lib/sendRequest');
const getUsers = require('../data/getUsers');
const env = require('../endpoint/endpoint');

describe('Get users', () => {

    getUsers.map((data) => {
        let response;

        before(async () => {
            data.uri = env.uri + data.uri;
            response = await sendRequest(data);
            console.log(response);
        });

        it('status code is 200', () => {
            console.log('status is ' + response.status);
            expect(response.status).to.eql(200);
        });

        it('content-type header exists in the obtained response',()=>{
            expect(response.header).to.have.property('content');
            
        });
        it('the value of the content-type header is application/json; charset=utf-8',()=>{
            expect()            
        });
        it('the content of the response body is the array of 10 users',()=>{
            let usersFromRequest = response;
            expect(usersFromRequest.length).to.eql(10)

        });
    });

});