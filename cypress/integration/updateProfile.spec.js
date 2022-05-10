/// <reference types="Cypress">

import { updateProfile } from "../page_objects/updateProfile";

describe ('update profile', () => {

    beforeEach('open profile settings', () => {
        cy.loginViaBackend();
        cy.visit('/account/settings')
    })

    it('change first and last name', () => {

        cy.intercept({
            method: 'PuT',
            url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/users'
          }).as('userNamesUpdated');

        updateProfile.updateNames(
            'Dragiša',
            'Ognjenov'
        )
       
        cy.wait('@userNamesUpdated').then(interception => {
            cy.log(JSON.stringify(interception.response.statusCode));
            expect(interception.response.statusCode).to.eql(200);
            console.log('RESPONSE', interception);
        })
    }) 

    it('update email', () => {

        cy.intercept({
            method: 'PuT',
            url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/users'
          }).as('emailUpdated');

        updateProfile.updateEmail(
            'dragan.basket@gmail.com',
            'Sith_Lord99'
        )

        cy.wait('@emailUpdated').then(interception => {
            cy.log(JSON.stringify(interception.response.statusCode));
            expect(interception.response.statusCode).to.eql(200);
            console.log('RESPONSE', interception);
        })
    })

    it('update password', () => {
        cy.intercept({
            method: 'POST',
            url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/update-password'
          }).as('dataUpdated');

        updateProfile.updatePassword(
            
            'Sith_Lord99',
            'Sith_Lord00'
        )

        cy.wait('@dataUpdated').then(interception => {
            cy.log(JSON.stringify(interception.response.statusCode));
            expect(interception.response.statusCode).to.eql(200);
            console.log('RESPONSE', interception);
        })
    })


})