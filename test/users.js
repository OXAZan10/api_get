const chai = require('chai');
const expect = chai.expect;
const axios = require('axios').default;

describe('Get users', () => {
    let response;

    before(async () => {
        const receivedResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
        response = receivedResponse;
    });

    it('status code is 200', () => {
        const responseStatus=response.status;
        expect(responseStatus).to.eql(200);
    });

    it('content-type header exists in the obtained response',()=>{
        expect(response.headers).to.have.property('content-type');
    });

    it('the value of the content-type header is application/json; charset=utf-8',()=>{
        const contentType = response.headers['content-type'];
        expect(contentType).to.eql("application/json; charset=utf-8");            
    });

    it('the content of the response body is the array of 10 users',()=>{
        expect(response.data.length).to.eql(10);
    });
});