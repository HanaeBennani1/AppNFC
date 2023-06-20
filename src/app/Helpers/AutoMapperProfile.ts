import { User } from "../Models/User";
import { Company } from "../Models/Company";
import { Account } from "../Models/Account";
import { Profile } from "../Models/Profile";
export class AutoMapperProfile{

    private _user: User = new User();
    public get user(): User {
    return this._user;
  }
  public set user(value: User) {
    this._user = value;
  }

  private _company: Company = new Company();
  public get company(): Company {
    return this._company;
  }
  public set company(value: Company) {
    this._company = value;
  }

  private _account: Account = new Account();
  public get account(): Account {
    return this._account;
  }
  public set account(value: Account) {
    this._account = value;
  }

  private _profil: Profile = new Profile();
  public get profil(): Profile {
    return this._profil;
  }
  public set profil(value: Profile) {
    this._profil = value;
  }

}