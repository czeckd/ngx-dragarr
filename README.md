[![npm version](https://badge.fury.io/js/%40czeckd%2Fngx-dragarr.svg)](https://badge.fury.io/js/%40czeckd%2Fngx-dragarr)

NgxDragarr
=========
**NgxDragarr** is an Angular 6 directive that provides a means to re-order an array using drag-and-drop.

## How to use?
```
$ npm i --save @czeckd/ngx-dragarr
```
In addition to the normal Angular packages, NgxDragarr also has a peer dependency on [detect-browser](https://www.npmjs.com/package/detect-browser) to detect IE. Depending on the version 
of detect-browser, the package [os](https://www.npmjs.com/package/os) may also be needed as a dev-dependency.

## Integration
The `[dragarr]` directive should work as-is with webpack/angular-cli. Just import the
``NgxDragarrModule``.
```typescript
import { NgxDragarrModule } from '@czeckd/ngx-dragarr';

@NgModule({
  imports: [ NgxDragarrModule ],
  ...
})
export class AppModule {}
```
## Usage
```html
<ul>
  <li *ngFor="let d of dwarves; let i = index" [dragarr]="['dwarves', i, dwarves]">{{d}}</li>
</ul>
```
The `[dragarr]` directive will set the `draggable` attribute if it is not already set. If `draggable` is set, then it will respect its state allow for drag-and-drop to be enabled and 
disabled programmatically.  For example:
```html
<ul>
  <li *ngFor="let d of dwarfs; let i = index" [dragarr]="['dwarfs', i, dwarfs]"
    [draggable]="canDrag">{{d}}</li>
</ul>
```
When a dragged item is dropped, a `(dropped)` event is emitted by the directive that can then be used for other purposes. For example:
```html
<ul>
 <li *ngFor="let d of dwarves; let i = index" [dragarr]="['dwarves', i, dwarves]"
  (dropped)="onDrop($event)">{{d}}</li>
</ul>
```
### Argument for [dragarr]
The `[dragarr]` directive is set by an array of three arguments:
1. a *string* - a unique name of this array. This is used by the directive to determine a valid drop target. (Note: this functionality works on non-IE browsers.)
1. a *number* - this is the index of the item in the array.
2. the *array* - this is the actual array that is reorderable.

In the examples above, there are two arrays configured in the typescript.
```typescript
dwarves = [ 'Dwalin', 'Balin', 'Kili', 'Fili', 'Dori', 'Nori', 'Ori', 'Oin',
  'Gloin', 'Bifur', 'Bofur', 'Bombur', 'Thorin' ];
dwarfs = [  'Doc', 'Grumpy', 'Happy', 'Sleepy', 'Bashful', 'Sneezy', 'Dopey' ];
```
Using the name string, the NgxDragarr directive will prevent the dwarves array from interacting with the dwarfs array and vice-versa. (Note: this functionality will not work in 
IE-browsers.)
### Styling
The directive will add two styles to the DOM: `.dragarr-over` and `.dragarr-drag`. Optionally, `dragClass` and `dragOverClass` can be set to provide substitutions.
```html
<ul>
  <li *ngFor="let d of dwarfs; let i = index" [dragarr]="['dwarfs', i, dwarfs]" [draggable]="canDrag"
    dragClass="customDrag" dragOverClass="customDragOver">{{d}}</li>
</ul>
```
## Background
NgxDragarr was inspired by [ng-drag-drop-list](https://github.com/yairtawil/ng-drag-drop-list).

## License
MIT
## Author
David Czeck [@czeckd](https://github.com/czeckd)
