import { Account } from "./Account";
import { Social } from "./Social";
import { Card } from "./Card";
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
    public get FirstName():string {
        return this._FirstName;
    }
    public set FirstName(value: string){
        this._FirstName = value;
    }

    private _LastName: string = "";
    public get LastName():string {
        return this._LastName;
    }
    public set LastName(value: string){
        this._LastName = value;
    }

    private _PhoneNumber: string = "";
    public get PhoneNumber():string {
        return this._PhoneNumber;
    }
    public set PhoneNumber(value: string){
        this._PhoneNumber = value;
    }

    private _Address: string = "";
    public get Adress():string {
        return this._Address;
    }
    public set Address(value: string){
        this._Address = value;
    }

    private _CreatedAt: Date = new Date();
  public get CreatedAt(): Date {
    return this._CreatedAt;
  }
  public set CreatedAt(value: Date) {
    this._CreatedAt = value;
  }

  private _UpdateAt: Date = new Date();
  public get UpdateAt(): Date {
    return this._UpdateAt;
  }
  public set UpdateAt(value: Date) {
    this._UpdateAt = value;
  }

  private _Socials!: number[];
  public get social() : Social{
    return this.social;
  }
  public set social(v : Social) {
    this._Socials! = [];
  }

  private _Cards!: number[];
  public get cards() : Card{
    return this.cards;
  }
  public set cards(c : Card) {
    this._Cards! = [];
  }

  private _account: Account = new Account();
  public get account(): Account {
    return this._account;
  }
  public set account(value: Account) {
    this._account = value;
  }

  private _AccountId : string="";
  public get AccountId() : string {
    return this._AccountId;
  }
  public set AccountId(v : string) {
    this._AccountId = v;
  }

  private _ImagePath: string = "";
    public get ImagePath():string {
        return this._ImagePath;
    }
    public set ImagePath(value: string){
        this._ImagePath = value;
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