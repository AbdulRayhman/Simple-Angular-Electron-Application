import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import {HttpModule, Http, URLSearchParams, Headers, RequestOptions,Response} from '@angular/http';

import { Observable } from 'rxjs';

interface myData {
  message: string,
  success: boolean
}

interface isLoggedIn {
  status: boolean
}

interface logoutStatus {
  success: boolean
}
@Injectable()
export class Appervice {

  constructor(private http: Http) { }

  getServiceData():Observable<Response>{

    const _header = new Headers({
      'Content-Type': 'application/json'
    });
    const options = new RequestOptions({ headers: _header });
      // return this.http.get('http://35.200.210.36/api/Bus/GetAllBusesByStatus?status=true&pagenumber=1&pagesize=10');
      return this.http.get('https://jsonplaceholder.typicode.com/posts',options);
  }
  postServiceData():Observable<Response>{
    const _header = new Headers({
      'Content-Type': 'application/json'
    });
    const options = new RequestOptions({ headers: _header });

      return this.http.post('https://jsonplaceholder.typicode.com/posts',
      {
        title: 'foo',
        body: 'bar',
        userId: 1
    }
    ,options);
}
//   getSomeData() {
//     return this.http.get<myData>('/api/database.php')
//   }

//   isLoggedIn(): Observable<isLoggedIn> {
//     return this.http.get<isLoggedIn>('/api/isloggedin.php')
//   }

//   logout() {
//     return this.http.get<logoutStatus>('/api/logout.php')
//   }

}