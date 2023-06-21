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

  private _createdAt: Date = new Date();
    public get createdAt(): Date {
    return this._createdAt;
  }
  public set createdAt(value: Date) {
    this._createdAt = value;
  }

  private _updatedAt: Date = new Date();
  public get updatedAt(): Date {
    return this._updatedAt;
  }
  public set updatedAt(up: Date) {
    this._updatedAt = up;
  }


}
