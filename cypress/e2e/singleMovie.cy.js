describe('Single movie details tests', () => {
  beforeEach(() => {
    cy.fixture('mockMovieData').then((json) => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', json)

    })
    .viewport(1280,800)
    .visit('http://localhost:3000')
  })
  it('should take the user to the first single movie details page and update the URL', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270',{
      statusCode: 200,
      fixture: 'mockFirstSingleMovieDetails.json'
    })
    .get('.card button').first().click()

    .get('h2').should('contain.text', 'Black Adam')
    .get('.genres').get('.genre').should('have.length', 3).should('contain.text', "Action").should('contain.text', "Fantasy").should('contain.text', "Science Fiction")
    .get('.overview').should('contain.text', "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.")
    .url().should('include', '436270')
  })
  it('should take the user to the last single movie details page and update the URL', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/982620',{
      statusCode: 200,
      fixture: 'mockLastSinglemovieData.json'
    })
    .get('.card button').last().click()
    .get('h2').should('contain.text', 'Maneater')
    .get('.genres').get('.genre').should('have.length', 2).should('contain.text', "Thriller").should('contain.text', "Horror")
    .get('.overview').should('contain.text', 'A group of friends on vacation in a seeming island paradise are stalked by an unrelenting great white after an accident leaves them stranded and left for dead.')
    .url().should('include','982620')
  }),
  it('should be able to go back to the main page from single movie details to see all movies', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270',{
      statusCode: 200,
      fixture: 'mockFirstSingleMovieDetails.json'
    })
    .get('.card button').first().click()
    .get('.button-close').click()
    .get('.app-title').contains('Rancid Tomatillos')
    .get('.movies-wrapper').get('.card').should('have.length', 10)
  })
  it.only('user should be able to use forward/back navigation', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/982620',{
      statusCode: 200,
      fixture: 'mockLastSinglemovieData.json'
    })
    .get('.card button').last().click()
    .go("back")
    .get('.movies-wrapper').get('.card').should('have.length', 10)
    .go("forward")
    .get('h2').should('contain.text', 'Maneater')
    .get('.genres').get('.genre').should('have.length', 2).should('contain.text', "Thriller").should('contain.text', "Horror")
  })
})