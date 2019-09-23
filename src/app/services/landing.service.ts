import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, retryWhen, delay, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor(private http: HttpClient) { }

    /**
   * url do endpoint para listar usuario no GITHUB
   */
  url = 'http://api.github.com';
  user = 'andredff';

  /**
   * Lista
   */
  getList(): Observable<any> {
    return this.http.get(`${this.url}/users/${this.user}`)
    .pipe(retryWhen(errors => errors.pipe(delay(3000), take(10))))
    .pipe(map((resposta: any) => resposta));
  }

  getRepos(): Observable<any> {
    return this.http.get(`${this.url}/users/${this.user}/repos`)
    .pipe(retryWhen(errors => errors.pipe(delay(3000), take(10))))
    .pipe(map((resposta: any) => resposta));
  }
}
