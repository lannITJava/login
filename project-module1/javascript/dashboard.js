function checkLogin(){
    let email = document.getElementById("userLogin");
    if (email==null) {
        window.location.href="loginPage.html";
    }
    let studentManagementStore = localStorage.getItem("studentManagementStore")?JSON.parse(localStorage.getItem("studentManagementStore")):[];
    let numberCourse = 0;
    studentManagementStore.forEach(course => {
       numberCourse++;
    });
    document.getElementById("numberCourse").innerHTML=numberCourse;

}
document.onload = checkLogin();