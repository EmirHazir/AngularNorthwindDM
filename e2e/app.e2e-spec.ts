import { NorthwindPage } from './app.po';

describe('northwind App', () => {
  let page: NorthwindPage;

  beforeEach(() => {
    page = new NorthwindPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
