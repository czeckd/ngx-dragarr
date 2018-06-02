import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	dwarves = [ 'Dwalin', 'Balin', 'Kili', 'Fili', 'Dori', 'Nori', 'Ori', 'Oin', 'Gloin', 'Bifur', 'Bofur', 'Bombur', 'Thorin' ];
	dwarfs = [
		{ name: 'Doc' },
		{ name: 'Grumpy' },
		{ name: 'Happy' },
		{ name: 'Sleepy' },
		{ name: 'Bashful' },
		{ name: 'Sneezy' },
		{ name: 'Dopey' }
	];

	canDrag = false;

	onDrop(arr: Array<any>) {
		console.log(arr);
	}

}
