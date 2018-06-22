var isauth = true;

var loginpage = document.getElementById('loginpage');
var homepage = document.getElementById('container');
if (isauth) {
    loginpage.style.display = 'none';
}
else {
    homepage.style.display = 'none';
}