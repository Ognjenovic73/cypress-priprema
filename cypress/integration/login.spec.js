/// <reference types="Cypress">

import { loginPage } from "../page_objects/loginPage";
import { createGzip } from "zlib";

describe('loginPOM', () => {

    beforeEach('visit login page', () => {
        cy.visit('/login');
        cy.url().should('contains','/login');
    })

    it('login with invalid data', () => {

        cy.intercept({
            method: 'POST',
            url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/login'
          }).as('unsuccessfulLogin');
    
        loginPage.loginHeading.should('have.text','Log in with your existing account');
        loginPage.login('draganbasket@yahoo.com','Sith_Lord99');
        cy.wait('@unsuccessfulLogin').then(interception => {
            cy.log(JSON.stringify(interception.response.statusCode));
            expect(interception.response.statusCode).to.eql(401);
            console.log('RESPONSE', interception);
     })
     cy.wait(5000)
    
        loginPage.errorMsg.should('be.visible')
                      .and('have.text','Oops! Your email/password combination is incorrect')
                      .and('have.css', 'color', 'rgb(187, 57, 22)')
        cy.url().should('include', '/login');
    })


    it('login with valid data', () => {
        
        cy.intercept({
            method: 'POST',
            url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/login'
          }).as('successfulLogin');

        loginPage.loginHeading.should('have.text','Log in with your existing account')
        loginPage.login('dragan.basket@yahoo.com','Sith_Lord99')
        
        cy.wait('@successfulLogin').then(interception => {
            cy.log(JSON.stringify(interception.response.statusCode));
            expect(interception.response.statusCode).to.eql(200);
            console.log('RESPONSE', interception);
     })
      

      cy.url().should('not.include', '/login');
})
})


