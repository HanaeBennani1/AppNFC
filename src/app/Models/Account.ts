import { Suscriber } from "./Suscriber";
import { AccountType } from "../Helpers/AccountType";
import {Profile} from "./Profile";
export class Account{

    constructor() {

	}

    private _id: string = "";
    public get id(): string {
      return this._id;
    }
    public set id(value: string) {
      this._id = value;
    }

    private _AccountType: AccountType = new AccountType();
    public get AccountType(): AccountType {
    return this._AccountType;
  }
  public set AccountType(value: AccountType) {
    this._AccountType = value;
  }

    private _mail: string = "";
    public get mail():string {
        return this._mail;
    }
    public set mail(value: string){
        this._mail = value;
    }

    private _password: string = "";
    public get password():string {
        return this._password;
    }
    public set password(value: string){
        this._password = value;
    }

    private _isActive: boolean = true;
  public get isActive(): boolean {
    return this._isActive;
  }
  public set isActive(value: boolean) {
    this._isActive = value;
  }

  private _SuscriberId : string="";
  public get SuscriberId() : string {
    return this._SuscriberId;
  }
  public set SuscriberId(v : string) {
    this._SuscriberId = v;
  }


  private _Suscriber: Suscriber = new Suscriber();
  public get Suscriber(): Suscriber {
    return this._Suscriber;
  }
  public set Suscriber(value: Suscriber) {
    this._Suscriber = value;
  }

  private _Profile!: number[];
  public get profile() : Profile{
    return this.profile;
  }
  public set profile(p : Profile) {
    this._Profile! = [];
  }

  private _MaxProfileNumber : number= 0;
    public get MaxProfileNumber() : number {
      return this._MaxProfileNumber;
    }
    public set MaxProfileNumber(maxP : number) {
      this._MaxProfileNumber = maxP;
    }

    private _CurrentProfileNumber : number= 0;
    public get CurrentProfileNumber() : number {
      return this._CurrentProfileNumber;
    }
    public set CurrentProfileNumber(curentP : number) {
      this._CurrentProfileNumber = curentP;
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