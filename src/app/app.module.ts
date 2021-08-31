import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailedListComponent } from './detailed-list/detailed-list.component';
import { TiledListComponent } from './tiled-list/tiled-list.component';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MenuModule, MenuNavigationModule } from '@ux-aspects/ux-aspects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [AppComponent, DetailedListComponent, TiledListComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        // BsDropdownModule.forRoot(),
        MenuNavigationModule,
        MenuModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
