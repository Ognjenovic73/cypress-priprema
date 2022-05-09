/// <reference types="Cypress">

class LoginPage {
    get emailInput() {
        return cy.get('input[type="email"]');
    }

    get passwordInput() {
        return cy.get('input[type="password"]');
    }

    get submitBtn() {
        return cy.get('button[type="submit"]');
    }
    
    get loginHeading() {
        return cy.get('h1');
    }

    get errorMsg() {
        return cy.get('span[class="el-form-item__error"]');
    }

    login (email,password){
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.submitBtn.click();
    }
}

export const loginPage = new LoginPage();