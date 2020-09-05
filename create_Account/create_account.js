function validate_account() {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var address = document.getElementById("email");
    var uname = document.getElementById("username");
    var pword = document.getElementById("password");
    var confirm_pword = document.getElementById("confirm_password");
    var form = document.getElementById("submit_form");

    if (address.value === "")
    { 
        alert('邮箱信息不能为空');
        return false;
    }
    else if (uname.value === "")
    {
        alert('姓名不能为空');
        return false;
    }
    else if (pword.value === "")
    {
        alert('请填写密码');
        return false;
    }
    else if (confirm_pword.value === "")
    {
        alert('请再次输入密码');
        return false;
    }
    else if(pword.value !== confirm_pword.value)
    {
        alert('两次密码不一致');
        return false;
    }
}
