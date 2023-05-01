import { Injectable } from '@angular/core';
import { Climb } from './climb';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ClimbDataService {
  constructor(private http: HttpClient) {}

  // url to web api
  private climbUrl = 'http://localhost:3001/api/climbs/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  //error handling
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  //get climbs
  getClimbs(): Observable<Climb[]> {
    return this.http.get<Climb[]>(this.climbUrl).pipe(
      tap((_) => console.log('fetched climbs')),
      catchError(this.handleError<Climb[]>('get climbs', []))
    );
  }

  //get single climb by id
  getClimb(id: number): Observable<Climb> {
    const url = `${this.climbUrl}/${id}`;
    return this.http.get<Climb>(url).pipe(
      tap((_) => console.log(`fetched climb id = ${id}`)),
      catchError(this.handleError<Climb>('get climbs'))
    );
  }

  //add climb

  addClimb(climb: Climb): Observable<Climb> {
    return this.http.post<Climb>(this.climbUrl, climb, this.httpOptions).pipe(
      tap((newClimb: Climb) =>
        console.log(`added climb with id = ${newClimb.id}`)
      ),
      catchError(this.handleError<Climb>('add climb'))
    );
  }

  //update climb
  updateClimb(climb: Climb): Observable<any> {
    return this.http.put(this.climbUrl, climb, this.httpOptions).pipe(
      tap((_) => console.log(`updated climb id = ${climb.id}`)),
      catchError(this.handleError<any>('updated climb'))
    );
  }

  //delete climb
  deleteClimb(id: number): Observable<Climb> {
    const url = `${this.climbUrl}/${id}`;
    return this.http
      .delete<Climb>(url, this.httpOptions)
      .pipe(tap((_) => console.log(`deleted climb id = ${id}`)));
  }

  //search climbs
  searchClimbs(term: string): Observable<Climb[]> {
    //if not term return empty array
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Climb[]>(`${this.climbUrl}/?name=${term}`).pipe(
      tap((x) =>
        x.length
          ? console.log(`found climbs matching "${term}"`)
          : console.log(`found no climbs matching "${term}"`)
      ),
      catchError(this.handleError<Climb[]>('searchclimbs', []))
    );
  }
}
