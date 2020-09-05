function validate_account() {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var address = document.getElementById("email");
    var uname = document.getElementById("username");
    var pword = document.getElementById("password");
    var confirm_pword = document.getElementById("confirm_password");
    var form = document.getElementById("submit_form");

    if (address.value == "")
    { 
        alert('邮箱信息不能为空');
    }
    else if (uname.value == "")
    {
        alert('姓名不能为空');
    }
    else if (pword.value == "")
    {
        alert('请填写密码');
    }
    else if (confirm_pword.value == "") 
    {
        alert('请再次输入密码');
    }
    else if(email.value == "admin@gmail.com" && username.value == "admin" && password.value == "123456" && confirm_pword.value == "123456")
    {
        window.location.href="personal_info.html";
    } 
    else
    {
        alert("请输入正确的用户名和密码")
    }
}
