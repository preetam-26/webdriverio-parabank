import { expect } from '@wdio/globals'
import AccoutOverviewPage from '../pageobjects/accOverview.page'
//import SecurePage from '../pageobjects/secure.page'

describe('My Account Overview application', () => {
    it.only('should validate the account number', async () => {
        await AccoutOverviewPage.open()
        let getTitle = await browser.getTitle()
        await expect(getTitle).toEqual('ParaBank | Welcome | Online Banking')
        await AccoutOverviewPage.accOverview('kgf', 'kgf')
        let accNumber = await AccoutOverviewPage.accNumber.getText()
        expect(accNumber).toEqual('19338')
        await browser.pause(4000)
    })

    it('should validate the amount deposited to the account number', async () => {
        await AccoutOverviewPage.open()
        let getTitle = await browser.getTitle()
        await expect(getTitle).toEqual('ParaBank | Welcome | Online Banking')
        await AccoutOverviewPage.accOverview('kgf', 'kgf')
        let accNumber = await AccoutOverviewPage.accNumber.getText()
        expect(accNumber).toEqual('19338')
        await AccoutOverviewPage.accNumber.click()
        await browser.pause(4000)
        let ammDepositText = await AccoutOverviewPage.depositedAmount.getText()
        expect(ammDepositText).toEqual('Deposit via Web Service')
    })
})

