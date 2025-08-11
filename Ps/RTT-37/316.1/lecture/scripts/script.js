let title= document.getElementById("titlebanner");

console.log(title);

let name=document.getElementsByName("listItem")
console.log(name);

let firstQuery= document.querySelector('.subTitle')
console.log(firstQuery);


let listItems = document.getElementsByTagName("li");

for (let el of listItems){
console.log(el);
}


let pars = document.querySelectorAll('p');
console.log(pars);

for (let el of pars){
console.log(pars);
}

let list = document.getElementsByTagName('ul');

let newListItem = document.createElement('li');
console.log(newTitle);

list[0].appendChild(newListItem)