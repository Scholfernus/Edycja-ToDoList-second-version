import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list.components';
import { FavoritesTodoComponent } from './favorites-todo/favorites-todo.component';


const routes: Routes = [{ path: 'home', component: ListComponent },{ path: '', redirectTo: '/home', pathMatch: 'full' },{path: 'favorites',component: FavoritesTodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
