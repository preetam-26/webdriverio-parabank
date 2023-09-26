//import { expect } from '@wdio/globals'
import TransferFundsPage from '../pageobjects/transferFunds.page'
import AccoutOverviewPage from '../pageobjects/accOverview.page'
const xml2js = require('xml2js')
import supertest from 'supertest'
let response: supertest.Response;
//import SecurePage from '../pageobjects/secure.page'

describe('My Account Overview application', () => {
    it('should validate the account number', async () => {
        await TransferFundsPage.open()
        await AccoutOverviewPage.accOverview('skp', 'skp')
        await TransferFundsPage.clickOnTransferFunds()
        await TransferFundsPage.enterAMount()
        browser.pause(3000)
        await TransferFundsPage.clickTransfer()
        browser.pause(3000)
        const request = supertest('https://parabank.parasoft.com/parabank/services/bank')
        response = await request.get('/accounts/14010/transactions').set('content-type','application/json')
        browser.pause(3000)
        let xmlResponse = response.text;
        xml2js.parseString(xmlResponse, (err: any, result: any) => {
            if (err) {
              throw err
            }
            // convert it to a JSON string
            const json = JSON.stringify(result, null, 4)
            console.log(json)
          })
          expect
        // While running through automation --> transfer funds --> from account and to account is showing undefined

    })
})

