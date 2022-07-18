import loginpage from "../objectPages/loginpage"

describe('Login Page Test cases Suite',function(){

    beforeEach(()=>{
        cy.fixture('example.json').as('loginCreds')
    })
//
    it('login with invalid email and invalid password',function(){
         loginpage.doThelogin(this.loginCreds.Invalidemail, this.loginCreds.invalidpass)
         loginpage.validateTheLoginIfFails()

    })    

    it('login with valid email and invalid password',function(){
         loginpage.doThelogin(this.loginCreds.email, this.loginCreds.invalidpass)
         loginpage.validateTheLoginIfFails()
    
   })

   it('login with invalid email and valid password',function(){
         loginpage.doThelogin(this.loginCreds.Invalidemail, this.loginCreds.pass)
         loginpage.validateTheLoginIfFails()

    })

    it('login with valid email and valid password',function(){
        loginpage.doThelogin(this.loginCreds.email, this.loginCreds.pass)
        loginpage.validateTheloginSuccess()

   })

})