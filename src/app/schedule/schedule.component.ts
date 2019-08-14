import { Component, OnInit } from '@angular/core';

import { Schedule } from '../model/schedule';
import { ScheduleService } from '../service/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  schedule: Schedule[]

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.getSchedule();
  }

  getSchedule(): void {
    console.log("schedule")
    this.scheduleService.getSchedule()
    .subscribe(schedule => this.schedule = schedule);
  }

}
