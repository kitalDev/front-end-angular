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

import { RecetteDto } from '../models/recette-dto';

@Injectable({
  providedIn: 'root',
})
export class RecetteService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation findAll3
   */
  static readonly FindAll3Path = '/api/recettes/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll3()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll3$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<RecetteDto>>> {

    const rb = new RequestBuilder(this.rootUrl, RecetteService.FindAll3Path, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<RecetteDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll3(params?: {
  },
  context?: HttpContext

): Observable<Array<RecetteDto>> {

    return this.findAll3$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<RecetteDto>>) => r.body as Array<RecetteDto>)
    );
  }

  /**
   * Path part for operation update3
   */
  static readonly Update3Path = '/api/recettes/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `update3()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update3$Response(params: {
    body: RecetteDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, RecetteService.Update3Path, 'put');
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
   * To access the full response (for headers, for example), `update3$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update3(params: {
    body: RecetteDto
  },
  context?: HttpContext

): Observable<string> {

    return this.update3$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation save3
   */
  static readonly Save3Path = '/api/recettes/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save3()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save3$Response(params: {
    body: RecetteDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, RecetteService.Save3Path, 'post');
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
   * To access the full response (for headers, for example), `save3$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save3(params: {
    body: RecetteDto
  },
  context?: HttpContext

): Observable<string> {

    return this.save3$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation findById3
   */
  static readonly FindById3Path = '/api/recettes/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById3()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById3$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<RecetteDto>> {

    const rb = new RequestBuilder(this.rootUrl, RecetteService.FindById3Path, 'get');
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
        return r as StrictHttpResponse<RecetteDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById3(params: {
    id: string;
  },
  context?: HttpContext

): Observable<RecetteDto> {

    return this.findById3$Response(params,context).pipe(
      map((r: StrictHttpResponse<RecetteDto>) => r.body as RecetteDto)
    );
  }

  /**
   * Path part for operation deleteById3
   */
  static readonly DeleteById3Path = '/api/recettes/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteById3()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteById3$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, RecetteService.DeleteById3Path, 'delete');
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
   * To access the full response (for headers, for example), `deleteById3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteById3(params: {
    id: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteById3$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation findAllByUtilisateurId
   */
  static readonly FindAllByUtilisateurIdPath = '/api/recettes/utilisateur/{utilisateur-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllByUtilisateurId()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllByUtilisateurId$Response(params: {
    'utilisateur-id': string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<RecetteDto>>> {

    const rb = new RequestBuilder(this.rootUrl, RecetteService.FindAllByUtilisateurIdPath, 'get');
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
        return r as StrictHttpResponse<Array<RecetteDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllByUtilisateurId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllByUtilisateurId(params: {
    'utilisateur-id': string;
  },
  context?: HttpContext

): Observable<Array<RecetteDto>> {

    return this.findAllByUtilisateurId$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<RecetteDto>>) => r.body as Array<RecetteDto>)
    );
  }

}
