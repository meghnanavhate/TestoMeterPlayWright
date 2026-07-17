export class ProductPage {

    constructor(page){

        this.productSort = page.locator("[data-test='product-sort-container']");

        this.backpackAddButton = page.locator("[data-test='inventory-item']")
        .filter({hasText:"Sauce Labs Backpack"})
        .getByText("Add to cart");

        this.fleeceJacketAddButton = page.locator("[data-test='inventory-item']")
        .filter({hasText:"Sauce Labs Fleece Jacket"})
        .getByText("Add to cart");

    }
}
