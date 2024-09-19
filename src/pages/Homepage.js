const { test, expect } = require('@playwright/test');

export default class Homepage{

    constructor(page)
    {
        this.page=page;
    }
    async expectServiceIsVisible()
    {
        await expect(this.page.getByTitle('Service')).toBeVisible({timeout : 15000});
    }
}