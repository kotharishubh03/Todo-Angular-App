import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './myComponent/about/about.component';
import { TodosComponent } from './myComponent/todos/todos.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'About', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
