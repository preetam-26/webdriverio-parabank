const axios = require("axios");
//import { expect } from '@wdio/globals'
const {expect} = require("chai");

describe('POST api request', () => {
    it('should get amount deposited in account', async () => {
       const res = await axios.post('https://parabank.parasoft.com/parabank/services/bank/deposit?accountId=19338&amount=5000',
       );
       console.log(res.data);
       expect(res.data).equal('Successfully deposited $5000 to account #19338')
       expect(res.status).equal(200)
    })
})
