import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get register () {
        return $("//a[text()='Register']");
    }

    public get inputPassword () {
        return $('#password');
    }

    public get btnSubmit () {
        return $('input[type="submit"]');
    }

    public get signingUpText(){
        return $("//h1[text()='Signing up is easy!']");
    }

    public get firstName (){
        return $("input[id='customer.firstName']");
    }

    public get lastName (){
        return $("input[id='customer.lastName']");
    }

    public get address () {
        return $("input[id='customer.address.street']");
    }

    public get city () {
        return $("input[id='customer.address.city']");
    }

    public get state () {
        return $("input[id='customer.address.state']");
    }

    public get zipCode () {
        return $("input[id='customer.address.zipCode']");
    }

    public get phone () {
        return $("input[id='customer.phoneNumber']");
    }

    public get ssn () {
        return $("input[id='customer.ssn']");
    }

    public get username () {
        return $("input[id='customer.username']");
    }

    public get password () {
        return $("input[id='customer.password']");
    }

    public get confirmPwd () {
        return $("input[id='repeatedPassword']");
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async clickOnRegister(){
        await this.register.click();
    }

    public async verifySignUpText(){
        let text = await this.signingUpText.getText();
        return text;
    }

    public async loginPageTitle(){
         return await browser.getTitle();
        
    }

    public async enterFirstName(fname: string){
        await this.firstName.setValue(fname);
    }

    public async enterLastName(lname: string){
        await this.lastName.setValue(lname);
    }

    public async enterCustomerAddress(add: string){
        await this.address.setValue(add);
    }

    public async enterCustomerCity(cname: string){
        await this.city.setValue(cname);
    }

    public async enterCustomerState(sname: string){
        await this.state.setValue(sname);
    }

    public async enterCustomerPin(pcode: string){
        await this.zipCode.setValue(pcode);
    }

    public async enterCustomerPhone(phone: string){
        await this.phone.setValue(phone);
    }

    public async enterCustomerSSN(cssn: string){
        await this.ssn.setValue(cssn);
    }

    // public async enterCustomerUsername(username: string){
    //     await this.username.setValue(username);
    // }

    // public async enterCustomerPassword(pwd: string){
    //     await this.password.setValue(pwd);
    // }

    // public async enterConfirmPassword(cpwd: string){
    //     await this.confirmPwd.setValue(cpwd);
    // }
    public async registeration (username: string, password: string, cpwd: string) {
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.confirmPwd.setValue(cpwd)
        //await this.btnSubmit.click();
        browser.pause(10000)
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('/');
    }
}

export default new RegisterPage();
