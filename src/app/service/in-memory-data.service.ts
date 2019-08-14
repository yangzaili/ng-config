import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

import { Workshop } from '../model/workshops';
import { Speaker } from '../model/speakers';
import { Session } from '../model/sessions';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    const workshops = [
        { 
            id: 1,
            clock: "8:00 am – 10:00 am",
            date: "Mon, April 29",
            addr: "Grand Ballroom Office", 
            title: "Workshop Registration", 
            person: [] 
        },
        { 
            id: 2, clock: "10:00 am – 5:00 pm",
            date: "Mon, April 29", 
            addr: "Murano", 
            title: "Day 1 of 2-day workshop: Angular Blast Off",
            person: [
            { 
                avator: "aaron-frost.jpg",
                name: "Aaron Frost"
            },
            {
                avator: "brian-love.jpg",
                name: "Brian Love" 
            }] 
        },
        { id: 3, clock: "10:00 am – 5:00 pm", date: "Mon, April 29", addr: "Riviera", 
        title: "Progressive Angular: Using the Web Platform Power to the Fullest", 
        person: [{ avator: "maxim.jpg", name: "MAXIM SALNIKOV" },
      ] },

      { id: 4, clock: "10:00 am – 1:00 pm", date: "Tue, April 30", addr: "Provence", 
        title: "Angular Animations with Ivy", 
        person: [{ avator: "matias.jpg", name: "Angular Team" },
        { avator: "thomas.jpg", name: "Solutions Architect" },
        { avator: "Elad.jpg", name: "ELAD BEZALEL" },
      ] }

    ];

    const speakers = [
      {
        id: 1,
        img: "jasonaden.jpg",
        name: "JASON ADEN",
        content: "Angular Team"
      },
      {
        id: 2,
        img: "luis-aviles.jpg",
        name: "LUIS AVILES",
        content: "Senior Software Developer"
      },
      {
        id: 3,
        img: "Elad.jpg",
        name: "ELAD BEZALEL",
        content: ""
      },
      {
        id: 4,
        img: "Mike.jpg",
        name: "MIKE BROCCHI",
        content: ""
      },
      {
        id: 5,
        img: "thomas.jpg",
        name: "THOMAS BURLESON",
        content: "Solutions Architect"
      },
      {
        id: 6,
        img: "alex-castillo.jpg",
        name: "ALEX CASTILLO",
        content: "Co-founder"
      },
      {
        id: 7,
        img: "chloe.jpg",
        name: "CHLOE CONDON",
        content: ""
      },

      {
        id: 8,
        img: "jeff.jpg",
        name: "JEFF CROSS",
        content: ""
      },
      {
        id: 9,
        img: "James-Daniels.jpg",
        name: "JAMES DANIELS",
        content: ""
      },
      {
        id: 10,
        img: "jason.jpg",
        name: "JASON DOBRY",
        content: ""
      },
    ]
    
    const sessions = [
      { 
          id: 1,
          clock: "7:00 am – 9:00 am",
          date: "Wed, May 1",
          addr: "Imperial Ballroom", 
          title: "Breakfast", 
          person: [] 
      },
      { 
          id: 2, clock: "7:00 am – 9:00 am",
          date: "Wed, May 1", 
          addr: "Grand Ballroom Office", 
          title: "Conference Registration",
          person: [] 
      },
      { id: 3, 
        clock: "7:00 am – 8:00 am", 
        date: "Wed, May 1", 
        addr: "Milano", 
        title: "ng-yoga", 
        person: [] 
      },

      { 
        id: 4, 
        clock: "8:00 am – 5:00 pm", 
        date: "Wed, May 1", 
        addr: "3rd Floor", 
        title: "ng-kids day 1", 
        person: [] 
      },
      { 
        id: 5, 
        clock: "9:00 am – 5:00 pm", 
        date: "Wed, May 1", 
        addr: "Grand Salon", 
        title: "Craft and Maker Space", 
        person: [{avator: "luker.jpg", name: "JEN LUKER"},] 
      },
      { 
        id: 6, 
        clock: "9:00 am – 9:10 am", 
        date: "Wed, May 1", 
        addr: "Grand Ballroom", 
        title: "Day 1 Blast Off (Opening Remarks)", 
        person: [] 
      },
      { 
        id: 7, 
        clock: "9:15 am – 9:55 am", 
        date: "Wed, May 1", 
        addr: "Grand Ballroom", 
        title: "Day 1 Keynote", 
        
        person: [{avator: "brad-green.jpg", name: "BRAD GREEN"}, {avator: "igor-minar.jpg", name: "IGOR MINAR"},] 
        
      },
      { 
        id: 4, 
        clock: "10:00 am – 10:20 am", 
        date: "Wed, May 1", 
        addr: "Grand Ballroom", 
        title: "The Control Value Accessor – Like a Wormhole in Space for Your Forms, Only More Useful!", 
        person: [{avator: "jennifer-wadella.jpg", name: "JENNIFER WADELLA"},] 
      },
  ];

    const schedule = [
      {
        "day": "MON, APRIL 29",
        "planlist": [
          {
            "time": "8:00 am – 10:00 am",
            "theme": "Workshop Registration",
            "persons": []
          },
          {
            "time": "10:00 am – 5:00 pm",
            "theme": "Day 1 of 2-day workshop: Angular Blast Off",
            "persons": [
              {"name": "Aaron Frost"},
              {"name": "Brian Love"}
            ]
          },
          {
            "time": "10:00 am – 5:00 pm",
            "theme": "Progressive Angular: Using the Web Platform Power to the Fullest",
            "person": [{"name": "Maxim Salnikov"}]
          },
          {
            "time": "10:00 am – 5:00 pm",
            "theme": "Unit Testing Angular",
            "persons": [
              {"name": "Dan Wahlin"}, 
              {"name": "John Papa"}
            ]
          }
        ]
      },

      {
        "day": "TUE, APRIL 30",
        "planlist": [
          {
            "time": "8:00 am – 10:00 am",
            "theme": "Workshop Registration",
            "persons": []
          },
          {
            "time": "10:00 am – 5:00 pm",
            "theme": "Advanced NGRX",
            "persons": [
              {"name": "Jesse Sanders"}
            ]
          },
          {
            "time": "10:00 am – 5:00 pm",
            "theme": "Effective Automated Testing with Cypress.io",
            "person": [{"name": "Joe Eames"}]
          },
          {
            "time": "10:00 am – 5:00 pm",
            "theme": "RxWorkshop – Basics and Beyond",
            "persons": [
              {"name": "Tracy LeeBen Lesh"}
            ]
          },
          {
            "time": "10:00 am – 1:00 pm",
            "theme": "Angular Animations with Ivy",
            "persons": [
              {"name": "Matias Niemelä"},
              {"name": "Elad Bezalel"},
              {"name": "Thomas Burleson"},
            ]
          }
        ]
      },

      {
        "day": "WED, MAY 1",
        "planlist": [
          {
            "time": "7:00 am – 9:00 am",
            "theme": "Breakfast",
            "persons": []
          },
          {
            "time": "7:00 am – 9:00 am",
            "theme": "Conference Registration",
            "persons": []
          },
          {
            "time": "7:00 am – 8:00 am",
            "theme": "ng-yoga",
            "person": []
          },
          {
            "time": "8:00 am – 5:00 pm",
            "theme": "ng-kids day 1",
            "persons": []
          },
          {
            "time": "9:00 am – 5:00 pm",
            "theme": "Craft and Maker Space",
            "persons": [
              {"name": "Jen Luker"},
            ]
          }
        ]
      },

      {
        "day": "THU, MAY 2",
        "planlist": [
          {
            "time": "7:00 am – 8:00 am",
            "theme": "ng-yoga",
            "persons": []
          },
          {
            "time": "8:00 am – 10:00 am",
            "theme": "Breakfast",
            "persons": []
          },
          {
            "time": "8:00 am – 5:00 pm",
            "theme": "ng-kids day 2",
            "person": []
          },
          {
            "time": "10:00 am – 10:20 am",
            "theme": "Productivity Revolution: Angular Principles in Node",
            "persons": [{"name": "Kamil Mysliwiec"},]
          },
          {
            "time": "10:00 am – 10:20 am",
            "theme": "ng generate universal, now what?",
            "persons": [
              {"name": "James Daniels"},
            ]
          }
        ]
      },

      {
        "day": "FRI, MAY 3",
        "planlist": [
          {
            "time": "7:00 am – 9:00 am",
            "theme": "Breakfast",
            "persons": []
          },
          {
            "time": "7:00 am – 8:00 am",
            "theme": "ng-yoga",
            "persons": []
          },
          {
            "time": "8:00 am – 5:00 pm",
            "theme": "ng-kids day 3",
            "person": []
          },
          {
            "time": "9:00 am – 4:00 pm",
            "theme": "Craft and Maker Space",
            "persons": [{"name": "Jen Luker"},]
          },
          {
            "time": "9:00 am – 9:10 am",
            "theme": "Day 3 ReEntry (Opening Remarks)",
            "persons": []
          }
        ]
      },
    ]

    return {speakers, workshops, sessions, schedule};
  }

  getWorkshopsId(workshops: Workshop[]): number {
    return workshops.length > 0 ? Math.max(...workshops.map(workshop => workshop.id)) + 1 : 11;
  }

  getSpeakersId(speakers: Speaker[]): number {
    return speakers.length > 0 ? Math.max(...speakers.map(speaker => speaker.id)) + 1 : 11;
  }

  getSessionsId(sessions: Session[]): number {
    return sessions.length > 0 ? Math.max(...sessions.map(session => session.id)) + 1 : 11;
  }
}
