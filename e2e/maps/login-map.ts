import { ElementFinder, element, by } from "protractor";


export class LoginMap {
    private usernameEle: ElementFinder = element(by.id('username'));
    private passwordEle: ElementFinder = element(by.id('password'));

    public userName() {
        return this.usernameEle;
    }

    public password() {
        return this.passwordEle;
    }

}