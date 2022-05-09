/// <reference types="Cypress">

import { newOrganization } from "../page_objects/newOrganizationPage";
import { loginPage } from "../page_objects/loginPage";



describe('newOrganization', () => {
    
beforeEach('login', () => {
    cy.visit('/login')
    loginPage.login(
        
        'dragan.basket@yahoo.com',
        'Sith_Lord99'
        )
    //cy.url().should('contains','/boards')
})
   
   it('addNewOrganization', () => {
       cy.wait(2000)

       newOrganization.newOrganization (
           'draganCo'
           );
     } )
   })


