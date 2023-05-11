/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CotisationDto } from '../models/cotisation-dto';

@Injectable({
  providedIn: 'root',
})
export class CotisationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation findAll4
   */
  static readonly FindAll4Path = '/api/cotisations/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll4()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll4$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<CotisationDto>>> {

    const rb = new RequestBuilder(this.rootUrl, CotisationService.FindAll4Path, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CotisationDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll4(params?: {
  },
  context?: HttpContext

): Observable<Array<CotisationDto>> {

    return this.findAll4$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<CotisationDto>>) => r.body as Array<CotisationDto>)
    );
  }

  /**
   * Path part for operation update4
   */
  static readonly Update4Path = '/api/cotisations/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `update4()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update4$Response(params: {
    body: CotisationDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, CotisationService.Update4Path, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `update4$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update4(params: {
    body: CotisationDto
  },
  context?: HttpContext

): Observable<string> {

    return this.update4$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation save4
   */
  static readonly Save4Path = '/api/cotisations/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save4()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save4$Response(params: {
    body: CotisationDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, CotisationService.Save4Path, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save4$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save4(params: {
    body: CotisationDto
  },
  context?: HttpContext

): Observable<string> {

    return this.save4$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation findById4
   */
  static readonly FindById4Path = '/api/cotisations/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById4()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById4$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CotisationDto>> {

    const rb = new RequestBuilder(this.rootUrl, CotisationService.FindById4Path, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CotisationDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById4(params: {
    id: string;
  },
  context?: HttpContext

): Observable<CotisationDto> {

    return this.findById4$Response(params,context).pipe(
      map((r: StrictHttpResponse<CotisationDto>) => r.body as CotisationDto)
    );
  }

  /**
   * Path part for operation deleteById4
   */
  static readonly DeleteById4Path = '/api/cotisations/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteById4()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteById4$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CotisationService.DeleteById4Path, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteById4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteById4(params: {
    id: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteById4$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation findAllByUtilisateurId1
   */
  static readonly FindAllByUtilisateurId1Path = '/api/cotisations/utilisateur/{utilisateur-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllByUtilisateurId1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllByUtilisateurId1$Response(params: {
    'utilisateur-id': string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<CotisationDto>>> {

    const rb = new RequestBuilder(this.rootUrl, CotisationService.FindAllByUtilisateurId1Path, 'get');
    if (params) {
      rb.path('utilisateur-id', params['utilisateur-id'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CotisationDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllByUtilisateurId1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllByUtilisateurId1(params: {
    'utilisateur-id': string;
  },
  context?: HttpContext

): Observable<Array<CotisationDto>> {

    return this.findAllByUtilisateurId1$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<CotisationDto>>) => r.body as Array<CotisationDto>)
    );
  }

}
