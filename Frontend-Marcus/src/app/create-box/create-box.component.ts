import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {HttpService} from "../../services/http.service";
import {BreakpointObserver} from "@angular/cdk/layout";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-box',
  templateUrl: './create-box.component.html',
  styleUrls: ['./create-box.component.scss']
})
export class CreateBoxComponent implements OnInit {

  title = 'LocalFactoryFrontEnd';
  boxName: string = "";
  boxPrice: number = 0;
  boxSize: string = "";
  boxDescription: string = "";
  boxes: any;

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
    const boxes = await this.http.getBoxes();
    this.boxes = boxes;
  }

  async createBox() {
    let dto = {
      name: this.boxName,
      price: this.boxPrice,
      size: this.boxSize,
      description: this.boxDescription
    }
    const result = await this.http.createBox(dto);
    this.boxes.push(result);
  }


  async deleteBox(id: any) {
    const box = await this.http.deleteBox(id);
    this.boxes = this.boxes.filter((b: { id: any; }) => b.id != box.id);
  }

}
