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

import { AdherentDto } from '../models/adherent-dto';

@Injectable({
  providedIn: 'root',
})
export class AdherentService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation findAll5
   */
  static readonly FindAll5Path = '/api/adherents/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll5()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll5$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<AdherentDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AdherentService.FindAll5Path, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AdherentDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll5$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll5(params?: {
  },
  context?: HttpContext

): Observable<Array<AdherentDto>> {

    return this.findAll5$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<AdherentDto>>) => r.body as Array<AdherentDto>)
    );
  }

  /**
   * Path part for operation update5
   */
  static readonly Update5Path = '/api/adherents/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `update5()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update5$Response(params: {
    body: AdherentDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, AdherentService.Update5Path, 'put');
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
   * To access the full response (for headers, for example), `update5$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update5(params: {
    body: AdherentDto
  },
  context?: HttpContext

): Observable<string> {

    return this.update5$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation save5
   */
  static readonly Save5Path = '/api/adherents/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save5()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save5$Response(params: {
    body: AdherentDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, AdherentService.Save5Path, 'post');
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
   * To access the full response (for headers, for example), `save5$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save5(params: {
    body: AdherentDto
  },
  context?: HttpContext

): Observable<string> {

    return this.save5$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation findById5
   */
  static readonly FindById5Path = '/api/adherents/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById5()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById5$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AdherentDto>> {

    const rb = new RequestBuilder(this.rootUrl, AdherentService.FindById5Path, 'get');
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
        return r as StrictHttpResponse<AdherentDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById5$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById5(params: {
    id: string;
  },
  context?: HttpContext

): Observable<AdherentDto> {

    return this.findById5$Response(params,context).pipe(
      map((r: StrictHttpResponse<AdherentDto>) => r.body as AdherentDto)
    );
  }

  /**
   * Path part for operation deleteById5
   */
  static readonly DeleteById5Path = '/api/adherents/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteById5()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteById5$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AdherentService.DeleteById5Path, 'delete');
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
   * To access the full response (for headers, for example), `deleteById5$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteById5(params: {
    id: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteById5$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation findAllByUtilisateurId2
   */
  static readonly FindAllByUtilisateurId2Path = '/api/adherents/utilisateur/{utilisateur-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllByUtilisateurId2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllByUtilisateurId2$Response(params: {
    'utilisateur-id': string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<AdherentDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AdherentService.FindAllByUtilisateurId2Path, 'get');
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
        return r as StrictHttpResponse<Array<AdherentDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllByUtilisateurId2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllByUtilisateurId2(params: {
    'utilisateur-id': string;
  },
  context?: HttpContext

): Observable<Array<AdherentDto>> {

    return this.findAllByUtilisateurId2$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<AdherentDto>>) => r.body as Array<AdherentDto>)
    );
  }

}
