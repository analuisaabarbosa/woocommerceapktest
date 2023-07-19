class myStoreScreen {
    get #myStoreLogo(){
        return $('android.view.View')
    }

    get #myStoreName(){
        return $('id:toolbar_subtitle')
    }

    async getMyStoreLogo(){
        await this.#myStoreLogo.waitForExist({ timeout: 60000})
    }

    async getStoreName(){
        return await this.#myStoreName.getText()
    }
}

module.exports = new myStoreScreen()