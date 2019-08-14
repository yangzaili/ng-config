import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Workshop } from '../model/workshops';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class WorkshopService {
  private workshopsUrl = 'api/workshops';

  constructor(private http: HttpClient,) { };

  getWorkshops (): Observable<Workshop[]> {
    return this.http.get<Workshop[]>(this.workshopsUrl)
  }
}
