import { expect } from '@wdio/globals'
import RegisterPage from '../pageobjects/register.page'
//const faker = require('faker');

describe('My Registration application', () => {
    it('should validate the page title', async () => {
        await RegisterPage.open()
        let getTitle = await browser.getTitle()
        await expect(getTitle).toEqual(
                  'ParaBank | Welcome | Online Banking')        // await expect(SecurePage.flashAlert).toBeExisting()
        
    })
    it('should open and validate the register page title', async () => {
        await RegisterPage.open() 
        await RegisterPage.clickOnRegister();
        browser.pause(3000);
        let signUpText = await RegisterPage.verifySignUpText();
        await expect(signUpText).toEqual('Signing up is easy!');
        browser.pause(3000);
    })

    it('should fill the registeration details', async () => {
        await RegisterPage.open() 
        await RegisterPage.clickOnRegister();
        browser.pause(3000);
        await RegisterPage.enterFirstName('a;ldjf')
        await RegisterPage.enterLastName('jslkdjl')
        await RegisterPage.enterCustomerAddress('sonar galli')
        await RegisterPage.enterCustomerCity('vita')
        await RegisterPage.enterCustomerState('maharashtra')
        await RegisterPage.enterCustomerPin('jlsdj')
        await RegisterPage.enterCustomerPhone('jdslj')
        await RegisterPage.enterCustomerSSN('sdj')
        await RegisterPage.registeration('skj','skj','skj')
        //let registrationText = await RegisterPage.
        // let signUpText = await RegisterPage.verifySignUpText();
        // await expect(signUpText).toEqual('Signing up is easy!');
        browser.pause(10000);
    })

    // it.only('should fill the registeration details', async () => {
    //     await RegisterPage.open() 
    //     await RegisterPage.clickOnRegister();
    //     browser.pause(3000);
    //     await RegisterPage.enterFirstName(faker.name.firstName)
    //     await RegisterPage.enterLastName(faker.name.lastName)
    //     await RegisterPage.enterCustomerAddress(faker.name.address)
    //     await RegisterPage.enterCustomerCity(faker.city)
    //     await RegisterPage.enterCustomerState(faker.name.state)
    //     await RegisterPage.enterCustomerPin(faker.zipCode)
    //     await RegisterPage.enterCustomerPhone(faker.phoneNumber().phoneNumber)
    //     await RegisterPage.enterCustomerSSN(faker.ssn().ssn)
    //     //await RegisterPage.registeration(uname,pwd,pwd)
    // })
})

