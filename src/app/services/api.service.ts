import { Injectable } from '@angular/core';
import {catchError, map, Observable, of, throwError} from 'rxjs';
import {Show} from '../model/show';
import {ShowDTO} from '../model/show-dto';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = "https://api.tvmaze.com";

  constructor(private httpClient: HttpClient) { }

  getDetailShow(title: string): Observable<Show>{
    const apiUrl = `${this.baseUrl}/singlesearch/shows?q=${title}`;
    let show: Show = new Show(null, 0, title);
    let errorMessage: string;
    return this.httpClient.get<ShowDTO>(apiUrl).pipe(
      catchError(err => {
        if(err.status == 404) {
          errorMessage = "Eine Serie mit diesem Titel konnte nicht gefunden werden.";
        }
        else{
          errorMessage= err.message();
        }
        return throwError(() => new Error(errorMessage));
      }),
      map((s) => {
        show.summary = s.summary;
        show.image = s.image?.medium;
        return show;
      })
    );
  }
}
