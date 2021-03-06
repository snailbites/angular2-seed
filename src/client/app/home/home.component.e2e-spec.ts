describe('Home', () => {

  beforeEach( () => {
    browser.get('/');
  });

  it('should have an input', () => {
    expect(element(by.css('sd-home form input')).isPresent()).toEqual(true);
  });

  it('should have a list of computer scientists', () => {
    expect(element(by.css('sd-home ul')).getText())
      .toEqual('Edsger Dijkstra\nDonald Knuth\nAlan Turing\nGrace Hopper');
  });

});
