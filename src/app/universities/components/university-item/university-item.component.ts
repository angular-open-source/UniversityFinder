import {Component, Input} from '@angular/core';
import { University } from '../../model/university.entity';
import { MatCardModule } from '@angular/material/card';
import { MatCardTitle } from '@angular/material/card';
import { MatCardContent } from '@angular/material/card';
import { MatCardImage } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-university-item',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatCardTitle,
    MatCardImage,
    MatCardContent,
    TranslatePipe,
  ],
  templateUrl: './university-item.component.html',
  styleUrl: './university-item.component.css'
})
export class UniversityItemComponent {
  @Input() university !: University

  constructor() { }






}

