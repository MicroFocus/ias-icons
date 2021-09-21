import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailedListComponent } from './detailed-list/detailed-list.component';
import { TiledListComponent } from './tiled-list/tiled-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    AccessibilityModule,
    MenuModule,
    MenuNavigationModule,
    NotificationModule,
    ColorServiceModule,
    colorSets,
} from '@ux-aspects/ux-aspects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HighlightService } from './app.utils';

@NgModule({
    declarations: [AppComponent, DetailedListComponent, TiledListComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        MenuNavigationModule,
        MenuModule,
        NotificationModule,
        // Included to make ux-aspects happy
        ColorServiceModule.forRoot(colorSets.microFocus),
        AccessibilityModule,
        BrowserAnimationsModule,
        ModalModule.forRoot(),
    ],
    providers: [HighlightService],
    bootstrap: [AppComponent],
})
export class AppModule {}
