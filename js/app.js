//Variable types

//let var const

//Let and Var
// {
//     var name = "Penny";
//     let age = 22;
//     console.log(age);
//     console.log(name); 
// }
// //var is global so var can be called even outside the block 
// console.log(name);
// //let is not global so this shows an error because age is not defined
// console.log(age);


// //Const

// let age = 25;
// console.log(age);
// age = 30;
// console.log(age);

// const number = 1;
// console.log(number);

// //this gives an error because const can be assgined one time
// number = 2;
// console.log(number);


// let customerList = ["Saman","Nimal","Kamal"];
// console.log(customerList);
// //let is risky because the array list can be converted into a string
// customerList = "Amal";
// console.log(customerList);

// const customers = ["Saman","Nimal","Kamal"];
// customers.push("Kumara");
// customers[0]="Namal";
// console.log(customers);
// //This gives an error because customers array cannot be converted to a string because of const but can add values or change values
// customers= "Anura";

//Array Methods 

// const number = [];
// //.push() - insert a value to an array
// number.push(1);
// number.push(2);
// number.push(3);
// number.push(4);
// number.push(5);
// number.push(6);
// console.log(number);
// //.reverse() - reverse the array
// number.reverse();
// console.log(number);

const productList = [
    {name:"bun",instock:true,price:100},
    {name:"milk",instock:true,price:200},
    {name:"egg",instock:false,price:300},
    {name:"butter",instock:true,price:400},
    {name:"bread",instock:false,price:500}
];

console.log(productList);

let inStockProducts = productList.filter(
    function(product) {
        //return productFilter(product);
        return product.instock==true;
    }
);

//function productFilter(product) {
//    return product.instock==true;
//}
console.log(inStockProducts);
