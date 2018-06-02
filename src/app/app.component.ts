import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	dwarves = [ 'Dwalin', 'Balin', 'Kili', 'Fili', 'Dori', 'Nori', 'Ori', 'Oin', 'Gloin', 'Bifur', 'Bofur', 'Bombur', 'Thorin' ];
	dwarfs = [  'Doc', 'Grumpy', 'Happy', 'Sleepy', 'Bashful', 'Sneezy', 'Dopey' ];

	canDrag = false;

	onDrop(arr: Array<any>) {
		console.log(arr);
	}

}
