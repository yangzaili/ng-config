import { Component, OnInit } from '@angular/core';
// import { DataService } from '../data.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomenewComponent implements OnInit {

    // constructor(private dataService: DataService) { }
    constructor() { }

    ngOnInit() {
        // this.getdata();
    }
    aa: [];
    // getdata() {
    //     let aa = this.dataService.getdata();
    //     console.log(aa);


    // }
    title = 'helloWorld';
    photoArr = [
        {
            imgUrl: '../../assets/img/p_1.jpg',
            className: 'img_mr_15 w-ratio-1 h-ratio-2'
        },
        {
            imgUrl: '../../assets/img/p_2.jpg',
            className: 'img_mr_15 w-ratio-1 h-ratio-1'
        },
        {
            imgUrl: '../../assets/img/p_3.jpg',
            className: 'img_mr_15 w-ratio-2 h-ratio-1'
        },
        {
            imgUrl: '../../assets/img/p_4.jpg',
            className: 'w-ratio-1-0 h-ratio-1'
        },
        {
            imgUrl: '../../assets/img/p_5.jpg',
            className: 'img_mr_15 w-ratio-2 h-ratio-2',
        },
        {
            imgUrl: '../../assets/img/p_6.jpg',
            className: 'w-ratio-2-0 h-ratio-1'
        },
        {
            imgUrl: '../../assets/img/p_7.jpg',
            className: 'img_mr_15 w-ratio-1 h-ratio-1-0'
        },
        {
            imgUrl: '../../assets/img/p_8.jpg',
            className: 'w-ratio-1-0 h-ratio-1-0'
        },
        {
            imgUrl: '../../assets/img/p_9.jpg',
            className: 'img-mtlose-265 w-ratio-1 h-ratio-1'
        }
    ];
    blogArr = [
        {
            imgUrl: '../../assets/img/blog1.jpg',
            blogTime: 'Fri, April 20',
            blogTitle: 'Mastering keyboard navigation in Angular using ListKeyManager'
        }, {
            imgUrl: '../../assets/img/blog2.jpg',
            blogTime: 'Wed, April 18',
            blogTitle: 'Data Visualisation for Enterprise with Angular and D3'
        }, {
            imgUrl: '../../assets/img/blog3.jpg',
            blogTime: 'Wed, April 18',
            blogTitle: 'Angular Architecture and Specific Layers'
        }, {
            imgUrl: '../../assets/img/blog4.jpg',
            blogTime: 'Tue, April 3',
            blogTitle: 'Angular’s HttpClient Testing in depth'
        }, {
            imgUrl: '../../assets/img/blog5.jpg',
            blogTime: 'Mon, April 2',
            blogTitle: 'Redux Form Validation with ngrx-forms'
        }, {
            imgUrl: '../../assets/img/blog6.jpg',
            blogTime: 'Fri, December 29',
            blogTitle: 'Tara Manicsic will co-emcee #ngconf2018'
        }, {
            imgUrl: '../../assets/img/blog7.jpg',
            blogTime: 'Fri, October 20',
            blogTitle: 'ng-conf 2018 tickets go on sale Oct.30, 2017 at noon MDT!'
        }, {
            imgUrl: '../../assets/img/blog8.jpg',
            blogTime: 'Web, November 8',
            blogTitle: 'img_mr_15 w-ratio-1 h-ratio-2'
        }
    ]

}
