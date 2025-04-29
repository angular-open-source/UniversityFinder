import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {University} from '../../universities/model/university.entity';

@Injectable({
  providedIn: 'root'
})
export class LogoApiService {
  baseUrl = environment.logoProviderApiBaseUrl;
  constructor() { }
  getUrlToLogo(university: University) {
    console.log('getUrlToLogo', university);
    return `${this.baseUrl}${new URL(university.websiteUrl).hostname}`;
  }
}
