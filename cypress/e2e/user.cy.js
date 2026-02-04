import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboarPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

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

    myInfoPage.fillPersonalDetails('First Name', 'Last Name')

    myInfoPage.fillEmployeeDetails('EmployeeId', 'OtherId', '2030-10-03')

    myInfoPage.closeDateField()

    // myInfoPage.verifyStatus()

    myInfoPage.changeNation()

    myInfoPage.changeMarital()


  })

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()

  })
})