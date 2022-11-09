import { Injectable } from '@angular/core';
import {EachHeaderData, HeaderData} from './portfolio.type';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() {}

  extractHeaderData(data: unknown): EachHeaderData {
    //TODO: Remove ignore
    // @ts-ignore
    return data.headers[0]
  }

}
