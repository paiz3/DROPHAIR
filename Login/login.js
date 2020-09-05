function login() {
 
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var isRmbPwd = document.getElementById("isRmbPwd").checked;
 
    if (username.value == "") {
 
        alert("请输入用户名");
 
    } else if (password.value  == "") {
 
        alert("请输入密码");
 
    } else {

        alert("请输入正确的用户名和密码！")

 
    }
}

