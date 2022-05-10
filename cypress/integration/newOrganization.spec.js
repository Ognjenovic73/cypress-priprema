/// <reference types="Cypress">

import { newOrganization } from "../page_objects/newOrganizationPage";

describe('newOrganization', () => {
    
before('login', () => {
    cy.loginViaBackend();
    cy.visit('/');
})
   
    it('addNewOrganization', () => {

        newOrganization.newOrganization (
           'Dragan&Co'
           );
     })
   })


