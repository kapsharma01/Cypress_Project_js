class loginpage{

    static openLoginPage(){
        cy.visit(Cypress.env('Web'))
        cy.get('button[type="submit"]').should('be.visible')
    }

    static setEmail(email){
        cy.get('#onesignal-slidedown-allow-button').click()
        cy.get('div[class="input_field"] input[name="email"]').clear().type(email)
        
    }

    static setPassword(password){
       return cy.get('div[class="input_field"] input[name="password"]').clear().type(password)
    }

    static submitButtonClick(){
      return  cy.get('button[type="submit"]').click()
    }

    static doThelogin(email, password){
        
        this.openLoginPage();
        this.setEmail(email);
        this.setPassword(password);
        this.submitButtonClick();

    }
    
    static validateTheLoginIfFails(){
        cy.url().should('equal',Cypress.env('Web'))
    }

    static validateTheloginSuccess(){
        cy.url().should('not.equal',Cypress.env('Web'))
    }

}

export default loginpage;
