// var createCookie = document.getElementById("createCookie");
// createCookie.addEventListener("change", addCookie);

// function addCookie() {
//   var date = new Date();
//   date.setDate(date.getDate() + 1);
//   if (createCookie.checked) {
//     // 쿠키 생성
//     var cookieName = "popup_" + Math.random().toString(36).substr(2, 9);
//     var cookieValue = Math.random().toString(36).substr(2, 9);
//     var cookie =
//       cookieName +
//       "=" +
//       cookieValue +
//       "; expires=" +
//       date.toUTCString() +
//       "; path=/";
//     document.cookie = cookie;
//   }
// }

function addCookie(name, value) {
  // 시간 설정
  var date = new Date();
  date.setDate(date.getDate() + 1); // 현재시간 + 1
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);

  console.log(date);

  // 쿠키 생성
  var cookie = "";
  cookie += name + "=" + value + "; ";
  cookie += "expires=" + date.toUTCString() + "; path=/";
  document.cookie = cookie;
}

// cookie 확인(가져오기)
function getCookie(name) {
  var arr = document.cookie.split("; ");
  if (arr.length != 0) {
    for (var i = 0; i < arr.length; i++) {
      // console.log(arr[i]);
      if (arr[i].indexOf(name + "=") != -1) {
        return true; // 쿠키가 있다는 뜻
      }
    }
  }
}
