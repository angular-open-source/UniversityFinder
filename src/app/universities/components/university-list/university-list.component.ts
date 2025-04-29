import { Component, Input } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {University} from '../../model/university.entity';
import {UniversityItemComponent} from '../university-item/university-item.component';

@Component({
  selector: 'app-university-list',
  imports: [
    MatListModule,
    UniversityItemComponent
  ],
  templateUrl: './university-list.component.html',
  styleUrl: './university-list.component.css'
})
export class UniversityListComponent {
  @Input() universities: Array<University> = [];
}
