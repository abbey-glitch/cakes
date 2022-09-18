//alert("working");
/*let num = prompt("enter your ID: ");
if(num=3){
    alert("working fine");
}else{
    alert("enter");
}*/

const users =['james', 'john', 'mary'];
//delete users[1];
//alert(users);
let removeUser = prompt('who do yo which to remove?');
    if(users.includes(removeUser)){
        alert('correct')
        index = users.indexOf(removeUser)
        users.splice(index, 1);
        alert(users)
    }else{
        alert('wrong')
    }

let inputName = prompt("Enter your username: ");
if(users.includes(inputName)){
    alert("welcome " + inputName + "!");
}else{
    alert("you are not registered");
    const question = prompt('do you which to register?\n (a)yes\n (b)no');
    let answer = 'a';
    if(question === answer){
        alert('correct');
        const name = prompt('what is your name?');
        users.push(name);
        alert(users);
        alert("welcome " + name);
    } 
    else{
        alert('Thanks and goodbye');
    }
}