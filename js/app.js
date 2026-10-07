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

// const productList = [
//     {name:"bun",instock:true,price:100},
//     {name:"milk",instock:true,price:200},
//     {name:"egg",instock:false,price:300},
//     {name:"butter",instock:true,price:400},
//     {name:"bread",instock:false,price:500}
// ];

// console.log(productList);

// console.log(productList.filter(function(product) {return product.instock==true}));
// console.log(productList.filter(product => product.instock==false));

// let inStockProducts = productList.filter(
//     function(product) {
//         //return productFilter(product);
//         return product.instock==true;
//     }
// );

//function productFilter(product) {
//    return product.instock==true;
//}

//functions

// // Method 01
// function addNumbers(num1,num2) {
//     return num1+num2;
// }
// console.log(addNumbers(10,20));

// // Method 02
// let getSum = function(num1,num2){
//     return num1+num2;
// };
// console.log(getSum(20,20));
// // Method 03 - Arrow Function

// let getTotal = (num1,num2) => {
//     return num1 + num2;
// }
// console.log(getTotal(30,50));

// // Method 04 - anpnymus function
// (num1,num2) => {
//     return num1,num2;
// }

//  Arrow Function with single parameter

// let txtValue = txtvalue =>{
//     return txtValue;
// }
// console.log(txtValue("Hello World !"));

// let sample = txtValue1 => txtValue1;;
// console.log(sample("Hello World"));

//Sort arrays
// const letterList = ["B","X","g","O","N"];
// console.log(letterList);

// const sortArray = letterList.sort();
// console.log(sortArray);

//map

// const salaryList = [50000, 60000, 80000, 90000];
// console.log(salaryList);

// // let doubleSalary = salaryList.map(salary => salary*2);
// // console.log(doubleSalary);


// console.log(salaryList.map(salary => salary*2));

//find

// const studentList = [
//     {name:"Jagath",age:30,gender:"male"},
//     {name:"Nayana",age:32,gender:"female"},
//     {name:"Amara",age:33,gender:"male"},
//     {name:"Kamal",age:35,gender:"male"},
//     {name:"Saman",age:40,gender:"male"}
// ]
// console.log(studentList.find(student => student.name === "Saman"));


// JSON - j=Javascript Object Notation 

//res - response
function loadTableOnAction(){
    fetch("/customer.json").then(res => res.json()).then(data =>{console.log(data)
        let tblCustomer = document.getElementById("tblCustomer");

        let body ="";
        data.forEach(element => {
            body +=`
                <tr>
                    <td>${element.id}</td>
                    <td>${element.name}</td>
                    <td>${element.age}</td>
                    <td>${element.address}</td>
                    <td>${element.email}</td>
                </tr>    
            `
            
        }); 
            
        
        tblCustomer.innerHTML=body;

    });
};