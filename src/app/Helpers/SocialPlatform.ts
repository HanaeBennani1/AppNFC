export class SocialPlatform{


    private _Facebook : number = 0;
    public get Facebook() : number {
        return this._Facebook;
    }
    public set Facebook(f : number) {
        this._Facebook = f;
    }

    private _Twitter : number = 1;
    public get Twitter() : number {
        return this._Twitter;
    }
    public set Twitter(t : number) {
        this._Twitter = t;
    }

    private _Instagram : number = 2;
    public get Instagram() : number {
        return this._Instagram;
    }
    public set Instagram(I : number) {
        this._Instagram = I;
    }

    private _Snapchat : number = 3;
    public get Snapchat() : number {
        return this._Snapchat;
    }
    public set Snapchat(s : number) {
        this._Snapchat = s;
    }
    
    private _Linkedin : number =4;
    public get Linkedin() : number {
        return this._Linkedin;
    }
    public set Linkedin(l : number) {
        this._Linkedin = l;
    }
}