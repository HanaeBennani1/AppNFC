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

    private _AccountType: AccountType = AccountType.SoloUser;
    public get accountType(): AccountType {
    return this._AccountType;
  }
  public set accountType(value: AccountType) {
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
  public get suscriberId() : string {
    return this._SuscriberId;
  }
  public set suscriberId(v : string) {
    this._SuscriberId = v;
  }


  // private _Suscriber: Suscriber = new Suscriber();
  // public get Suscriber(): Suscriber {
  //   return this._Suscriber;
  // }
  // public set Suscriber(value: Suscriber) {
  //   this._Suscriber = value;
  // }

  private _Profiles: Profile[] =[];
  public get profiles() : Profile[]{
    //return this.profile;
    return this._Profiles;
  }
  public set profile(p : Profile[]) {
    this._Profiles = p;
  }

  private _MaxProfileNumber : number= 0;
    public get maxProfileNumber() : number {
      return this._MaxProfileNumber;
    }
    public set maxProfileNumber(maxP : number) {
      this._MaxProfileNumber = maxP;
    }

    private _currentProfileNumber : number= 0;
    public get currentProfileNumber() : number {
      return this._currentProfileNumber;
    }
    public set currentProfileNumber(curentP : number) {
      this._currentProfileNumber = curentP;
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
