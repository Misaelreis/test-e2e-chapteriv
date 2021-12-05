/// <reference types="cypress"/>

describe("Listagem",()=>{
    it("Quando não houver cadastros, então a listagem deve estar vazia", ()=>{
        cy.fixture("listagem-sem-itens").then(data => {
            window.localStorage.setItem("data", JSON.stringify(data))
        })
        cy.visit("/listagem.html")
        cy.get("table tbody tr").should("have.length", 0)
    });

    it("Quando houver cadastros, então a listagem deve exibir cada registro", ()=>{
        cy.fixture("listagem-com-itens").then(data => {
            window.localStorage.setItem("data", JSON.stringify(data))
        })
        cy.visit("/listagem.html")
        cy.get("table tbody tr").should("have.length", 3)
    });
});