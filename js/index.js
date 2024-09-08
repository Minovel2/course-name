let name = document.querySelector('#name')
let login = document.querySelector('#password')
let repPassword = document.querySelector('#repeatPassword')
let submit = document.querySelector('#submit')

var fs = require(‘fs’);

function fileHandler(){

  fs.open('testFile.txt', 'w', (err) => {
      if(err) throw err;
      console.log('File created');
  });
  
}

function User(name, login, repPassword){
  this.login = login;
  fs.appendFile('testFile.txt', this.login, (err) => {
    if(err) throw err;
    console.log('Data has been added!');
});
}