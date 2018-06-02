import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input,
	OnChanges, Output, Renderer2, SimpleChange } from '@angular/core';

import { detect } from 'detect-browser';

/* tslint:disable no-var-keyword */
var dragarrStyleAdded = false;
/* tslint:enable no-var-keyword */

const dragarrStyle = `
.dragarr-over {
	outline: 3px dashed #ff9e1b;
}
.dragarr-drag {
	opacity: 0.6;
}`;

@Directive({
	/* tslint:disable directive-selector */
	selector: '[dragarr]'
	/* tslint:enable directive-selector */
})
export class DragarrDirective implements OnChanges {
	@Input() dragarr: [ string, number, Array<any> ];
	@Input() dragClass = 'dragarr-drag';
	@Input() dragOverClass = 'dragarr-over';
	@Input() draggable;
	@HostBinding('draggable') canDrag = (this.draggable === undefined || this.draggable === true) ? true : false;
	@Output() dropped = new EventEmitter<any[]>();

	private isIE = false;

	constructor(private el: ElementRef,	private renderer: Renderer2) {
		this.addStyle();

		const browser = detect();
		if (browser.name === 'ie') {
			this.isIE = true;
		}
	}

	ngOnChanges(changeRecord: {[key: string]: SimpleChange}) {
		if (changeRecord['draggable']) {
			if (typeof this.draggable === 'string') {
				this.canDrag = this.draggable === 'true' ? true : false;
			} else {
				this.canDrag = this.draggable;
			}
		}
	}

	@HostListener('dragstart', ['$event'])
	dragStart(event: DragEvent) {
		if (this.canDrag) {
			event.dataTransfer.setData(this.isIE ? 'text' : this.dragarr[0], this.dragarr[1].toString());
			this.renderer.addClass(this.el.nativeElement, this.dragClass);
		}
	}

	@HostListener('dragenter', ['$event'])
	@HostListener('dragover', ['$event'])
	dragEnterOver(event: DragEvent) {
		if (this.matchDrag(event)) {
			event.preventDefault();
			this.renderer.addClass(this.el.nativeElement, this.dragOverClass);
		}
	}

	@HostListener('dragleave')
	dragLeave() {
		this.renderer.removeClass(this.el.nativeElement, this.dragOverClass);
	}

	@HostListener('dragend')
	dragEnd() {
		this.renderer.removeClass(this.el.nativeElement, this.dragClass);
	}

	@HostListener('drop', ['$event'])
	drop(event: DragEvent) {
		if (this.matchDrag(event)) {
			const dragIdx = +event.dataTransfer.getData(this.isIE ? 'text' : this.dragarr[0]);
			const dropIdx = this.dragarr[1];
			const arr = this.dragarr[2];
			if (dropIdx !== dragIdx) {
				arr.splice(dropIdx, 0, arr.splice(dragIdx, 1));
				this.dropped.emit(arr);
			}
			this.renderer.removeClass(this.el.nativeElement, this.dragOverClass);
		}
	}

	protected matchDrag(event: DragEvent): boolean {
		return this.isIE || (event.dataTransfer.types.length && (event.dataTransfer.types[0] === this.dragarr[0]));
	}

	protected addStyle() {
		if (!dragarrStyleAdded) {
			const style = document.createElement('STYLE');
			style.innerHTML = dragarrStyle;
			this.renderer.appendChild(document.head, style);
			dragarrStyleAdded = true;
		}
	}
}
