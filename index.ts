import { startWith, endWith, of } from 'rxjs';

// endwith

const source = of(1, 2, 3);
const example = source.pipe(endWith(4));
const subscribe = example.subscribe((val) => console.log(val));

// startwith

const source$ = of('Can', 'Tuba', 'Osman');
source$.pipe(startWith('Ilayda')).subscribe((val) => console.log(val));
