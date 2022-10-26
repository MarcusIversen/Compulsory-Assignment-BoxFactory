import { Injectable } from '@angular/core';
import axios from "axios";
import * as https from "https";
import * as http from "http";
import {reportUnhandledError} from "rxjs/internal/util/reportUnhandledError";
import {MatSnackBar} from "@angular/material/snack-bar";

export const customAxios = axios.create({
  //baseURL: 'https://marcusboxfactory.azurewebsites.net'
  baseURL: 'https://localhost:7054'
})

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private matSnackBar: MatSnackBar) {
    customAxios.interceptors.response.use(
      response => {
        if(response.status==201){
            this.matSnackBar.open("Box has been successfully created")
        }
        return response;
      }, rejected => {
        if(rejected.response.status>=400 && rejected.response.status<500){
          matSnackBar.open(rejected.response.data);
        }
      }
    )
  }

  async getBoxes()
  {
    const httpResponse = await customAxios.get<any>('box');
    return httpResponse.data;
  }

  async createBox(dto: { size: string; price: number; name: string; description: string }) {
    const httpResult = await customAxios.post('box', dto)
    return httpResult.data;
  }

  async deleteBox(id: any) {
    const httpResults = await customAxios.delete('box/'+id);
    return httpResults.data;
  }
}
