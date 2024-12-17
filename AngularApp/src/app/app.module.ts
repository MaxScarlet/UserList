import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './Components/home/home.component';
import { ListComponent } from './Components/list/list.component';
import { AboutComponent } from './Components/about/about.component';
import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { UserService } from './Services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './Components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './Components/details/details.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './Services/in-memory-data.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ListComponent,
        AboutComponent,
        NavComponent,
        FormComponent,
        DetailsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        // InMem: Comment if using external mock API endpoint (see source code "/Server" folder)
        // InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    providers: [
        UserService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
