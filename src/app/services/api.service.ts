import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Show} from '../model/show';
import {ShowDTO} from '../model/show-dto';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = "https://api.tvmaze.com";

  constructor(private httpClient: HttpClient) { }

  getDetailShow(title: string): Observable<Show>{
    const apiUrl = `${this.baseUrl}/singlesearch/shows?q=${title}`;
    let show: Show = new Show(0, title);
    return this.httpClient.get<ShowDTO>(apiUrl).pipe(
      map((s) => {
        show.summary = s.summary;
        show.image = s.image?.medium;
        return show;
      })
    );
  }
}
