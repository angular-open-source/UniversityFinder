import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {UniversityAssembler} from './university.assembler';
import {University} from '../model/university.entity';
import {UniversitiesResponse, UniversityResource} from './university.response';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {LogoApiService} from '../../shared/services/logo-api.service';

/**
 * HipoLabs API Service
 * @class HipoLabsApiService
 * @description
 * This class provides a service for the HipoLabs API.
 * It contains the following properties:
 * @property baseUrl: string - The base URL of the HipoLabs API.
 * @property universitiesEndpoint: string - The endpoint path for universities.
 * @property http: HttpClient - The HTTP client.
 * @property logoApiService: LogoApiService - The service for generating logo URLs.
 * @method getUniversities() - Retrieves a list of universities and maps them to university entities.
 * @summary This class is responsible for providing a service for the HipoLabs API.
 * @author Paul Sulca
 */
@Injectable({
  providedIn: 'root'
})
export class HipoLabsApiService {
  private baseUrl = environment.hipoLabsProviderApiBaseUrl
  private universitiesEndpoint = environment.hipoLabsProviderUniversitiesEndpointPath
  constructor(private http: HttpClient, private logoApiService: LogoApiService) { }

  /**
   * Retrieves a list of universities from the HipoLabs API and converts them into university entities.
   *
   * @summary Fetches university data from the API and maps it to the application's university entity format.
   * @author Paul Sulca
   *
   * @returns {Observable<University[]>} An observable containing the list of university entities.
   */

  getUniversities(): Observable<University[]> {
    //Se cambia a UniversityResponse
    return this.http.get<UniversityResource[]> (`${this.baseUrl}${this.universitiesEndpoint}`).
    pipe(
      map(response => UniversityAssembler.withLogoApiService(this.logoApiService).toEntitiesFromResponse(response))
    )
  }

}
