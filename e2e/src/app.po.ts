import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getStart(): Promise<string> {
    return element(by.css('main')).getText() as Promise<string>;
  }

  writeSearch() {
    return element(by.tagName('input'));
  }

  sendSearch() {
    return element(by.tagName('button'));
  }

  getResults(): Promise<string> {
    return element(by.tagName('p')).getText() as Promise<string>;
  }

  pageMenu() {
    return element(by.id('products'));
  }

  getProducts(): Promise<number> {
    return element.all(by.className('product-card')).count() as Promise<number>;
  }

  addProductButton() {
    return element(by.partialButtonText('Add'));
  }

  getToCart() {
    return element(by.id('shoppingcart'));
  }

  viewCart() {
    return element.all(by.className('cart-item'));
  }


}
