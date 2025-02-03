import Login from "../PageObjects/LoginPage.cy";


describe('POM',()=>{

    it('LoginTest', ()=>{

        cy.visit('https://www.saucedemo.com/')

            const ln=new Login();

             ln.SetUserName('standard_user')
             ln.SetPassword('secret_sauce')
             ln.ClikSubmit();
             ln.verifyLogin();

        
    })

})