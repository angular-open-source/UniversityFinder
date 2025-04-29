import { UniversitiesResponse, UniversityResource } from './university.response';
import {University} from '../model/university.entity';
import {LogoApiService} from '../../shared/services/logo-api.service';

export class UniversityAssembler {
  static logoApiService: LogoApiService;
  static withLogoApiService(logoApiService: LogoApiService) {
    this.logoApiService = logoApiService;
    return this;
  }

  static toEntitiesFromResponse(response: UniversitiesResponse): University[] {
    return response.universities.map(university => this.toEntityFromResource(university))
  }

  static toEntityFromResource(university: UniversityResource): University {
    return {
      universityName: university.name,
      countryName: university.country,
      countryCode: university.alpha_two_code,
      domain: university.domains[0],
      domainLogo: this.logoApiService.getUrlToLogo(university),
      websiteUrl: university.web_pages[0],
    }
  }

}
