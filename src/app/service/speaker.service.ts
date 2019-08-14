import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, map, tap } from 'rxjs/operators';

import { Speaker } from '../model/speakers'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {
  private speakersUrl = 'api/speakers';

  constructor(private http: HttpClient,) { };

  getSpeakers (): Observable<Speaker[]> {
    return this.http.get<Speaker[]>(this.speakersUrl)
  }

}
