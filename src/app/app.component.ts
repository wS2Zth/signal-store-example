import { Component, inject } from '@angular/core';
import { TodosStore } from './app.store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  todosStore = inject(TodosStore);

  ngOnInit(): void {
    this.todosStore.getTodosObservable();
  }
}
