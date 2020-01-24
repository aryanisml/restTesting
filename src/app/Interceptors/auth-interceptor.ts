import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headers = req.headers
            .set('Content-Type', 'application/json')
            .set('tenantID', 'tenant1')
            .set('Authorization', `Basic ` + btoa('skamble' + ':' + 'nine29@swap'));
        // btoa({});
        const authReq = req.clone({ headers });
        return next.handle(authReq);
    }
}

