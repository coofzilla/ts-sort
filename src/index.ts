//establish src and build folders
//tsc --init
//config rootdir/outdir
//run tsc -w
//config concurrently script in package.json



const sorter = new Sorter([10, 5, 2, -2]);
sorter.sort();
console.log(sorter.collection);
