import { OgshopPage } from './app.po';

describe('ogshop App', () => {
  let page: OgshopPage;

  beforeEach(() => {
    page = new OgshopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
