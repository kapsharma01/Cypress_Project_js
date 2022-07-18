import loginpage from "../objectPages/loginpage"
import settingspage from "../objectPages/settingspage"
import universal from "../objectPages/universal"

describe('setting page test suite',function(){

    beforeEach(()=>{
        cy.clearLocalStorage()
         loginpage.doThelogin(Cypress.env('email'), Cypress.env('pass'))
         universal.profileMenuTab()
         universal.accountSettings()
         
         
     })

     it.skip('open and validate the settings page', function(){
         universal.profileMenuTab()
         universal.accountSettings()
         
     })


     it('change the time', function(){
        settingspage.changeTime(14)
        cy.scrollTo('bottom')
    })


     it('Change the password', function(){
         settingspage.passwordReset()
     })

})