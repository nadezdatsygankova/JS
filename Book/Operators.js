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
