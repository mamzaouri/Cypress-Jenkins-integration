
import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import Login from "../../../PageObjects/LoginPage.cy.js";

const ln = new Login();

Given('A user visit the homepage', () => {
    cy.visit('https://www.saucedemo.com/')
})

When('A user enter  the username', () => {
    ln.SetUserName('standard_user')
})
When('A user enter the password', () => {
    ln.SetPassword('secret_sauce')
})

When('click on the button submit', () => {
    ln.ClikSubmit()
})

Then('A user will be redirected to the Products list', () => {
    ln.verifyLogin()
})