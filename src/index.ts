//establish src and build folders
//tsc --init
//config rootdir/outdir
//run tsc -w
//config concurrently script in package.json

//short version
class Sorter {
  constructor(public collection: number[] | string) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        //only if collection is array of numbers
        //typeguard to restore access of constructor
        if (this.collection instanceof Array) {
          
          if (this.collection[j] > this.collection[j + 1]) {
            const leftElement = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftElement;
          }
        }

        //only if collection string
        //typeguard restore access f/primitives, number, string, bool
        if(typeof this.collection=== 'string'){
          
        }
      }
    }
  }
}

const sorter = new Sorter([10, 5, 2, -2]);
sorter.sort();
console.log(sorter.collection);
//long version
// class Sorter {
//   collection: number[];
//   constructor(collection: number[]) {
//     this.collection = collection;
//   }
// }
