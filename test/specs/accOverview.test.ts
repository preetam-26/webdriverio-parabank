import { expect } from '@wdio/globals'
import AccoutOverviewPage from '../pageobjects/accOverview.page'
//const axios = require("axios");
//import { expect } from '@wdio/globals'
//const {expect} = require("chai");
import supertest from 'supertest'

//import SecurePage from '../pageobjects/secure.page'

describe('My Account Overview application', () => {
    it('should validate the account number', async () => {
        await AccoutOverviewPage.open()
        let getTitle = await browser.getTitle()
        await expect(getTitle).toEqual('ParaBank | Welcome | Online Banking')
        await AccoutOverviewPage.accOverview('skp', 'skp')
        let accNumber = await AccoutOverviewPage.accNumber.getText()
        expect(accNumber).toEqual('14010')
        await browser.pause(4000)
    })

    it.only('should validate the amount deposited to the account number', async () => {
        await AccoutOverviewPage.open()
        let getTitle = await browser.getTitle()
        await expect(getTitle).toEqual('ParaBank | Welcome | Online Banking')
        await AccoutOverviewPage.accOverview('skp', 'skp')
        let accNumber = await AccoutOverviewPage.accNumber.getText()
        expect(accNumber).toEqual('14010')
        await AccoutOverviewPage.accNumber.click()
        await browser.pause(4000)
        const request = supertest('https://parabank.parasoft.com/parabank/services/bank')
        const res = await request.post('/deposit?accountId=14010&amount=5000')
        console.log(res.text);
        expect(res.text).toEqual('Successfully deposited $5000 to account #14010')
        expect(res.status).toEqual(200)
        let ammDepositText = await AccoutOverviewPage.depositedAmount.getText()
        expect(ammDepositText).toEqual('Deposit via Web Service')
    })
})

