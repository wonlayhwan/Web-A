import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import {OrderCompleteness} from './orderCompleteness';

import { HttpErrorHandlerService, HandleError } from '../http-error-handler.service';
import {httpOption, webApiAddress} from '../http-share-variables';

@Injectable({
  providedIn: 'root'
})
export class OrderCompletenessService {
    private handleError: HandleError;

    constructor(private http: HttpClient,
                httpErrorHandler: HttpErrorHandlerService) {
        this.handleError = httpErrorHandler.createHandleError('OrderCompletenessService');
    }

    /** 获取齐套情况 from the server */
    getOrderCompleteness (): Observable<OrderCompleteness[]> {
        return this.http.get<OrderCompleteness[]>(`${webApiAddress.completeness}/api/CompletenessResults/Completeness`)
        .pipe(
            // retry(3), // need to clear how
            catchError(this.handleError('getOrderCompleteness', []))
        )
        ;
    }
}
