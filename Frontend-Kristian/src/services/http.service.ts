import { Injectable } from '@angular/core';
import axios from "axios";
import * as https from "https";
import * as http from "http";

export const customAxios = axios.create({
  baseURL: 'https://boxfactoryapi.azurewebsites.net/'
})

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  async getBoxes()
  {
    const httpResponse = await customAxios.get<any>('box');
    return httpResponse.data;
  }

}
