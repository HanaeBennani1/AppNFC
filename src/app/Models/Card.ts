import { Profile } from "./Profile";
export class Card{

    constructor() {

    }
  
  
    private _id: string = "";
    public get id(): string {
      return this._id;
    }
    public set id(value: string) {
      this._id = value;
    }

    private _isActive: boolean = true;
  public get isActive(): boolean {
    return this._isActive;
  }
  public set isActive(value: boolean) {
    this._isActive = value;
  }

  private _ProfileId : string="";
  public get ProfileId() : string {
    return this._ProfileId;
  }
  public set ProfileId(v : string) {
    this._ProfileId = v;
  }


  private _Profile: Profile = new Profile();
  public get Profile(): Profile {
    return this._Profile;
  }
  public set Profile(value: Profile) {
    this._Profile = value;
  }
}