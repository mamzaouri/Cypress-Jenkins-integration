


describe('Xpathlocators', () => {

    it ('Find the number of product', () => {

        cy.visit("https://www.saucedemo.com")

        cy.get("#user-name").type("standard_user")
    
        cy.get("#password").type("secret_sauce")
   
        cy.get("#login-button").click()
    
        //cy.get("#logout_sidebar_link").contains('Logout')
        cy.url().should('include', 'inventory.html')
        .should('eq', 'https://www.saucedemo.com/inventory.html')
        .should('contain', 'inventory')
        //Negative Cases
        cy.url().should('not.include', 'inventry.html')
        .should('not.eq', 'https://www.saucedemoo.com/inventory.html')
        .should('not.contain', 'invetory')
        cy.xpath("//div[@class='inventory_list']/div").should('have.length', 6) // Assertion
        cy.get('.app_logo').should('be.visible')
        .and('exist')

    })

})