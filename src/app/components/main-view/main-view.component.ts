import { Component } from '@angular/core';
import {ShowListComponent} from '../show-list/show-list.component';
import {DataService} from '../../services/data.service';
import {Show} from '../../model/show';
import {ShowFormComponent} from '../show-form/show-form.component';
import {ApiService} from '../../services/api.service';
import {BehaviorSubject} from 'rxjs';
import {ShowDetailsComponent} from '../show-detail/show-detail.component';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [
    ShowListComponent,
    ShowFormComponent,
    ShowDetailsComponent
  ],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css'
})
export class MainViewComponent {
  selectedShow$: BehaviorSubject<Show>;
  isShowSelected = false;

  get shows(): Show[]{
    return this.dataService.shows;
  }

  constructor(private dataService: DataService, private apiService: ApiService){
    this.selectedShow$ = new BehaviorSubject<Show>(null);
  }

  onSelectedShow(show: Show){
    this.apiService.getDetailShow(show.title).subscribe((s) =>{
      this.selectedShow$.next(s);
    });
    this.isShowSelected = true;
    console.log(this.selectedShow$);
  }
}
