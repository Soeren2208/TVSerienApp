import {Component, Input} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {Show} from '../../model/show';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-show-detail',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './show-detail.component.html',
  styleUrl: './show-detail.component.css'
})
export class ShowDetailsComponent {
  @Input() detailShow$: BehaviorSubject<Show>;
  @Input() errorMessage$: Subject<string> = new Subject<string>();
}
