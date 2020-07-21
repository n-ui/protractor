import {browser, $, ElementFinder, element,by, promise } from "protractor";

export class OfferPageObject {
    public offerCodeButton: ElementFinder;
    public offerCodeTextbox: ElementFinder;
    public modalTitle:ElementFinder;

    constructor() {
        this.offerCodeButton = element(by.css('.enter-offer-code-btn'));
        this.offerCodeTextbox = element(by.id('offerCode'));
    }

    navigateTo(){
        return browser.get(browser.baseUrl) as Promise<any>;
    }

    checkModalOpen(){
        return element(by.css('.title')).getText() as Promise<string>;
    }

}