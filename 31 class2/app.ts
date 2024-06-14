class Dog {
   name:string;
   constructor(name:string){
    this.name=name;
   }
      woof() {
console.log("woof woof ")
}
}

let d1 = new Dog ("tommy")
console.log(d1)

d1.woof()