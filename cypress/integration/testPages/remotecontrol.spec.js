/// <reference types="cypress" />

import universal from "../objectPages/universal"
import loginpage from "../objectPages/loginpage"
import kidsplacepage from "../objectPages/kidsplacepage"

 describe('Remote Control Test Cases Suite', function(){

    beforeEach(()=>{
        cy.clearLocalStorage()
         loginpage.doThelogin(Cypress.env('email'), Cypress.env('pass'))
         
     })

     it('Validate the Kids Place Tab', function(){
        universal.remoteControlTab()
        kidsplacepage.manageApps()
        cy.contains('Telegram').find('div[]')
         
     })
     




 })