describe('Blog', () => {

  beforeEach( () => {
    browser.get('/blog');
  });

  it('should have correct feature heading', () => {
    expect(element(by.css('sd-blog h2')).getText()).toEqual('Features');
  });

});
