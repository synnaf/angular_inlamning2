import { AppPage } from './app.po';
import { browser, logging, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should render the startpage of the application', () => {
    page.navigateTo();
    expect(page.getStart()).toEqual('Search');
  });

  it('should perform a valid search', () => {
    page.navigateTo();
    const inputSearch = page.writeSearch();
    inputSearch.sendKeys('Dark');
    page.sendSearch().click();
    expect(page.getResults()).toBe('The Dark Knight');
  });

  it('should load products on product page', () => {
    page.navigateTo();
    const menu = page.pageMenu();
    menu.click();
    expect(page.getProducts()).toBeGreaterThan(10);
  });

  it('should add item to cart and proceed to checkout', () => {
    page.navigateTo();
    const menu = page.pageMenu();
    menu.click();
    const add = page.addProductButton();
    add.click();
    const cart = page.getToCart();
    cart.click();
    expect(page.viewCart()).toBeTruthy();

  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
