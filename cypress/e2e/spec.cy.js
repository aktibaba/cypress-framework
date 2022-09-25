describe('testing formio basic form', () => {
  it('fills form and verify submission', () => {
    cy.visit('/')
    cy.get("input[placeholder='Enter your first name']").type("firstname")
    cy.get("input[placeholder='Enter your first name']").type("lastname")
    cy.get("input[placeholder='Enter your email address']").type("firstname@g.com")
    cy.get("input[name='data[phoneNumber]']").type(1233451223)
    cy.get("[name='data[survey][howWouldYouRateTheFormIoPlatform]']").eq(0).click()
    cy.get("[name='data[survey][howWasCustomerSupport]']").eq(0).click()
    cy.get("[name='data[survey][overallExperience]']").eq(0).click()
    cy.get("canvas.signature-pad-canvas").click({
      which: 1
    })
    cy.get("button[name='data[submit]']").click()
    cy.get("formio-alerts .alert-success").should("be.exist")
  })
})