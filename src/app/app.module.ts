import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgxDragarrModule } from '@czeckd/ngx-dragarr';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		NgxDragarrModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
