import universal from "./universal";

class homepage{

    static openHomepage(){
         return universal.homeTab()
    }

    static subscriptionSection(){
        return cy.get('#subscription_section')
    }

    static verifyDevice(){
       return cy.get('a[href="/account/remote_control/#deviceID=586abc1abcdd577d"]').should('be.visible')
    }

    static verifyEssentialsPlan(){
        return cy.get('#essential_plan').should('be.visible')
    }

    static verifyKidsplacePlan(){
        return cy.get('#kidsplace_plan').should('be.visible')
    }

    static verifyKiddowarePlan(){
        return cy.get('#kiddoware_plan').should('be.visible')
    }

}

export default homepage;