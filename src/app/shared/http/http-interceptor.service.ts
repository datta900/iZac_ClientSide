import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {tap} from 'rxjs/operators';
import {HttpLoaderService} from './http-loader.service';


@Injectable()
export class CoreHttpInterceptor implements HttpInterceptor {

  constructor(private httpLoaderService: HttpLoaderService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.onStart(req.url);
    req = req.clone();
    return next.handle(req).pipe(
    tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        this.onEnd(event.url);
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse && err.statusText === 'Unknown Error') {
        // this.showErrorMessage('Check internet connection');
      }
      this.onEnd(req.url);
      throwError(err);
    }));

  }

  showErrorMessage(error?) {
    alert(error || 'Server error');
    console.log(error);
  }

  private onStart(url: string) {
    console.log('[ ' + (new Date()).toLocaleString('it-IT') + '] Request at: ' + url);
    this.httpLoaderService.onRequestStart();
  }

  private onEnd(url: string): void {
    console.log('[ ' + (new Date()).toLocaleString('it-IT') + '] Response from: ' + url);
    this.httpLoaderService.onRequestEnd();
  }

}
