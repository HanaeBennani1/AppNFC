import { Suscriber } from "./Suscriber";
export class User{
  [x: string]: any;

    constructor() {

    }
  
  
    private _id: string = "";
    public get id(): string {
      return this._id;
    }
    public set id(value: string) {
      this._id = value;
    }

    private _firstName: string = "";
    public get firstName():string {
        return this._firstName;
    }
    public set firstName(value: string){
        this._firstName = value;
    }

    private _lastName: string = "";
    public get lastName():string {
        return this._lastName;
    }
    public set lastName(value: string){
        this._lastName = value;
    }

    private _phoneNumber: string = "";
    public get phoneNumber():string {
        return this._phoneNumber;
    }
    public set phoneNumber(value: string){
        this._phoneNumber = value;
    }

    private _address: string = "";
    public get address():string {
        return this._address;
    }
    public set address(value: string){
        this._address = value;
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

    private _birth: Date = new Date();
  public get birth(): Date {
    return this._birth;
  }
  public set birth(value: Date) {
    this._birth = value;
  }


}