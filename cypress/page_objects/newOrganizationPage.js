/// <reference types="Cypress">

class NewOrganization {
    get addNewOrganization() {
        return cy.get('.vs-c-my-organization').eq(-2);
    }
    get organizationNameInput() {
        return cy.get('input[type="text"]')
    }
    get nextBtn() {
        return cy.get('button[type="button"]').contains('Next');
    }
    get createBtn() {
        return cy.get('button[type="button"]').contains('Create')
    }
    newOrganization (name){
        this.addNewOrganization.click();
        this.organizationNameInput.type(name);
        this.nextBtn.click();
        this.createBtn.click()
    }
}
export const  newOrganization = new NewOrganization();