import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Schedule } from '../model/schedule';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private scheduleUrl = "api/schedule";

  constructor(private http: HttpClient) { };

  getSchedule (): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(this.scheduleUrl)
  }

}
