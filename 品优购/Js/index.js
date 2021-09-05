var fake1 = document.querySelector(".fake1");
var fake2 = document.querySelector(".fake2");
var foucus_img = document.querySelector(".foucus_img");
var foucuspoint = document.querySelector(".points");
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");

var animation = function (obj, target) {
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
    var step = (target - obj.offsetLeft) / 10;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    if (obj.offsetLeft == target) {
      clearInterval(obj.timer);
    }
    obj.style.left = obj.offsetLeft + step + "px";
  }, 15);
};

foucuspoint.addEventListener("click", function (e) {
  for (var i = 0; i < foucuspoint.children.length; i++) {
    foucuspoint.children[i].className = "normal";
  }
  var index = e.target.dataset.index;
  e.target.className = "current";
  console.log(e.target.dataset.index);
  var target = index * -721;
  animation(foucus_img, target);
  num = index;
});

var num = 0;
var flag = true;
next.addEventListener("click", function () {
  if (flag) {
    for (var i = 0; i < foucuspoint.children.length; i++) {
      foucuspoint.children[i].className = "normal";
    }
    num++;
    //   console.log(num);
    if (num == 4) {
      var fake_first = foucus_img.children[0].cloneNode(true);
      foucus_img.appendChild(fake_first);
    }
    animation(foucus_img, -num * 721);
    if (foucus_img.offsetLeft <= -2884) {
      foucus_img.style.left = 0;
      animation(foucus_img, -721);
      num = 1;
      foucus_img.removeChild(foucus_img.lastChild);
    }
    num = num % 4;
    var index = num;
    foucuspoint.children[index].className = "current";
  }
});

prev.addEventListener("click", function () {
  for (var i = 0; i < foucuspoint.children.length; i++) {
    foucuspoint.children[i].className = "normal";
  }
  if (num == 0) {
    var fake_first = foucus_img.children[0].cloneNode(true);
    foucus_img.appendChild(fake_first);
    foucus_img.style.left = -2884 + "px";
    console.log(foucus_img.offsetLeft);
  }
  num--;
  num = num < 0 ? num + 4 : num;
  animation(foucus_img, -721 * num);
  var index = num;
  foucuspoint.children[index].className = "current";
});

var timer = setInterval(function () {
  for (var i = 0; i < foucuspoint.children.length; i++) {
    foucuspoint.children[i].className = "normal";
  }
  num++;
  if (num == 4) {
    var fake_first = foucus_img.children[0].cloneNode(true);
    foucus_img.appendChild(fake_first);
  }
  animation(foucus_img, -num * 721);
  if (foucus_img.offsetLeft <= -2884) {
    foucus_img.style.left = 0;
    animation(foucus_img, -721);
    num = 1;
    foucus_img.removeChild(foucus_img.lastChild);
  }
  num = num % 4;
  foucuspoint.children[num].className = "current";
}, 5000);
