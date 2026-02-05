import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboarPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboarPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {
  
  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.accessDashboard()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails(chance.first(), chance.last())

    myInfoPage.fillEmployeeDetails(chance.natural({ min: 1, max: 10000000000 }), chance.natural({min:1, max: 1000000}), chance.natural({min:1, max:123456}),'2030-10-03')

    myInfoPage.closeDateField()

    // myInfoPage.verifyStatus()

    myInfoPage.changeNation()

    myInfoPage.changeMarital()

  })


})