import {LoginMap} from './../maps/login-map';


export class LoginPage {
    private loginMap = new LoginMap();

  
    public enterUsername(username: string) {
        return this.loginMap.userName().sendKeys(username);
    }

    public enterPassword(password: string) {
        return this.loginMap.password().sendKeys(password);
    }
}