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

    it('Should have different card sizing at no breakpoint', () => {
        cy.viewport(1920, 1080); 
        cy.get('.card').should('have.css','width','350px')
    });
    it('Should have different card sizing at first breakpoint', () => {
      cy.viewport(1840, 1080)
      cy.get('.card').should('have.css','width','420px')
    })
    it('Should have different card sizing at second breakpoint', () => {
      cy.viewport(1440,1080)
      cy.get('.card').should('have.css','width','520px')
    })
    it('Should have different card sizing at second breakpoint', () => {
      cy.viewport(1120,1080)
      cy.get('.card').should('have.css','width','800px')
    })
})