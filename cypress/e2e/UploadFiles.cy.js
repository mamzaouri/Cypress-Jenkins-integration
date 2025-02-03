import 'cypress-file-upload';

describe('Uploading Files', ()=>{


    it('File Upload Rename',()=>{

        cy.visit('http://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('Screenshot from 2024-12-02 14-50-03.png')
        cy.get('#file-submit').click()
        cy.get('h3').should('have.text', 'File Uploaded!')

    })

    it.only('File Upload - Drag and Drop',()=>{

        cy.visit('http://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'Screenshot from 2024-12-02 14-50-03.png',fileName:'MyFile.png'})
        cy.get('#file-submit').click()
        cy.get('h3').should('have.text', 'File Uploaded!')

        
    })

    it('Multiple files Upload',()=>{


        
    })

    it('File Upload - Shadow Dom',()=>{


        
    })
})