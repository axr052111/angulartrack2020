// Boolean
let boolTest: boolean = false;
boolTest = true;

// Number
let numberTest: number = 500000000000000000000000000000000000000000000000000000000000000000000000000000000000;
numberTest = 3;

// String
let stringTest: string = "WEOEWOEWEW";
stringTest = 'weewlewewew';

// Array
let numbarray:number[]=[3, 5];
numbarray.push(8);
let numbarray2 : number[] = [1, 2];
let combined = numbarray.concat(numbarray2);
combined.forEach(v => {
  console.log(v);
});

// Tuple
let tupleTest: [string, number] = ["test", 5]

// Enum
enum Cartoons {
  PinkPanther,
  TomJerry,
  RoadRunner
}
const useenum: Cartoons = Cartoons.TomJerry;

// Any
let dumpAnything: any = 3;
dumpAnything = "weewew";
dumpAnything = [3, 4, 4];

// Void
let voidTest: void = null;
voidTest = undefined;

// remark: strict comparison ===

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Never
// Object
// Type assertions
// A note about ‘let’

// Variable declarations
const testConstant: string = "wouter"; // immutable
let testLet: string = "test"; // mutable
let test = 3;
test = 8;
// test = "weewew"; //DOES NOT COMPILE
testLet = "weewew";

// Type declarations
type owntype = boolean | 3 | "test";
let ownTest: owntype = 3;
