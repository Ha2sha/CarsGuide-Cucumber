package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class SearchAndUsedCarsPage extends Utility {
    private static final Logger log = LogManager.getLogger(SearchAndUsedCarsPage.class.getName());

    public SearchAndUsedCarsPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[normalize-space()='New & Used Car Search - carsguide']")
    WebElement welcomeTextNewCar;

    @CacheLookup
    @FindBy(xpath = "//h1[normalize-space()='Used Cars For Sale']")
    WebElement welcomeTextUsedCar;

    @CacheLookup
    @FindBy(xpath = "//select[@id='makes']")
    WebElement makeCarDropDown;

    @CacheLookup
    @FindBy(xpath = "//select[@id='models']")
    WebElement modelDropDown;

    @CacheLookup
    @FindBy(xpath = "//select[@id='locations']")
    WebElement locationDropDown;

    @CacheLookup
    @FindBy(xpath = "//select[@id='priceTo']")
    WebElement priceDropDown;

    @CacheLookup
    @FindBy(xpath = "//input[@id='search-submit']")
    WebElement findCarBtn;

    @FindBy(xpath = "//h1[@class='listing-search-title']")
    WebElement getSearchTitleTxt;

    public String getSearchCarWelcomeText() {
        log.info("Verifying New & Used Car Search - carsguide page is displayed. ");
        return getTextFromElement(welcomeTextNewCar);
    }

    public String getUsedCarWelcomeText() {
        log.info("Verifying Used Car for Sales Page Displayed.");
        return getTextFromElement(welcomeTextUsedCar);
    }

    public void selectMakeOfCar(String make) throws InterruptedException {
        //mouseHoverToElement(makeCarDropDown);
        Thread.sleep(3000);
        log.info("Selecting Car Make : " + make);
        selectByVisibleTextFromDropDown(makeCarDropDown, make);
    }

    public void selectModelOfCar(String model) {
        //mouseHoverToElement(modelDropDown);
        log.info("Selecting Car Model : " + model);
        selectByVisibleTextFromDropDown(modelDropDown, model);
    }

    public void selectLocation(String location) {
       // mouseHoverToElement(locationDropDown);
        log.info("Selecting Car Location : " + location);
        selectByVisibleTextFromDropDown(locationDropDown, location);
    }

    public void selectPrice(String price) throws InterruptedException {
      //  mouseHoverToElement(priceDropDown);
        Thread.sleep(3000);
        log.info("Selecting Car Price : " + price);
        selectByVisibleTextFromDropDown(priceDropDown, price);
    }

    public void clickOnFindCarButton() {
        clickOnElement(findCarBtn);
        log.info("Clicking on Find Car Button. ");
    }

    public String getTitleText() {
        return getSearchTitleTxt.getText();
    }

}
