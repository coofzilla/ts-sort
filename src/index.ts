//establish src and build folders
//tsc --init
//config rootdir/outdir
//run tsc -w
//config concurrently script in package.json
import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

// const numbersCollection = new NumbersCollection([120, 31, -32, 0,]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Xaayb');
const sorter = new Sorter(charactersCollection);

sorter.sort();
console.log(charactersCollection.data);
