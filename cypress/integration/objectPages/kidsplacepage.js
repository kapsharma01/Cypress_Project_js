class kidsplacepage{

    static manageApps(){
        return cy.get('#approved_apps_tab').click()
    }

    static categories(){
        return cy.get('#categories_layout_tab').click()
    }

    static settings(){
        return cy.get('#settings_tab').click()
    }

    static timer(){
        return cy.get('#scheduler_tab').click()
    }

}

export default kidsplacepage;