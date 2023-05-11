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

import { TypeRecetteDto } from '../models/type-recette-dto';

@Injectable({
  providedIn: 'root',
})
export class TyperecetteService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation findAll2
   */
  static readonly FindAll2Path = '/api/type-recettes/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll2$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<TypeRecetteDto>>> {

    const rb = new RequestBuilder(this.rootUrl, TyperecetteService.FindAll2Path, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TypeRecetteDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll2(params?: {
  },
  context?: HttpContext

): Observable<Array<TypeRecetteDto>> {

    return this.findAll2$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<TypeRecetteDto>>) => r.body as Array<TypeRecetteDto>)
    );
  }

  /**
   * Path part for operation update2
   */
  static readonly Update2Path = '/api/type-recettes/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `update2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update2$Response(params: {
    body: TypeRecetteDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, TyperecetteService.Update2Path, 'put');
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
   * To access the full response (for headers, for example), `update2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update2(params: {
    body: TypeRecetteDto
  },
  context?: HttpContext

): Observable<string> {

    return this.update2$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation save2
   */
  static readonly Save2Path = '/api/type-recettes/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save2$Response(params: {
    body: TypeRecetteDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, TyperecetteService.Save2Path, 'post');
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
   * To access the full response (for headers, for example), `save2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save2(params: {
    body: TypeRecetteDto
  },
  context?: HttpContext

): Observable<string> {

    return this.save2$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation findById2
   */
  static readonly FindById2Path = '/api/type-recettes/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById2$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TypeRecetteDto>> {

    const rb = new RequestBuilder(this.rootUrl, TyperecetteService.FindById2Path, 'get');
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
        return r as StrictHttpResponse<TypeRecetteDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById2(params: {
    id: string;
  },
  context?: HttpContext

): Observable<TypeRecetteDto> {

    return this.findById2$Response(params,context).pipe(
      map((r: StrictHttpResponse<TypeRecetteDto>) => r.body as TypeRecetteDto)
    );
  }

  /**
   * Path part for operation deleteById2
   */
  static readonly DeleteById2Path = '/api/type-recettes/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteById2()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteById2$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TyperecetteService.DeleteById2Path, 'delete');
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
   * To access the full response (for headers, for example), `deleteById2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteById2(params: {
    id: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteById2$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
