//import { expect } from '@wdio/globals'
import TransferFundsPage from '../pageobjects/transferFunds.page'
import AccoutOverviewPage from '../pageobjects/accOverview.page'
//import SecurePage from '../pageobjects/secure.page'

describe('My Account Overview application', () => {
    it('should validate the account number', async () => {
        await TransferFundsPage.open()
        await AccoutOverviewPage.accOverview('dlf', 'dlf')
        await TransferFundsPage.clickOnTransferFunds()
        await TransferFundsPage.enterAMount()
        await TransferFundsPage.clickTransfer()
    })
})

