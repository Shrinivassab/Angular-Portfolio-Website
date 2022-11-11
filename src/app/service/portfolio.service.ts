import { Injectable } from '@angular/core';
import {EachHeaderData, HeaderData} from './portfolio.type';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() {}

  extractHeaderData(data: unknown): EachHeaderData {
    // @ts-ignore
    console.log(data.headers[0])
    //TODO: Remove ignore
    // @ts-ignore
    return data.headers[0]
  }

}
