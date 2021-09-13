import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Siniestro } from '../shared/siniestro';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { map, catchError } from 'rxjs/operators';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SiniestroService {
  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService
  ) {}

  getSiniestros(): Observable<Siniestro[]> {
    return this.http
      .get<Siniestro[]>(baseURL + 'siniestros')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
  getSiniestro(id: number): Observable<Siniestro> {
    return this.http.get<Siniestro>(baseURL + 'siniestros/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
  putSiniestro(siniestro: Siniestro): Observable<Siniestro> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put<Siniestro>(baseURL + 'siniestros/' + siniestro.id, siniestro, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));

  }
  
  DeleteSiniestro(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.delete(baseURL + 'siniestros/' + id, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

}
