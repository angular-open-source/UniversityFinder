/**
 * University entity class
 * @class University
 * @summary
 * This class represents a university entity.
 * It contains the following properties:
 * @property {string} universityName - The name of the university
 * @property {string} countryName - The name of the country where the university is located
 * @property {string} countryCode - The country code of the university
 * @property {string} domain - The domain of the university
 * @property {string} domainLogo - The URL to the logo of the university
 * @property {string} websiteUrl - The website URL of the university
 * @author Paul Sulca
 */

export class University {
  universityName: string;
  countryName: string;
  countryCode: string;
  domain: string;
  domainLogo: string;
  websiteUrl: string;
  constructor() {
    this.universityName = '';
    this.countryName = '';
    this.countryCode = '';
    this.domain = '';
    this.domainLogo = '';
    this.websiteUrl = '';
  }
}
