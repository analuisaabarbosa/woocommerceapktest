class loginScreen {

    get #storeAdress(){
        return $('id:input')
    }

    get #continue(){
        return $('id:bottom_button')
    }

    get #continueWithEmail(){
        return $('id:input')
    }

    get #loginButton(){
        return $('id:login_continue_button')
    }

    get #setPassword(){
        return $('id:input')
    }

    get #continueLogin(){
        return $('id:bottom_button')
    }

    async setStoreAdress(url){
        await this.#storeAdress.setValue(url)
        await this.#continue.click()
    }

    async continueWithEmail(email){
        await this.#continueWithEmail.setValue(email)
        await this.#loginButton.click()
    }

    async setPassword(senha){
        await this.#setPassword.setValue(senha)
        await this.#continueLogin.click()
    }

}

module.exports = new loginScreen()