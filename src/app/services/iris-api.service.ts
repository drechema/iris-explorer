import { Injectable, Inject } from '@angular/core';

import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Api } from '../objects/api.object';

@Injectable()
export class IrisApiService {
    private url: string;
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options: RequestOptions;

    constructor(private http: Http) {
        this.url = 'http://localhost:52773/api/mgmnt';
    }

    // Set the Request Headers
    public setHeaders(username: string, password: string) {
        const authString = btoa(username + ':' + password);
        this.options = new RequestOptions({
            headers: new Headers({
                'Authorization': 'Basic ' + authString
            })
        });
        this.options.headers.append('Content-Type', 'application/json');
    }

    // Retrive Apps
    // GET /v2/
    public getAll(): Promise<Api[]> {
        return this.http.get(this.url + '/v2/', this.options)
            .toPromise()
            .then(response => response.json() as Api[]);
    }

    // Create App
    // POST /:namespace/:applicationName
    public create(namespace: string, appName: string, swaggerSpec: any): Promise<any> {
        return this.http.post(this.url + '/v2/' + namespace + '/' + appName,
                              swaggerSpec, this.options)
            .toPromise().then(response => response.json());
    }

    // Retrive App Swagger Specification
    // GET /:namespace/:applicationName
    public getSpecification(namespace: string, appName: string): Promise<any> {
        return this.http.get(this.url + '/v2/' + namespace + '/' + appName, this.options)
            .toPromise().then(response => response.json());
    }

    // Delete App
    // DELETE /:namespace/:applicationName
    public delete(namespace: string, appName: string): Promise<any> {
        return this.http.delete(this.url + '/v2/' + namespace + '/' + appName, this.options)
            .toPromise().then(response => response.json());
    }
}
