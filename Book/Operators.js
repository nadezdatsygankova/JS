let login = prompt('Login', '');
if (login === '' || login === null) {
    alert('Canceled');
}
else if (login === 'Admin') {
    let password = prompt('Password', '');
    if (password === '' || password === null) {
        alert('Canceled');
    }
    else if (password == 'TheMaster') {
        alert('Welcome!')
    }
    else {
        alert('Wrong password');
    }
}
else {
    alert(`I don't know you`);
}




for (let index = 2; index <= 10; index++) {
    if (index % 2 == 0) { alert(index) };
}


let i = 0;
while (i < 3) {
    alert(`number ${i}!`)
    i++;
}


let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);


