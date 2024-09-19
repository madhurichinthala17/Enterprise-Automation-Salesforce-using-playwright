import Homepage from './Homepage';

export default class LoginPage{

    constructor(page)
    {
        this.page=page;
    }
   
    async navigateToLoginPage()
    {
        await this.page.goto("/")
    }

    //using Aria Option Instead of Locators
    async fillUserName(username)
    {
        await this.page.getByLabel('Username').fill(username);
    }

    async fillPassword(password)
    {
        await this.page.getByLabel('Password').fill(password);
    }

    async clickLogin()
    {
        await this.page.getByRole('button', { name: 'Log In' }).click().
        catch((error) => {
            console.error('Error clicking login button: ${error}');
            throw error;
        });

        const homePage = new Homepage(this.page);
        return homePage;
    }

    //Here I have used PageObjectChaining where Iam passing the same page object to another page 
}
