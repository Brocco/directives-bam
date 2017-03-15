import { DirPlayPage } from './app.po';

describe('dir-play App', () => {
  let page: DirPlayPage;

  beforeEach(() => {
    page = new DirPlayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
