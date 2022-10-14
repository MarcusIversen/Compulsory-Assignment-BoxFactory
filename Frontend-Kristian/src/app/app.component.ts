import {Component, OnInit} from '@angular/core';
import {HttpService} from "../services/http.service";
import * as http from "http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ID?: number;
  boxName: string = '';
  price: number = 0;
  size: string = '';
  description: string = '';

  boxes: any;

  constructor(private http: HttpService) {

  }

  async ngOnInit() {
    const boxes = await this.http.getBoxes();
    this.boxes = boxes;
    console.log(boxes);
  }

  async getBoxes(){
    await this.http.getBoxes();
  }

  async createBox(){

  }

  async deleteBox(id: any) {
    const box = await this.http.deleteBox(id);
    this.boxes = this.boxes.filter((c: { id: any; }) => c.id != box.id);
  }

}
