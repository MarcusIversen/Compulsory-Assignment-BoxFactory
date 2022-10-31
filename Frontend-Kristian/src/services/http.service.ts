import { Injectable } from '@angular/core';
import axios from "axios";
import {MatSnackBar} from "@angular/material/snack-bar";
import {catchError} from "rxjs";

export const customAxios = axios.create({
  baseURL: 'https://localhost:7054/'
})

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private matSnackbar : MatSnackBar) {
    customAxios.interceptors.response.use(
      response => {
        if (response.status == 201 ) {
          this.matSnackbar.open("You have successfully created a box!")
        }
        if (response.status == 204 ) {
          this.matSnackbar.open("You have successfully deleted the box!")
        }
        return response;
      }, rejected => {
        if (rejected.response.status >= 400 && rejected.response.status < 500) {
          matSnackbar.open(rejected.response.data);
        } else if (rejected.respone.staus > 499){
          this.matSnackbar.open("Something went completely wrong!")
        }
        catchError(rejected);
      }
    )
  }

  async getBoxes()
  {
    const httpResponse = await customAxios.get<any>('box');
    return httpResponse.data;
  }

  async createBox(dto: { size: string; price: number; description: string; name: string }) {
    const httpResult = await customAxios.post('box', dto)
    return httpResult.data;
  }

  async deleteBox(id: any) {
    const httpResult = await customAxios.delete('box/'+id);
    return httpResult.data;

  }


  async updateBox(dto: { size: string; price: number; name: string; description: string }) {
    const httpResult = await customAxios.put('box', dto)
    return httpResult.data;
  }
}
