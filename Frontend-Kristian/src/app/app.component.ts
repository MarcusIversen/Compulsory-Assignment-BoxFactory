import {Component, OnInit} from '@angular/core';
import {HttpService} from "../services/http.service";
import * as http from "http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
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

  async createBox() {
    let dto = {
      name: this.boxName,
      price: this.price,
      size: this.size,
      description: this.description
    }
    const result = await this.http.createBox(dto);
    this.boxes.push(result);
  }

  async deleteBox(id: any) {
    const box = await this.http.deleteBox(id);
    this.boxes = this.boxes.filter((b: { id: any; }) => b.id != box.id)
  }

}
