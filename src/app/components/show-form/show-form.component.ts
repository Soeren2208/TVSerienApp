import { Component } from '@angular/core';
import { FormsModule, NgForm} from '@angular/forms';
import {Show} from '../../model/show';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-show-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './show-form.component.html',
  styleUrl: './show-form.component.css'
})
export class ShowFormComponent {
  show: Show;
  constructor(private dataService: DataService){
    this.show = new Show(null, null);
  }

  public save(): void{
    this.dataService.saveShow(this.show);
    this.show = new Show(null, null);
  }

}
