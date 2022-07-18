class remotecontrolpage{

    static getDataFromDevice(){
        return cy.get('#configRequest').click()
    }

    static saveToDevice(){
        return cy.get('#saveChanges').click()
    }

    static deviceSettings(){
        return cy.get('#devicesettingbtn').click()
    }

    static selectDevice(val){
        return cy.get('select[class="form-control selectato select_device"]').select(val)
    }

    static kpManageTab(){
        return cy.get('#kp_manage_tab').click()
    }

    static deviceManageTab(){
        return cy.get('#device_manage_tab').click()
    }

    static helthStatusTab(){
        return cy.get('#helth_status_tab').click()
    }

}

export default remotecontrolpage;