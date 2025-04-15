import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablesComponent } from './tables/tables.component';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TablesComponent, NavComponent],
  templateUrl: './app.component.html', 
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
}

