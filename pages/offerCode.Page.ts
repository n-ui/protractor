
import {browser, $, ElementFinder, element,by, promise } from "protractor";
import { BasePageObject } from "./base.Page";
import { HomePageObject} from "./home.Page";
import { Injectable} from "../diLib/injectable";

@Injectable()
export class OfferCodePageObject extends BasePageObject
 {
     offerCodeButton: ElementFinder;
     offerCodeTextbox: ElementFinder;
     modalTitle:ElementFinder;
     homePageObject:HomePageObject;
     
    constructor(_homePageObject: HomePageObject ) {
        super();
        this.homePageObject = _homePageObject;
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