
Feature: Login Feature using POM model


    Scenario: Happy Path Login
    
        Given A user visit the homepage
        When A user enter  the username
        And A user enter the password
        And click on the button submit
        Then A user will be redirected to the Products list