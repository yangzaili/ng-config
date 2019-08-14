import { Component, OnInit } from '@angular/core';
import { Workshop } from '../model/workshops'
import { WorkshopService } from '../service/workshop.service'

@Component({
  selector: 'app-nworkshops',
  templateUrl: './nworkshops.component.html',
  styleUrls: ['./nworkshops.component.css']
})
export class NworkshopsComponent implements OnInit {
  workshops: Workshop[];

  constructor(private workshopService: WorkshopService) { }

  ngOnInit() {
    this.getWorkshops();
  }

  getWorkshops(): void {
    this.workshopService.getWorkshops()
    .subscribe(workshops => this.workshops = workshops);
  }

}



