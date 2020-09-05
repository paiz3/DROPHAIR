function validate() {
    var reg = /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z]{2,4})$/;
    var address = document.getElementById("email");
    var uname = document.getElementById("username");
    var pword = document.getElementById("password");
    var confirm_pword = document.getElementById("confirm_password");
    var form = document.getElementById("submit_form");

    form.addEventListener('submit',(e)=> {
    if (reg.test(address) == false)
    {
        alert('请填写正确的邮箱信息');
    }
    if (address.value == "")
    { 
        alert('请填写正确的邮箱信息');
    }
    if (uname.value == "")
    {
        alert('请填写正确的姓名信息');
    }
    if (pword.value == "")
    {
        alert('请填写密码');
    }
    if (confirm_pword.value == "") 
    {
        alert('请再次输入密码');
    }
    else if(username.value == "admin" && password.value == "123456")
    {
        window.location.href="personal_info.html";
    } else 
    {
        alert("请输入正确的用户名和密码")
    }
})
}
