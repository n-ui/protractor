import {browser, $, ElementFinder, element,by, promise } from "protractor";

export class HomePageObject {
   modeTitle: ElementFinder;
   logInContent: ElementFinder;

    constructor() {
      this.modeTitle = element(by.className('ng-tns-c132-1'));
      this.logInContent = element(by.id('intro-login-link'));        
    }
}