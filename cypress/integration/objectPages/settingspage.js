class settingspage{

    static passwordReset(){
        cy.log(Cypress.env('pass'))
        cy.get('#old_password').type(Cypress.env('pass'))
        cy.get('#new_password').type(Cypress.env('pass'))
        cy.get('#confirm_password').type(Cypress.env('pass'))
        cy.get('#change_password').click()
        cy.contains('Password successfully changed!').should('be.visible')
    }

    static changeTime(val){
        cy.get('#select-timezone').select(val)
        cy.get('#save_profile_changes').click()
    }

}

export default settingspage;