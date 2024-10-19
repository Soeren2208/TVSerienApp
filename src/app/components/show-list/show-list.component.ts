import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Show} from '../../model/show';
import {DataService} from '../../services/data.service';
import {FormsModule} from '@angular/forms';
import { Observable } from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-show-list',
  standalone: true,
  imports: [
    FormsModule,
    AsyncPipe
  ],
  templateUrl: './show-list.component.html',
  styleUrl: './show-list.component.css'
})
export class ShowListComponent {
  @Input() shows$: Observable<Show[]>;
  @Output() selectedShow = new EventEmitter<Show>();
  editShow: Show = null;

  constructor(private service: DataService){}

  edit(show: Show){
    this.editShow = show;
  }

  isToEdit(show: Show): boolean {
    if (!this.editShow) {
      return false;
    } else if (this.editShow !== show) {
      return false;
    } else {
      return true;
    }
  }

  saveEdit(){
    this.service.updateShow(this.editShow);
    this.editShow = null;
  }

  delete(show: Show){
    this.service.deleteShow(show);
  }

  showDetails(show: Show){
    this.selectedShow.emit(show);
  }
}
