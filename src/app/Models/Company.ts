import { Suscriber } from "./Suscriber";
export class Company extends Suscriber{

    constructor() {
      super();
    }


    // private _id: string = "";
    // public get id(): string {
    //   return this._id;
    // }
    // public set id(value: string) {
    //   this._id = value;
    // }

    private _companyName: string = "";
    public get companyName(): string {
      return this._companyName;
    }
    public set companyName(value: string) {
      this._companyName = value;
    }

    private _companyAddress: string = "";
    public get companyAddress(): string {
      return this._companyAddress;
    }
    public set companyAddress(value: string) {
      this._companyAddress = value;
    }

    private _companyPhoneNumber: string = "";
    public get companyPhoneNumber(): string {
      return this._companyPhoneNumber;
    }
    public set companyPhoneNumber(value: string) {
      this._companyPhoneNumber = value;
    }
}
