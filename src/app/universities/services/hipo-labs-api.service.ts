import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {UniversityAssembler} from './university.assembler';
import {University} from '../model/university.entity';
import {UniversitiesResponse} from './university.response';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {LogoApiService} from '../../shared/services/logo-api.service';

@Injectable({
  providedIn: 'root'
})
export class HipoLabsApiService {
  private baseUrl = environment.hipoLabsProviderApiBaseUrl
  private universitiesEndpoint = environment.hipoLabsProviderUniversitiesEndpointPath
  constructor(private http: HttpClient, private logoApiService: LogoApiService) { }

  getUniversities(): Observable<University[]> {
    return this.http.get<UniversitiesResponse> (`${this.baseUrl}${this.universitiesEndpoint}`).
    pipe(
      map(response => UniversityAssembler.withLogoApiService(this.logoApiService).toEntitiesFromResponse(response))
    )
  }

}
