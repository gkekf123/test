var menuBtn = document.getElementById("menuBtn");
var sidenav = document.querySelector(".sidenav");

menuBtn.addEventListener("click", function () {
  console.log(sidenav.style.width);
  console.log(window.innerWidth); // 브라우저의 너비

  var wid = sidenav.style.width;
  //   if (wid === "" || wid === "200px") {
  //     sidenav.style.width = "0px";
  //   } else {
  //     sidenav.style.width = "200px";
  //   }

  /* 모바일 크기 */
  if (window.innerWidth <= 767) {
    if (wid === "" || wid === "0px") {
      sidenav.style.width = "200px";
    } else {
      sidenav.style.width = "0px";
    }

    /* 브라우저 크기 */
  } else {
    if (wid === "" || wid === "200px") {
      sidenav.style.width = "0px";
    } else {
      sidenav.style.width = "200px";
    }
  }
});
