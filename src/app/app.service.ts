import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {

  constructor(private http: Http) { }

  getAll(): Observable<any> {
    return this.http.get("../assets/json/campaigns.json").pipe(
        map(response => response.json())
    );
  }
}