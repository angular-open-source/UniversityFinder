import { UniversitiesResponse, UniversityResource } from './university.response';
import {University} from '../model/university.entity';
import {LogoApiService} from '../../shared/services/logo-api.service';

export class UniversityAssembler {
  static logoApiService: LogoApiService;
  static withLogoApiService(logoApiService: LogoApiService) {
    this.logoApiService = logoApiService;
    return this;
  }

  /**
   * @summary Converts a list of university resources into a list of university entities.
   * @author Paul Sulca
   *
   * @param {UniversityResource[]} resources - List of university resources to convert.
   * @returns {University[]} List of university entities.
   */
  static toEntitiesFromResponse(resources: UniversityResource[]): University[] {
    return resources.map(universities => this.toEntityFromResource(universities));
  }

  // static toEntitiesFromResponse(response: UniversitiesResponse): University[] {
  //   if (Array.isArray(response)) {
  //     return response.map(university => this.toEntityFromResource(university));
  //   }
  //
  //   // Si la respuesta tiene una propiedad episodes que es un array
  //   if (response && response.universities && Array.isArray(response.universities)) {
  //     return response.universities.map(university => this.toEntityFromResource(university));
  //   }
  //
  //   return [];
  // }

  /**
   * @summary Converts a university resource into a university entity.
   * @author Paul Sulca
   *
   * @param {UniversityResource} university - University resource to convert.
   * @returns {University} Resulting university entity.
   */
  static toEntityFromResource(university: UniversityResource): University {
    return {
      universityName: university.name,
      countryName: university.country,
      countryCode: university.alpha_two_code,
      domain: university.domains[0],
      domainLogo: this.logoApiService.getUrlToLogoFromWebPage(university.web_pages[0]),
      websiteUrl: university.web_pages[0],
    }
  }

}
