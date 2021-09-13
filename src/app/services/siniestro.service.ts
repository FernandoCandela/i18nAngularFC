import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
