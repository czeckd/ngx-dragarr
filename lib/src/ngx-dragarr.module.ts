import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragarrDirective } from './dragarr.directive';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		DragarrDirective
	],
	exports: [
		DragarrDirective
	]
})
export class NgxDragarrModule { }
