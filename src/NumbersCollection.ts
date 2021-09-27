import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter{
  constructor(public data: number[]) {
    //calling super runs constructor on parent class to make sure set up
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }
  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}

// export class NumbersCollection {
//   data: number[];
//   blah: string;

//   constructor(data: number[], blah: string) {
//     this.data = data;
//     this.blah = blah;
//   }
// }
