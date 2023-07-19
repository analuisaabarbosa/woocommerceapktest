class homeScreen {

    get #skipWidgets(){
        return $('id:button_skip')
    }

    get #enterStoreAdress(){
        return $('id:button_login_store')
    }

    async goToLogin(){
        await this.#skipWidgets.click()
        await this.#enterStoreAdress.click()
    }

}

module.exports = new homeScreen()