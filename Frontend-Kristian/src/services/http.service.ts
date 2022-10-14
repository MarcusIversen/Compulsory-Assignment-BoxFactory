import { Injectable } from '@angular/core';
import axios from "axios";

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

  async createBox(dto: { size: string; price: number; description: string; name: string }) {
    const httpResult = await customAxios.post('box', dto)
    return httpResult.data;
  }

  async deleteBox(id: any) {
    const httpResult = await customAxios.delete('box/'+id);
    return httpResult.data;
  }
}
