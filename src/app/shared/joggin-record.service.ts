import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { log } from 'util';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class JogginRecordService {

  public API = 'https://localhost:44387/api';
  public JOGGING_RECORDS_ENDPOINT = `${this.API}/JoggingRecords`;
  public JOGGING_RECORDS_CREATE = `${this.API}/JoggingRecords/create`;

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.JOGGING_RECORDS_ENDPOINT);
  }

  //pipe catchError in case of error
  public createRecord(record: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(this.JOGGING_RECORDS_CREATE, record, httpOptions).subscribe(data => {
        console.log(data);
      })
    })
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.log(errMsg);
    return Observable.throw(errMsg);
  }
}
