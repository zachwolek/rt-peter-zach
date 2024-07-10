describe('template spec', () => {
  beforeEach(() => {
    cy.fixture('mockMovieData').then((json) => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', json)

    })
    .viewport(1280,800)
    .visit('http://localhost:3000')
  })
  it('should display all movies on the loading page', () => {
    cy.get('.app-title').contains('Rancid Tomatillos')
    .get('.movies-wrapper').get('.card').should('have.length', 10)
    .get('.card').first().should('contain.text', "Black Adam")
    .get('.card').last().should('contain.text', "Maneater")
  })
  it('displayed movies should NOT be visible when first movie details are clicked', () => {
    cy.get('.card button').first().click()
    .get('.movies-wrapper').should('not.exist')
  })
  it('displayed movies should NOT be visible when last movie details are clicked', () => {
    cy.get('.card button').last().click()
    .get('.movies-wrapper').should('not.exist')
  })
})