export class AccountType{
    
    private _SoloUser : number = 0;
    public get SoloUser() : number {
        return this._SoloUser;
    }
    public set SoloUser(SU : number) {
        this._SoloUser = SU;
    }

    private _Company : number = 1;
    public get Company() : number {
        return this._Company;
    }
    public set Company(comp : number) {
        this._Company = comp;
    }

    private _Admin : number = 2;
    public get Admin() : number {
        return this._Admin;
    }
    public set Admin(Ad : number) {
        this._Admin = Ad;
    }

}