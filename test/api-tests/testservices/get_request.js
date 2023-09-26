const axios = require("axios");
//const {expect} = require("chai");

describe('Get api request', () => {
    it('should get account information', async () => {
       const res = await axios.get('https://parabank.parasoft.com/parabank/services/bank/accounts/19338/transactions',
       );
       console.log(res.data);

    })
})
