/// <reference types="cypress"/>

var Chance = require("chance")
var chance = new Chance()

describe("Cadastro",()=>{
    it("Quando eu informar os dados e finalizar, então o cadastro é realizado", ()=>{
        cy.visit("/")
        cy.get("input[name=firstName]").type(chance.first())
        cy.get("input[name=lastName]").type(chance.last())
        cy.get("textarea[name=adress]").type(chance.address())
        cy.get("input[name=emailAdress]").type(chance.email())
        cy.get("input[value=n]").check()
        cy.get("input[type=checkbox]").check("Netflix")
        cy.get("input[type=checkbox]").check("Dormir")
        cy.get("select#countries").select("Dinamarca", {force: true})
        cy.get("select#years").select("2006", {force: true})
        cy.get("select#months").select("Janeiro", {force: true})
        cy.get("select#days").select("8", {force: true})
        cy.get("input#firstpassword").type("Aluno@21")
        cy.get("input#secondpassword").type("Aluno@21")
        cy.get("#submitbtn").click()
        cy.url().should("contain","listagem")
    });
});