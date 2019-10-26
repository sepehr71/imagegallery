function myFunction() {
    var X = '10';
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }

  const user ={name:'Ire Aderinkun',age :25}
  localStorage.setItem('user',JSON.stringify(user));

  const updatedUser = { name: 'Ire Aderinokun', age: 24 }
localStorage.setItem('user', JSON.stringify(updatedUser));

localStorage.removeItem('user');