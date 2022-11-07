import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {BreakpointObserver} from "@angular/cdk/layout";
import {Router} from "@angular/router";
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @ViewChild(MatSidenav)
  sideNav!: MatSidenav;

  constructor(private http: HttpService, private observer: BreakpointObserver, private router: Router) {
  }


  ngAfterViewInit(){
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if(res.matches){
        this.sideNav.mode = 'over';
        this.sideNav.close();
      }else{
        this.sideNav.mode = 'side';
        this.sideNav.open();
      }
    });
  }

  async ngOnInit() {
  }

}
