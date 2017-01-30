import { HTMLOpdrachtWebsitePage } from './app.po';

describe('htmlopdracht-website App', function() {
  let page: HTMLOpdrachtWebsitePage;

  beforeEach(() => {
    page = new HTMLOpdrachtWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
