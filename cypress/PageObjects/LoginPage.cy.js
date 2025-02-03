class Login
{
    txtUsername="#user-name"
    txtPassword="#password"
    btnSubmit="#login-button"
    lblmsg="//span[@class='title']"



    SetUserName(username)
    {
        cy.get("#user-name").type(username)
    }
    SetPassword(password)
    {
        cy.get("#password").type(password)
    }
    ClikSubmit()
    {
        cy.get("#login-button").click()
    }
    verifyLogin()
    {
        cy.xpath("//span[@class='title']").should("have.text","Fail")
    }

}

export default Login;
