import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login() {
    const configUrl = 'http://10.44.29.23:8080/login';
    // http://10.44.29.23:8080/login
    return this.httpClient.get<any>(configUrl).pipe(map((response: any) => {
      return response.serviceResponse.result === 'OK' ? 'Happy' : 'Bad';
    }));
  }
}
