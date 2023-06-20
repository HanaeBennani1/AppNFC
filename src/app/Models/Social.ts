import { Profile } from "./Profile";
import { SocialPlatform } from "../Helpers/SocialPlatform";
export class Social{
    constructor() {

    }
  
  
    private _id: string = "";
    public get id(): string {
      return this._id;
    }
    public set id(value: string) {
      this._id = value;
    }

    private _SocialUrl: string = "";
    public get SocialUrl():string {
        return this._SocialUrl;
    }
    public set SocialUrl(value: string){
        this._SocialUrl = value;
    }

    private _SocialPlatform: SocialPlatform = new SocialPlatform();
    public get SocialPlatform() : SocialPlatform{
      return this._SocialPlatform;
    }
    public set SocialPlatform(value: SocialPlatform){
      this._SocialPlatform = value;
    }

    private _Profile: Profile = new Profile();
  public get Profile(): Profile {
    return this._Profile;
  }
  public set Profile(value: Profile) {
    this._Profile = value;
  }

  private _ProfileId : string="";
  public get ProfileId() : string {
    return this._ProfileId;
  }
  public set ProfileId(v : string) {
    this._ProfileId = v;
  }
}