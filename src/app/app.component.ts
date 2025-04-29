import { Component, inject } from '@angular/core';
import {UniversityListComponent} from './universities/components/university-list/university-list.component';
import {FooterComponent} from './public/components/footer/footer.component';
import {ToolbarComponent} from './public/components/toolbar/toolbar.component';
import {University} from './universities/model/university.entity';
import {HipoLabsApiService} from './universities/services/hipo-labs-api.service';
import {LogoApiService} from './shared/services/logo-api.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    UniversityListComponent,
    FooterComponent,
    ToolbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  universities: University[] = []
  title = 'university-finder';

  private hipoLabsApi = inject(HipoLabsApiService);
  private logoApi = inject(LogoApiService);

  ngOnInit(){
    this.hipoLabsApi.getUniversities().subscribe(universities => {
      this.universities = universities;
      this.universities.forEach(university => university.domainLogo = this.logoApi.getUrlToLogo(university));
      console.log(this.universities);
    });
  }
}
