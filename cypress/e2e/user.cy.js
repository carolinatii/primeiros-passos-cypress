import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboarPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboarPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
    

    
    
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
  
  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.accessDashboard()

    menuPage.accessMyInfo()

  

    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriversLicenseTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('2030-03-10')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.subimitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
    cy.get(selectorsList.arrowGeneric).eq(0).click()
    cy.get(selectorsList.secondCombobox).click()

    cy.get(selectorsList.arrowGeneric).eq(0).click()
    cy.get(selectorsList.arrowGeneric).eq(1).click()
    cy.get(selectorsList.thirdCombobox).click()
    cy.get(selectorsList.arrowGeneric).eq(1).click()

  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.userNameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)

  })
})