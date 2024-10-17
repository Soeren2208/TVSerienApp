import {Component, Input} from '@angular/core';
import {Show} from '../../model/show';

@Component({
  selector: 'app-show-list',
  standalone: true,
  imports: [],
  templateUrl: './show-list.component.html',
  styleUrl: './show-list.component.css'
})
export class ShowListComponent {
  @Input() shows: Show[] =[];

}
