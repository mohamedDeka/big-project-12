
let  sidebar = document.querySelector(".side-bar");
  document.querySelector("#menu-btn").onclick = () =>{
   sidebar.classList.toggle("active");
  }

  document.querySelector("#close-side-bar").onclick = () =>{
   sidebar.classList.remove("active");
  }




  let  searchform = document.querySelector(".search-form");
  document.querySelector("#search-btn").onclick = () =>{
   searchform.classList.toggle("active");
  }

  window.onscroll = () => {
    sidebar.classList.remove("active");
    searchform.classList.remove("active");
  }



  var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


document.querySelectorAll(".accordion-container .accordion").forEach(accordion => {
 accordion.onclick =  () =>{
   accordion.classList.toggle("active");
}
});


var swiper = new Swiper(".review-slider", {
  loop:true,
  grabCursor:true,
  spaceBetween: 20,
  breakpoints: {
      450: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
  },
});




var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("reset");
var m = document.getElementById("btn");
function register(){
x.style.left = "-400px";
y.style.left = "50px";
z.style.left = "110px"
}
function login(){
x.style.left = "50px";
y.style.left = "450px";
z.style.left = "110px"
}

let CartItem = document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").onclick = () => {
  CartItem.classList.toggle("active");
};


// The End Of The Year Date To Countdown To
// 1000 milliseconds = 1 Second

let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);






let videobtn = document.querySelectorAll(".vid-btn");
videobtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".controls .active").classList.remove("active");
    btn.classList.add("active");

    let src = btn.getAttribute("data-src");
    document.querySelector("#video-slider").src = src;
  });
});




let formbtn = document.querySelector("#login-btn");
let loginform = document.querySelector(".login-form-container");
let formclose = document.querySelector("#form-close");
let form = loginform.querySelector("form");
let email = form.querySelector("#email");
email.addEventListener("keyup", function () {
  var u_times = document.querySelector(".u_times");
  var u_check = document.querySelector(".u_check");
  if (email.value.length == 0 || email.value.length < 10) {
    email.style.border = "1px solid red";
    u_times.style.display = "block";
    u_check.style.display = "none";
    return false;
  } else {
    email.style.border = "1px solid green";
    u_times.style.display = "none";
    u_check.style.display = "block";
  }
});
let pass = form.querySelector("#pass");
pass.addEventListener("keyup", function () {
  var p_times = document.querySelector(".p_times");
  var p_check = document.querySelector(".p_check");
  if (pass.value.length == 0 || pass.value.length < 6) {
    pass.style.border = "1px solid red";
    p_times.style.display = "block";
    p_check.style.display = "none";
    return false;
  } else {
    pass.style.border = "1px solid green";
    p_times.style.display = "none";
    p_check.style.display = "block";
  }
});
function validate() {
  if (email.value == 0 || email.value.length < 11) {
    document.getElementById("error").innerHTML =
      "please fill the required fields!";
    return false;
  } else if (pass.value == 0 || pass.value.length < 8) {
    document.getElementById("error").innerHTML =
      "please fill the required fields!";
    return false;
  } else {
    alert("successuflly logged in");
  }
}
formbtn.addEventListener("click", () => {
  //law l8etha w 3amlt click msh hytl33 form aslan //
  loginform.classList.add("active");
  document.getElementById("loginForm").classList.add("active"); ///////////// Added New
  CartItem.classList.remove("active");
  SearchForm.classList.remove("active");
});

let registerBtn = document.querySelector("#registerBtn"); ///////////// Added New

registerBtn.onclick = () => { ///////////// Added New
  document.querySelector("#loginForm").classList.remove("active"); ///////////// Added New
  document.querySelector("#registerForm").classList.add("active"); ///////////// Added New
};

let loginBtn = document.querySelector("#loginBtn"); ///////////// Added New

loginBtn.onclick = () => { ///////////// Added New
  document.querySelector("#loginForm").classList.add("active"); ///////////// Added New
  document.querySelector("#registerForm").classList.remove("active"); ///////////// Added New
};

formclose.addEventListener("click", () => {
  loginform.classList.remove("active"); //law l8tha w geet adoos 3la label al x msh hy5rog //
});
let registerform = document.querySelector("#registerform");
let password = registerform.querySelector("#r-password");
    confirmpassword = registerform.querySelector("#r-confirmPassword");
    password.addEventListener("input", (e) =>{
     if(password.value.trim().length >= 8){
      confirmpassword.removeAttribute("disabled")
     }
     else{
      confirmpassword.setAttribute("disabled", "disabled");
     }
    });
    const rPassword = document.querySelector("#r-password"),
          confirmPassword = document.querySelector("#r-confirmPassword"),
          showPassword = document.querySelector("#showPassword"),
          submitBtn = document.querySelector("#submitbtn");
   
      showPassword.addEventListener("click", () => {
        if (rPassword.type === "password") {
          rPassword.type = "text";
          confirmPassword.type = "text";
          showPassword.classList.replace("fa-eye-slash", "fa-eye");
        } else {
          rPassword.type = "password";
          confirmPassword.type = "password";
          showPassword.classList.replace("fa-eye", "fa-eye-slash");
        }
      });
   
      // check the validation with java script //
      submitBtn.addEventListener("click", (e) => {
        if (
          document.querySelector("#r-fname").value == "" ||
          document.querySelector("#r-lname").value == "" ||
          document.querySelector("#mail").value == "" ||
          document.querySelector("#r-password").value == "" ||
          (document.querySelector("#r-password").value !== document.querySelector("#r-confirmPassword").value )
        )
        {
          e.preventDefault();
          document.querySelector("#nameError").classList.add("active");
          document.querySelector("#emailError").classList.add("active");
          document.querySelector("#pError").classList.add("active");
          document.querySelector("#cpError").classList.add("active");
          if (!document.querySelector("#r-fname").value == "" && !document.querySelector("#r-lname").value == "") {
            document.querySelector("#nameError").classList.remove("active");
            document.querySelector("#r-fname").style.border= "1px solid #24D785" ;
            document.querySelector("#r-fname").style.borderBottomWidth= "3px";
            document.querySelector("#r-lname").style.border= "1px solid #24D785" ;
            document.querySelector("#r-lname").style.borderBottomWidth= "3px";
          }
          if (!document.querySelector("#mail").value == "") {
            document.querySelector("#emailError").classList.remove("active");
            document.querySelector("#mail").style.border= "1px solid #24D785" ;
            document.querySelector("#mail").style.borderBottomWidth= "3px";
          }
          if (!document.querySelector("#r-password").value == "") {
            document.querySelector("#pError").classList.remove("active");
            document.querySelector("#r-password").style.border= "1px solid #24D785" ;
            document.querySelector("#r-password").style.borderBottomWidth= "3px" ;
          }
          if (document.querySelector("#r-password").value == document.querySelector("#r-confirmPassword").value) {
            document.querySelector("#cpError").classList.remove("active");
          }
          if (!document.querySelector("#r-confirmpassword").value == ""){
             document.querySelector("#r-confirmpassword").style.border= "1px solid #24D785" ;
             document.querySelector("#r-confirmpassword").style.borderBottomWidth= "3px";
             };
          };
        });
    
/*
        const container = document.querySelector(".container"),
        pwShowHide = document.querySelectorAll(".showHidePw"),
        pwFields = document.querySelectorAll(".password"),
        signUp = document.querySelector(".signup-link"),
        login = document.querySelector(".login-link");
  
      //   js code to show/hide password and change icon //
      pwShowHide.forEach(eyeIcon =>{
          eyeIcon.addEventListener("click", ()=>{
              pwFields.forEach(pwField =>{
                  if(pwField.type ==="password"){
                      pwField.type = "text";
  
                      pwShowHide.forEach(icon =>{
                          icon.classList.replace("uil-eye-slash", "uil-eye");
                      })
                  }else{
                      pwField.type = "password";
  
                      pwShowHide.forEach(icon =>{
                          icon.classList.replace("uil-eye", "uil-eye-slash");
                      })
                  }
              }) 
          })
      })
  
      // js code to appear signup and login form //
      signUp.addEventListener("click", ( )=>{
          container.classList.add("active");
      });
      login.addEventListener("click", ( )=>{
          container.classList.remove("active");
      });
      */

let resetBtn = document.querySelector("#resetBtn");
resetBtn.onclick = () => { 
  document.querySelector("#resetform").classList.add("active"); ///////////// Added New
  document.querySelector("#loginForm").classList.remove("active"); ///////////// Added New
  document.querySelector("#registerForm").classList.reomve("active"); ///////////// Added New
};
