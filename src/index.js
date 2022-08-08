let name = {
  firstname: "meezan",
  lastName: "shaikh"
};

let printname = function (hometown, hobbies) {
  console.log(
    this.firstname + " " + this.lastName + "," + hometown + " " + hobbies
  );
};
let printMyname = printname.bind(name, "mumbai");
printMyname("study");

Function.prototype.mybind = function (...args) {
  let obj = this, //this is printNamemethod
    params = args.slice(1); //slice name object which is reference to this
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyname2 = printname.mybind(name, "mumbra");
printMyname2("plays");
