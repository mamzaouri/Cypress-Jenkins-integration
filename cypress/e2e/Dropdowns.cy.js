describe ('DropdownsHandle',() => {

    it.skip('Dropdown with select',()=>{

        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        cy.xpath('/html[1]/body[1]/main[1]/div[1]/div[1]/section[1]/div[2]/div[2]/div[1]/form[1]/div[4]/select[1]')
        .select('Italy')
        .should('have.value', 'Italy')

    })

    it.skip('Dropdown with select',()=>{

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click()
        cy.xpath('/html[1]/body[1]/span[1]/span[1]/span[1]/input[1]').type('Italy').type('{enter}')
        cy.get('#select2-billing_country-container')
        .should('have.text', 'Italy')
    })

    it.skip('Dropdown typeahead dynamic',()=>{

        cy.visit('https://www.google.com/')
        cy.get("textarea[name='q']").click().type('cypress automation')
        cy.wait(3000)
        cy.get('div.wM6W7d>span').should('have.length',13)
        cy.get('div.wM6W7d>span').each( ($el, index, $list) => {

            if($el.text()=='cypress automation tutorial')

            {
                cy.wrap($el).click()
            }
        
        })

        cy.get("textarea[name='q']").should('have.value','cypress automation tutorial')
        
    })

    describe ('Handling Alerts', ()=>{

        it('JS Alerts', ()=>{

            cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
            cy.get("button[onclick='jsAlert()']").click();
            cy.on('window:alert', (t)=>{
                expect(t).to.contains("I am a JS Alert")
            })
            cy.get('#result').should('have.text', "You successfully clicked an alert")
        })
        it('JS Alerts', ()=>{

            cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
            cy.get("button[onclick='jsConfirm()']").click();
            cy.on('window:confirm', (t)=>{
                expect(t).to.contains("I am a JS Confirm")
            })
            cy.get('#result').should('have.text', "You clicked: Ok")
        })
        it('JS Alerts', ()=>{

            cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
            cy.get("button[onclick='jsConfirm()']").click();
            cy.on('window:confirm',()=> false)
            cy.on('window:confirm', (t)=>{
                expect(t).to.contains("I am a JS Confirm")
            })
            cy.get('#result').should('have.text', "You clicked: Cancel")
        })

    })


})