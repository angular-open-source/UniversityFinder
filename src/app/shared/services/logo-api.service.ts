import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {University} from '../../universities/model/university.entity';
@Injectable({
  providedIn: 'root'
})
export class LogoApiService {
  baseUrl = environment.logoProviderApiBaseUrl;
  constructor() { }

  /**
   * Generates the URL to the logo of a university.
   *
   * @param {University} university - The university entity.
   * @returns {string} The URL to the university's logo.
   */
  getUrlToLogo(university: University) {
    console.log('getUrlToLogo', university);
    return `${this.baseUrl}${new URL(university.websiteUrl).hostname}`;
  }

  /**
   * Generates the URL to the logo from a university's web page.
   *
   * @param {string} webPage - The URL of the university's web page.
   * @returns {string} The URL to the university's logo.
   */
  getUrlToLogoFromWebPage(webPage: string) {
    return `${this.baseUrl}${new URL(webPage).hostname}`;
  }
}
