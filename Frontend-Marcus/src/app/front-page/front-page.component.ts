import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {

  constructor(private router: Router) {
  }

  goToBoxFactory(OverviewPage:string):void{
    this.router.navigate([`${OverviewPage}`]);
  }

  ngOnInit(): void {
  }

}