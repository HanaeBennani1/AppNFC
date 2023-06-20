import { Account } from "./Account";
export class Suscriber{

    constructor() {

	}

    private _id: string = "";
    public get id(): string {
      return this._id;
    }
    public set id(value: string) {
      this._id = value;
    }

    private _account: Account = new Account();
  public get account(): Account {
    return this._account;
  }
  public set account(value: Account) {
    this._account = value;
  }

  private _CreatedAt: Date = new Date();
    public get CreatedAt(): Date {
    return this._CreatedAt;
  }
  public set CreatedAt(value: Date) {
    this._CreatedAt = value;
  }

  private _UpdatedAt: Date = new Date();
  public get UpdatedAt(): Date {
    return this._UpdatedAt;
  }
  public set UpdatedAt(up: Date) {
    this._UpdatedAt = up;
  }


}