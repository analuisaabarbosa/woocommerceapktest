const homeScreen = require("../screens/home.screen");
const loginScreen = require("../screens/login.screen");
const mystoreScreen = require("../screens/mystore.screen");

describe('Acess Admin Panel', () => {
    it('should login with valid credencials', async function() {
        await homeScreen.goToLogin()
        await loginScreen.setStoreAdress('http://lojaebac.ebaconline.art.br')
        await loginScreen.continueWithEmail('lojaebacqe@gmail.com')
        await loginScreen.setPassword('GD*peToHNJ1#c$sgk08EaYJQ')
        await mystoreScreen.getMyStoreLogo()
        expect(await mystoreScreen.getStoreName()).toEqual('EBAC - Shop')

        setTimeout(()=> {
            console.log('abriu')
        }, 10000)
    });
});

//senha da conta woocommerce: Gd*peToHNJ1#c$sgk08EaYJQ