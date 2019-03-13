interface Customer{
    name:string;
    age:number;
}

function show(customer:Customer){
    console.log("Name: "+customer.name+" age:"+customer.age);
}

//Any Object who has properties defined in an interface
//can be assigned to interface variable
let obj = {name:"Mahendra", age:35,city:"Mumbai"};

show(obj);
