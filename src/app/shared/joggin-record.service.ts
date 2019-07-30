import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class JogginRecordService {

  public API = 'https://localhost:44387/api';
  public JOGGING_RECORDS_ENDPOINT = `${this.API}/JoggingRecords`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.JOGGING_RECORDS_ENDPOINT);
  }
}
