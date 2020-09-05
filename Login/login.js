function login() {
 
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var isRmbPwd = document.getElementById("isRmbPwd").checked;
 
    if (username.value == "") {
 
        alert("请输入用户名");
 
    } else if (password.value  == "") {
 
        alert("请输入密码");
 
    } else if(username.value == "admin" && password.value == "123456") {
        //若复选框勾选,则添加Cookie
        if (isRmbPwd == true) {   
            setCookie ("This is username", username.value.trim(), 7);
            setCookie (username.value.trim(), password.value.trim(), 7);
        }
        //否则清除Cookie
        else {
            delCookie ("This is username");
            delCookie (username.value.trim());
        } 
        window.location.href="welcome.html";
    
    } else {
 
        alert("请输入正确的用户名和密码！")
 
    }
}

