/// <reference types="cypress" />

import homepage from "../objectPages/homepage"
import loginpage from "../objectPages/loginpage"

describe('HomePage test cases Suite', function(){
    
    before(()=>{
       // cy.fixture('example.json').as('loginCreds')
        loginpage.doThelogin(Cypress.env('email'), Cypress.env('pass'))
        homepage.openHomepage()
        cy.scrollTo('center')
    })

    it('Verify your device', function(){
        homepage.verifyDevice()
       // cy.get('#onesignal-slidedown-allow-button').click()
    })

    it('Verify that essential plan is visible',function(){
        homepage.verifyEssentialsPlan()
    })

    it('Verify that Kiddoware plan is visible',function(){
        homepage.verifyKiddowarePlan()
    })

    it('Verify that Kids Place plan is visible',function(){
        homepage.verifyKidsplacePlan()
        cy.get('#onesignal-slidedown-allow-button').click()
    })

})
