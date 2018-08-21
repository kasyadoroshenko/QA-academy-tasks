const PageBase = {
login: ".login"(),
password: ".password"()
}

export default class pageBase extends signInPage {

    constructor() {
        super();
        this.waitForPageAvailable();
    }

    waitForPageAvailable() {
        this.login().isVisible();
        this.password().isVisible()
    }

}

waitForPageAvailable() {
    this.
}