import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {LanguageSwitcherComponent} from '../language-switcher/language-switcher.component';

@Component({
  selector: 'app-toolbar',
  imports: [
    MatToolbarModule,
    LanguageSwitcherComponent
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

}
