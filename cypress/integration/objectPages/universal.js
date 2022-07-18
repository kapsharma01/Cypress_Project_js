class universal{

    static homeTab(){
        return cy.get('#menu_home').click()
    }

    static remoteControlTab(){
         cy.get('#menu_remote_control').click()
         return cy.contains('Select Device :').should('be.visible')
    }

    static  reportingTab(){
        return cy.get('#menu_statistics').click()
    }

    static locationTrackingTab(){
        return cy,get('#menu_location_traking').click()
    }

    static helpTab(){
        return cy.get('#menu_help').click()
    }

    static notificationTab(){
        return cy.get('#menu_notification').click()
    }

    static profileMenuTab(){
        return cy.get('#menu_profile').click()
    }

    static dotsMenuTab(){
        return cy.get('#dots-menu').click()
    }

    static accountSettings(){
        return cy.get('#menu_account_setting').click()
    }

  

}

export default universal;