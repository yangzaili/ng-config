import { Component, OnInit } from '@angular/core';
import { Session } from '../model/sessions';
import { SessionsService } from '../service/sessions.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {
  sessions: Session[]

  constructor(private sessionsService: SessionsService) { }

  ngOnInit() {
    this.getSessions();
  }
  getSessions(): void {
    // console.log("sessions");
    this.sessionsService.getSessions()
    .subscribe(sessions => this.sessions = sessions);
  }




}
