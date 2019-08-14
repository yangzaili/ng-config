import { Component, OnInit } from '@angular/core';
import { Speaker } from '../model/speakers'
import { SpeakerService } from '../service/speaker.service'

@Component({
  selector: 'app-nspeakers',
  templateUrl: './nspeakers.component.html',
  styleUrls: ['./nspeakers.component.css']
})
export class NspeakersComponent implements OnInit {

  speakers: Speaker[];

  constructor(private speakerService: SpeakerService) { }

  ngOnInit() {
    this.getSpeakers();
  }

  getSpeakers(): void {
    this.speakerService.getSpeakers()
    .subscribe(speakers => this.speakers = speakers);
    console.log("hahahhaha")
  }
}



