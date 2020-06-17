//Chapter 01

//Task.01
//alert("Welcome to My Website");

//task.02
//alert("Error! Please enter a valid password");

//task.03
//alert("Welcome to JS Land... \n Happy Coding!");

//task.04
//alert("Welcome to JS Land...");

//task.5
//console.log("Hello... I can run JS through my web browser's console");

//Chapter 02

//Task.01
//var username;

//task.02
//var myName = "Aniq Ali";

//task.03
//var message = "Hello World";
//alert(message);

//task.4
//var stuname = "Jhon Doe";
//var age = "15 years old";
//var course = "Certified Mobile Application Development";
//alert(stuname);
//alert(age);
//alert(course);

//task 5
//var email = "Aneeqkhananeeq99@gmail.com";
//alert("My email address is " +email);

//task 6
//var book = "A smarter way to learn Javascript";
//alert("I am trying to learn form the book " +book);

//task 7
//document.write("Yah! I can write HTML content thorugh Javscript");

//task 8
//var asd = "----------@?@----------";
//alert(asd);

//Chapter 03

//Task 01
//var age = 20;
//alert("I am " + age + " years old");

//task 2
//var birthYear = 2000;
//document.write("My birth year is " +birthYear);
//document.write("<br> Data typr of my declared variable is number");

//task 3
//var name = "John Doe";
//var product = "T-Shirts";
//var quantity = 5;
//document.write(name +" ordered "+ quantity +" "+ product + " on XYZ Clothing store");

//Chapter 04

//Task 01
//var name, name1, name2;

//task 3
//document.write("<h3> Rules for naming JS variables </h3>");
//document.write("Variables names can only contain , numbers, $ and _, For example : $my_1stVariable");
//document.write("<br> Variables must begin with a letter, $ or_ , For example : $name, _name or name");
//document.write("<br> Variable names are case sensitive");
//document.write("<br> Variables names should not be JS keywords");

//Chapter 05

//Task 01
//var a = 3, b = 5, c = a+b;
//document.write("Sum of " + a + " and " + b + " is " +c);

//task 2
//var a = 3, b = 5,
//c = a+b, d = a-b, e = a*b, f = a/b;
//document.write("Sum of " + a + " and " + b + " is " +c);
//document.write("<br> Sub of " + a + " and " + b + " is " +d);
//document.write("<br> Multiply of " + a + " and " + b + " is " +e);
//document.write("<br> Division of " + a + " and " + b + " is " +f);

//task 3
//var asd = 5, asd1 = 13;
//document.write("Value after variable declaration is undefined");
//document.write("<br> Initial value is: "+ asd++);
//document.write("<br> value after Increment is: "+ asd);
//document.write("<br> Value after addition is: "+ asd1--);
//document.write("<br> Value after decrement is: "+ asd1);
//document.write("<br> The remainder is: "+ 0);

//task 4
//var ticket = 600;
//document.write("Total cost to buy 5 tickets to a movie is: "+ ticket*5 +" PKR");

//task 5
//document.write("<h4> Table of 4 </h4>");
//document.write(4 +" x "+ 1 +" = "+ 4);
//document.write("<br>"+ 4 +" x "+ 2 +" = "+ 8);
//document.write("<br>"+ 4 +" x "+ 3 +" = "+ 12);
//document.write("<br>"+ 4 +" x "+ 4 +" = "+ 16);
//document.write("<br>"+ 4 +" x "+ 5 +" = "+ 20);
//document.write("<br>"+ 4 +" x "+ 6 +" = "+ 24);
//document.write("<br>"+ 4 +" x "+ 7 +" = "+ 28);
//document.write("<br>"+ 4 +" x "+ 8 +" = "+ 32);
//document.write("<br>"+ 4 +" x "+ 9 +" = "+ 36);
//document.write("<br>"+ 4 +" x "+ 10 +" = "+ 40);

//task 6
//var item1 = 650;
//var item2 = 100;
//var quantity1 = 3;
//var quantity2 = 7;
//var shipping = 100;
//var total = (item1*quantity1) + (item2*quantity2) + shipping;
//document.write("otal cost of your order is: "+ total); 

//task 7
//var total = 980;
//var marks = 804;
//var per = (804/980) * 100;
//document.write("Total marks: " +total);
//document.write("<br> MArks obtained: " +marks);
//document.write("<br> Percentage: " +per);

//task 8
//var dollar = 104.80;
//var riyal = 28;
//document.write("<h4> Currency in PKR </h4>");
//document.write("<br> Total currency in PKR is: "+ dollar*10 + "+" + riyal*25 +"="+ 1748);

//task 9
//var current = 2020;
//var birth = 1991;
//var age = 29;
//document.write("Current year: " +current);
//document.write("<br> Birth year " +birth);
//document.write("<br> Your age " +age);

//Chapter 06 to 09

//Task 1
//var a = prompt("Enter a number: ");
//document.write("Result: ");
//document.write("<br> The value of a is " +a);
//document.write("<br> ........................................");
//document.write("<br> The value of ++a is: " + ++a);
//document.write("<br> Now the value of a is: " +a);
//document.write("<br> The value of a++ is: " +a);
//document.write("<br> Now the value of a is: " + ++a);
//document.write("<br> The value of --a is: " + --a);
//document.write("<br> Now the value of a is: " +a);
//document.write("<br> The vlue of a-- is: " +a);
//document.write("<br> Now the value of a is: " + --a);

//task 2
//var a = prompt("Enter your name: ");
//alert("Hey " +a +", Welcome to our website");

//task 3
//var sub1 = prompt("Enter 1st subject name: ");
//var sub2 = prompt("Enter 2nd subject name: ");
//var sub3 = prompt("Enter 3rd subject name: ");
//var totalMarks = 100;
//var user1 = prompt("Enter your " +sub1+ " marks: ");
//var user2 = prompt("Enter your " +sub2+ " marks: ");
//var user3 = prompt("Enter your " +sub3+ " marks: ");
//var per1 = (user1/100) * 100;
//var per2 = (user2/100) * 100;
//var per3 = (user3/100) * 100;
//var total1 = 300;
//var obt1 = user1 + user2 + user3;
//document.write("Subject T.Marks Obt.Marks Percentage");
//document.write("<br>"+ sub1 + totalMarks + user1 + per1);
//document.write("<br>"+ sub2 + totalMarks + user2 + per2);
//document.write("<br>"+ sub3 + totalMarks + user3 + per3);
//document.write(" "+" "+ total1 + obt1);

//Chapter 09 to 11

//task 01
//var user = prompt("Enter City Name: ");
//var arr = ['hyderabad','karachi','peshawar','islamabad'];
//if(user = 'karachi'){
//    document.write("Welcome to city of lights");
//}

//task 02
//var gender = prompt("Enter your gender: ");
//var male1 = "Male", male2 = "male";
//if(gender == male1 || gender == male2){
//    document.write("Good Morning Sir");
//}
//else{
//    document.write("Good Morning Madam");
//}

//task 03
//var color1 = "Red", color2 = "Green", color3 = "Yellow";
//document.write("Signal Color" +" "+ "Message");
//document.write("<br>"+ color1 +"-----------"+ "Must Stop");
//document.write("<br>"+ color2 +"--------"+ "Move Now");
//document.write("<br>"+ color3 +"-------"+ "Ready to Move");

//task 4
//var user = prompt("Enter Your Fuel Quantity in Litres: ");
//var fuel = 0.25;
//if(user < 0.25){
//    alert("Please refill the fuel in car");
//}
//else{
//    alert("It's good");
//}

//Chapter 12 to 13

//task 01
//var int1 = prompt("Enter 1st No. ");
//var int2 = prompt("Enter 2nd No. ");
//if(int1 == int2){
//    alert("The integers are equal");
//}
//else if (int1 > int2){
//    alert("1st No. is larger");
//}
//else{
//    alert("2nd No. is larger");
//}























