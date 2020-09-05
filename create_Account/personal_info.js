function validate_info() {
    var name = document.getElementById("name");
    var school = document.getElementById("school");

    if (name.value == "")
    { 
        alert('姓名不能为空');
    }
    else if (school.value == "")
    {
        alert('学校不能为空');
    }
    else
    {
        window.location.href="../course page/index.html";
    }
}
