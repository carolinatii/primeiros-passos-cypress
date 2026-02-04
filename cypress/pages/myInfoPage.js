class MyInfoPage {
    selectorsList(){
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-mm-dd']",
            dateCloseButton: ".--close",
            subimitButton:"[type='submit']",
            nationalityField: "[tabindex='0']",
            arrowGeneric: ".oxd-select-text--arrow",
            secondCombobox:".oxd-select-dropdown > :nth-child(44)",
            thirdCombobox: '.oxd-select-dropdown > :nth-child(3)'
        }
        return selectors
    }
    
    fillPersonalDetails(firstName, lastName){
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }
    
    fillEmployeeDetails(employeeId,otherId,driversLicense){
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicense)
        cy.get(this.selectorsList().genericField).eq(6).clear().type()
    }

    
    closeDateField(){
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    saveButton(){
        cy.get(this.selectorsList().subimitButton).eq(0).click()
    }

    verifyStatus(){
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }

    changeNation(){
        cy.get(this.selectorsList().arrowGeneric).eq(0).click()
        cy.get(this.selectorsList().secondCombobox).click()
        
    }

    changeMarital(){
        cy.get(this.selectorsList().arrowGeneric).eq(1).click()
        cy.get(this.selectorsList().thirdCombobox).click()
        
    }


}

export default MyInfoPage