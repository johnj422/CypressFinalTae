import { Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import HomePage from "../../../pages/HomePage"

const home = new HomePage;

Given('I visit the Homepage', () => {
    home.navigateToHomePage();
})