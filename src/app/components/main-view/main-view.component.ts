import { Component } from '@angular/core';
import {ShowListComponent} from '../show-list/show-list.component';
import {DataService} from '../../services/data.service';
import {Show} from '../../model/show';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [
    ShowListComponent
  ],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css'
})
export class MainViewComponent {
  constructor(private dataService: DataService){
  }

  get shows(): Show[]{
    return this.dataService.shows;
  }

}
