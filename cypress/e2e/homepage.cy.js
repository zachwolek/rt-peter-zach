describe('Landing page tests', () => {
  beforeEach(() => {
    cy.fixture('mockMovieData').then((json) => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', json)
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270',{
        statusCode: 200,
        fixture: 'mockFirstSingleMovieDetails.json'
      })
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/982620',{
        statusCode: 200,
        fixture: 'mockLastSinglemovieData.json'
      })
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/724495',{
        statusCode: 200,
        fixture: 'theWomanKing.json'
      })
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/1013860',{
        statusCode: 200,
        fixture: 'RIPD2.json'
      })
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/505642',{
        statusCode: 200,
        fixture: 'wakandaForever.json'
      })
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/934641',{
        statusCode: 200,
        fixture: 'wakeUpDead.json'
      })
    })
    .viewport(1280,800)
    .visit('http://localhost:3000')
  })
  it('should display all movies on the loading page', () => {
    cy.get('.app-title').contains('Rancid Tomatillos')
    .get('.movies-wrapper').get('.card').should('have.length', 6)
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

describe('Landing page API server error', () => {
  it('should display a failed to fetch message if the server returns a 500 error', () => {
    cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500
    }).as('getServerFailure')
    .visit('http://localhost:3000')
    .get('.app-title').should('contain.text', 'Rancid Tomatillos')
    .get('h2').should('contain.text', 'HTTP Status Code 500: Internal Server Error')
  })
})