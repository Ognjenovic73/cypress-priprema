class UpdateProfile {
   
    get firstNameUpdate() {
        return cy.get('input[name="first_name"]')
    }

    get lastNameUpdate() {
        return cy.get('input[name="last_name"]')
    }

    get updateFirstNameLastNameBtn() {
        return cy.get('button[type="submit"]').eq(0)
    }

    get updateEmailInput() {
        return cy.get('input[data-vv-as="new email address"]')
    }
    
    get currentPasswordConfirm() {
        return cy.get('input[data-vv-as="password"]').eq(0)
    }

    get updateEmailBtn() {
        return cy.get('button[type="submit"]').eq(1)
    }

    get currentPassword() {
        return cy.get('input[data-vv-as="current password"]').eq(0)
    }

    get newPasswordInput() {
        return cy.get('input[type="password"]').eq(2)
    }

    get repeatNewPasswordInput() {
        return cy.get('input[type="password"]').eq(3)
    }

    get updatePasswordBtn() {
        return cy.get('button[type="submit"]').eq(2)
    }

    updateNames (firstName, lastName) {
        updateProfile.firstNameUpdate.clear()
        updateProfile.lastNameUpdate.clear()
        this.firstNameUpdate.type(firstName)
        this.lastNameUpdate.type(lastName)
        this.updateFirstNameLastNameBtn.click()
    }

    updateEmail (newEmail, currentPassword) {
        updateProfile.updateEmailInput.clear()
        this.updateEmailInput.type(newEmail)
        this.currentPasswordConfirm.type(currentPassword)
        this.updateEmailBtn.click()
    }

    updatePassword (currentPassword, newPassword) {
        this.currentPassword.type(currentPassword)
        this.newPasswordInput.type(newPassword)
        this.repeatNewPasswordInput.type(newPassword)
        this.updatePasswordBtn.click()
    }

}

export const updateProfile = new UpdateProfile();
