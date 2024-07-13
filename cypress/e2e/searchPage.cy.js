describe('Single movie details tests', () => {
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
    it('should be able to search for movies by title and get a filtered result of movies', () => {
        cy.get('.search').type('black')
        .get('.movies-wrapper').get('.card').should('have.length', 2)
        .get('.card').first().should('contain.text', "Black Adam")
        .get('.card').last().should('contain.text', "Black Panther")
      })
      it('should be able to search for movies by another title and get a filtered result of movies', () => {
        cy.get('.search').type('the ')
        .get('.movies-wrapper').get('.card').should('have.length', 3)
        .get('.card').first().should('contain.text', "The Woman")
        .get('.card').last().should('contain.text', "The Minute")
      })

      it('should be able to search for movies by genre and get a filtered result of movies', () => {
        cy.get('#genres').select("Horror")
        .get('.movies-wrapper').get('.card').should('have.length', 1)
        .get('.card').first().should('contain.text', "Maneater")
      })
      it('should be able to search for movies by a different genre and get a filtered result of movies', () => {
        cy.get('#genres').select("Action")
        .get('.movies-wrapper').get('.card').should('have.length', 4)
        .get('.card').first().should('contain.text', "Black Adam")
        .get('.card').last().should('contain.text', "Wakanda Forever")
      })
})

