import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/User';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseApiUrl : string = "https://localhost:7058/api/User/";

  User : User = new User();

  constructor(private http: HttpClient) { }

  AddUser(user : object): Observable<object> {
    console.log("From Service",user);
    return this.http.post<User>(`${this.baseApiUrl}Post`,user)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  GetById(id : String): Observable<object> {
    return this.http.get<object>(`${this.baseApiUrl}GetById` +`/`+id);
  }

  GetAll():Observable<object>{
    return this.http.get<object>(`${this.baseApiUrl}Get`);
  }

  Update(id : string, user : object):Observable<object>{
    return this.http.put<object>(`${this.baseApiUrl}Put` +`/`+id, user );
  }
}
