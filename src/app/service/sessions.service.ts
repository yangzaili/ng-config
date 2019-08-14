import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, map, tap } from 'rxjs/operators';

import { Session } from '../model/sessions';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SessionsService {
  private sessionsUrl = 'api/sessions';

  constructor(private http: HttpClient,) { };

  getSessions (): Observable<Session[]> {
    return this.http.get<Session[]>(this.sessionsUrl)
  }

}
