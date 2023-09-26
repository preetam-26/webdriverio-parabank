import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TransferFundsPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get transferFunds () {
        return $("//a[text()='Transfer Funds']");
    }

    public get toAccDrpdown () {
        return $("//select[@id='toAccountId']");
    }

    public get enterAmmount () {
        return $("//input[@id='amount']");
    }

    public get transferBtn () {
        return $("//input[@value='Transfer']");
    }

    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
    public async clickOnTransferFunds () {
        await this.transferFunds.click();
        //browser.pause(10000)
    }

    public async enterAMount () {
        await this.enterAmmount.setValue('5000');
        //browser.pause(10000)
    }

    public async clickTransfer () {
        await this.transferBtn.click()
        //browser.pause(10000)
    }

    public async selectDrpdown () {
        //await this.toAccDrpdown.click();
        browser.pause(10000)
        return await this.toAccDrpdown.selectByVisibleText('24111');
        browser.pause(10000)
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('/');
    }
}

export default new TransferFundsPage();
