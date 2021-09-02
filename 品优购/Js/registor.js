var judge = document.querySelectorAll(".judge");
var judge_icon = document.querySelectorAll(".judge_icon");
var tips = document.querySelectorAll(".tips");
var safe = document.querySelector(".safe");
var safeDegree = safe.children;
var again = document.querySelector(".again");
console.log(safeDegree[1].style);
safe.style.display = "none";
for (var i = 0; i < 4; i++) {
  judge[i].style.display = "none";
}

var pn = document.querySelector(".pn");

pn.onfocus = function () {
  if (pn.value.length === 11) {
    console.log("success");
    judge[0].className = "success";
    judge_icon[0].className = "success_icon";
    judge[0].style.display = "inline-block";
    tips[0].innerHTML = "手机号正确";
    return;
  }
  var length = pn.value.length;
  judge[0].className = "void";
  tips[0].innerHTML = "请输入您的手机号";
  tips[0].style.color = "#ccc";
  judge_icon[0].className = "void_icon";
  judge[0].style.display = "inline-block";
};

pn.onblur = function () {
  if (pn.value.length != 11) {
    console.log("error");
    judge[0].className = "error";
    judge_icon[0].className = "error_icon";
    judge[0].style.display = "inline-block";
    tips[0].style.color = "red";
    tips[0].innerHTML = "请输入正确的手机号";
  } else if (pn.value.length === 11) {
    console.log("success");
    judge[0].className = "success";
    judge_icon[0].className = "success_icon";
    judge[0].style.display = "inline-block";
    tips[0].innerHTML = "手机号正确,点击发送短信验证码";
  }
  tips[0].style.left = "25px";
};
pn.onkeyup = function () {
  if (pn.value.length === 11) {
    judge[0].className = "success";
    judge_icon[0].className = "success_icon";
    judge[0].style.display = "inline-block";
    tips[0].innerHTML = "手机号正确，点击发送短信验证码";
    tips[0].style.left = "25px";
    tips[0].style.color = "green";
  }
};

var pwd = document.querySelector(".pwd");
pwd.onfocus = function () {
  if (pwd.value.length < 6) {
    tips[1].style.color = "#ccc";
    judge[2].className = "void";
    tips[1].innerHTML = "请输入6~18位以上注册密码";
    judge_icon[2].className = "void_icon";
    judge[2].style.display = "inline-block";
    return;
  }
};

pwd.onkeyup = function (e) {
  var length = pwd.value.length;
  if (length >= 6) {
    judge[2].className = "success";
    judge_icon[2].className = "success_icon";
    judge[2].style.display = "inline-block";
    tips[1].innerHTML = "密码可用";
    tips[1].style.left = "25px";
    tips[1].style.color = "green";
    safeDegree[1].style.visibility = "visible";
    safe.style.display = "block";
  }
  if (length >= 10 && length < 14) {
    safeDegree[2].style.visibility = "visible";
  }
  if (length >= 14 && length <= 18) {
    safeDegree[3].style.visibility = "visible";
  }
  if (length > 18) {
    judge[2].className = "error";
    judge_icon[2].className = "error_icon";
    judge[2].style.display = "inline-block";
    tips[1].innerHTML = "密码不能超出18位";
    tips[1].style.left = "25px";
    tips[1].style.color = "red";
    safe.style.display = "none";
  }
  if (e.keyCode == 8) {
    if (length > 18) {
      judge[2].className = "error";
      judge_icon[2].className = "error_icon";
      judge[2].style.display = "inline-block";
      tips[1].innerHTML = "密码不能超出18位";
      tips[1].style.left = "25px";
      tips[1].style.color = "red";
      safe.style.display = "none";
    }
    if (length < 14 && length >= 10) {
      safeDegree[3].style.visibility = "hidden";
    }
    if (length < 10 && length >= 6) {
      safeDegree[3].style.visibility = "hidden";
      safeDegree[2].style.visibility = "hidden";
    }
    if (length < 6) {
      safe.style.display = "none";
      tips[1].style.color = "#ccc";
      judge[2].className = "void";
      tips[1].innerHTML = "请输入6~18位以上注册密码";
      judge_icon[2].className = "void_icon";
      judge[2].style.display = "inline-block";
    }
  }
};

again.onblur = function () {
  if (again.value === pwd.value && again.value != "") {
    console.log(again.innerHTML);
    judge[3].className = "success";
    judge_icon[3].className = "success_icon";
    judge[3].style.display = "inline-block";
    tips[2].innerHTML = "";
  }
  if (again.value != pwd.value && again.value != "") {
    judge[3].className = "error";
    judge_icon[3].className = "error_icon";
    judge[3].style.display = "inline-block";
    tips[2].innerHTML = "两次密码不一致，请重新输入";
    tips[2].style.left = "25px";
  }
};
