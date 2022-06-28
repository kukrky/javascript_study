/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>김수환의 알콩달콩 웹페이지</title>
    <script defer src="./start.js"></script>
  </head>
  <body>
    <h1>김수환의 웹페이지 입니다.</h1>
    <button class="좋은버튼">1억을 받는 버튼</button>
  </body>
</html>
*/

//js
let $button = document.querySelector(".좋은버튼");

$button.addEventListener("click", (e) => {
  console.log("드렸습니다. 이메일 확인");
});