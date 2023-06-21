import { Social } from "./Social";
import { Card } from "./Card";
import { Account } from "./Account";
export class Profile{

    constructor() {

    }


    private _id: string = "";
    public get id(): string {
      return this._id;
    }
    public set id(value: string) {
      this._id = value;
    }

    private _IsActive: boolean = true;
  public get IsActive(): boolean {
    return this._IsActive;
  }
  public set IsActive(value: boolean) {
    this._IsActive = value;
  }

  private _TemplateIndex: number = 0;
  public get TemplateIndex(): number {
    return this._TemplateIndex;
  }
  public set TemplateIndex(value: number) {
    this._TemplateIndex = value;
  }

  private _FirstName: string = "";
    public get firstName():string {
        return this._FirstName;
    }
    public set firstName(value: string){
        this._FirstName = value;
    }

    private _LastName: string = "";
    public get lastName():string {
        return this._LastName;
    }
    public set lastName(value: string){
        this._LastName = value;
    }

    private _phoneNumber: string = "";
    public get phoneNumber():string {
        return this._phoneNumber;
    }
    public set phoneNumber(value: string){
        this._phoneNumber = value;
    }

    private _address: string = "";
    public get adress():string {
        return this._address;
    }
    public set address(value: string){
        this._address = value;
    }

    private _createdAt: Date = new Date();
  public get createdAt(): Date {
    return this._createdAt;
  }
  public set createdAt(value: Date) {
    this._createdAt = value;
  }

  private _updateAt: Date = new Date();
  public get updateAt(): Date {
    return this._updateAt;
  }
  public set updateAt(value: Date) {
    this._updateAt = value;
  }

  private _socials: Social[]=[];
  public get social() : Social[]{
    return this._socials;
  }
  public set social(v : Social[]) {
    this._socials = v;
  }

  private _cards: Card[] = [];
  public get cards() : Card[]{
    return this._cards;
  }
  public set cards(c : Card[]) {
    this._cards = c;
  }

  // private _account: Account = new Account();
  // public get account(): Account {
  //   return this._account;
  // }
  // public set account(value: Account) {
  //   this._account = value;
  // }

  private _accountId : string="";
  public get accountId() : string {
    return this._accountId;
  }
  public set accountId(v : string) {
    this._accountId = v;
  }

  private _imagePath: string = "";
    public get imagePath():string {
        return this._imagePath;
    }
    public set ImagePath(value: string){
        this._imagePath = value;
    }

    private _Lattitude : number = 0;
  public get Lattitude(): number {
    return this._Lattitude;
  }
  public set Lattitude(value: number) {
    this._Lattitude = value;
  }

  private _Longitude: number = 0;
  public get Longitude(): number {
    return this._Longitude;
  }
  public set Longitude(value: number) {
    this._Longitude = value;
  }
}
