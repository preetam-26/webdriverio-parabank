import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AccountOverviewPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get username () {
        return $("input[name='username']");
    }

    public get inputPassword () {
        return $("input[name='password']");
    }

    public get btnSubmit () {
        return $('input[type="submit"]');
    }

    public get accNumber () {
        return $("//tr[@class='ng-scope']//a");
    }

    public get depositedAmount () {
        return $("(//a[text()='Deposit via Web Service'])[1]");
    }

    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
    public async accOverview (username: string, password: string) {
        await this.username.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        browser.pause(10000)
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('/');
    }
}

export default new AccountOverviewPage();
