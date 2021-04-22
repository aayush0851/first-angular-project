import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';


import {HeaderComponent} from './header/header.component';
import { TodoComponent } from './todo/todo.component';
import { TestComponent } from './test/test.component';
import { DetailsComponent } from './details/details.component';
import { TreeComponent } from "./tree/tree.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { AuthGuardService } from "./auth-guard.service";

const appRoutes: Routes = [
    { path: '', component: HeaderComponent },
    { path: 'todo', component: TodoComponent },
    { path: 'tree',component: TreeComponent },
    { path: 'tree/details/:todo_id', component: DetailsComponent},
    { path: 'test', component: TestComponent},
    // { path: 'not-found', component: NotFoundComponent},
    // { path: '**', redirectTo: 'not-found'}
  ]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}