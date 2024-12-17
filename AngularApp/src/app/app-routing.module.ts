import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ListComponent } from './Components/list/list.component';
import { FormComponent } from './Components/form/form.component';
import { DetailsComponent } from './Components/details/details.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'users', component: ListComponent },
    { path: 'users/new', component: FormComponent },
    { path: 'users/edit/:id', component: FormComponent },
    { path: 'users/:id', component: DetailsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],

})
export class AppRoutingModule { }
