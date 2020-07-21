import { browser } from "protractor";
import { OfferPageObject } from "../pages/offerCode.Page";
const {Before, Given,When,Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

let offercodePage: OfferPageObject;


Before(() =>{
    offercodePage  = new OfferPageObject();
})


Given('I am on Mode website home page', async () => {
        await offercodePage.navigateTo();
   });

When('I click offerCode button', async () => {
    await offercodePage.offerCodeButton.click();
});

Then('open offerCode modal', async () => {
   expect(await offercodePage.checkModalOpen()).to.equal('First things first, enter the offer code you were provided');
});