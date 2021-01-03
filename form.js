let form = document.getElementById('form');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let password2 = document.getElementById('password2');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs(){
  //получаем values из инпутов
  let usernameValue = username.value.trim(); //trim убирает все пробелы
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();
  let password2Value = password2.value.trim();

  if(usernameValue === ""){
    // показываем сообщение об ошибке и меняем класс у элемента на error
    setErrorFor(username,'Поле не может быть пустым');
  }else{
    //меняем класс на success
    setSuccessFor(username);
  }

  if(emailValue === ""){
    setErrorFor(email, 'Поле не может быть пустым');
  }else if(!validEmail(emailValue)){
    setErrorFor(email, 'Недопустимое значение');
  }else{
    setSuccessFor(email);
  }

  if(passwordValue === ""){
    setErrorFor(password, 'Поле не может быть пустым');
  }else{
    setSuccessFor(password);
  }

  if(password2Value === ""){
    setErrorFor(password2, 'Поле не может быть пустым');
  }else if(passwordValue !== password2Value){
    setErrorFor(password2, 'Пароли не совпадают');
  }else{
    setSuccessFor(password2);
  }
  let counter=0;
  for (let child of form.children){
    if(child.classList.contains('success')){
      counter= counter +1;
    }
  }
  if(counter === 4){
    form.innerText="Ваш аккаунт успешно создан"
  }
}

function setErrorFor(input, message){
  let formControl = input.parentElement; //.form-control
  let smallTag = formControl.querySelector('small');
  //далее добавляем сллбщение в small тэг
  smallTag.innerText = message;

  //добавляем класс error;
  formControl.className = 'form-control error';
}

function setSuccessFor(input){
  let formControl = input.parentElement; //.form-control
  formControl.className = 'form-control success';
}

function validEmail(email){
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1-3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
