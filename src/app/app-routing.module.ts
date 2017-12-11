import { NgModule } from '@angular/core';   
import { Routes, RouterModule    } from '@angular/router';
import {PeopleListComponent } from './people-list/people-list.component';
import { PersonDetailsComponent } from './person-details/person-details.component'
import { TodoComponent } from './todo/todo.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const routes: Routes = [

    {
        path:'persons',
        component:PeopleListComponent
    },
    {
        path:'persons/:id',
        component:PersonDetailsComponent
    },
    {
        path:'tasks',
        component:TodoComponent
        
    },
    {
        path:'',
        redirectTo:'/persons',
        pathMatch:'full'
    }
];

// HERE: New module
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }