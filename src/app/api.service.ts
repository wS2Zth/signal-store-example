import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './app.types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  #apiUrl = 'https://jsonplaceholder.typicode.com';
  #httpClient = inject(HttpClient);

  fetchData(): Observable<Todo[]> {
    return this.#httpClient.get<Todo[]>(this.#apiUrl + '/todos');
  }
}
