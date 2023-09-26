const axios = require("axios");
//import { expect } from '@wdio/globals'
const {expect} = require("chai");

describe('Get api request', () => {
    it('should get account information', async () => {
       const res = await axios.post('https://parabank.parasoft.com/parabank/services/bank/deposit?accountId=20670&amount=5000',
       );
       console.log(res.data);
       expect(res.data).equal('Successfully deposited $5000 to account #20670')
       
    })
})
