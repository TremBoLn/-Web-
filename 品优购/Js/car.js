$(".checkall").change(function () {
  $(".j-checkbox,.checkall").prop("checked", $(this).prop("checked"));
  getSum();
  if ($(this).prop("checked")) {
    $(".cart-item").addClass("check-cart-item");
  } else {
    $(".cart-item").removeClass("check-cart-item");
  }
});
$(".increment").click(function () {
  var count = $(this).siblings(".itxt").val();
  count++;
  $(this).siblings(".itxt").val(count);
  var p = $(this).parent().parent().siblings(".p-price").html();
  p = p.substr(1);
  $(this)
    .parent()
    .parent()
    .siblings(".p-sum")
    .html("￥" + p * count);
  getSum();
});
$(".decrement").click(function () {
  var count = $(this).siblings(".itxt").val();
  if (count > 1) {
    count--;
  }
  $(this).siblings(".itxt").val(count);
  var p = $(this).parent().parent().siblings(".p-price").html();
  p = p.substr(1);
  $(this)
    .parent()
    .parent()
    .siblings(".p-sum")
    .html("￥" + p * count);
  getSum();
});
$(".itxt").change(function () {
  var p = $(this).parent().parent().siblings(".p-price").html();
  var count = $(this).val();
  //   count = parseInt(count);
  p = p.substr(1);
  $(this)
    .parent()
    .parent()
    .siblings(".p-sum")
    .html("￥" + p * count);
  getSum();
});

$(".j-checkbox").change(function () {
  getSum();
  if ($(this).prop("checked")) {
    $(this).parents(".cart-item").addClass("check-cart-item");
  } else {
    $(this).parents(".cart-item").removeClass("check-cart-item");
  }
});

function getSum() {
  var count = 0;
  var money = 0;
  $(".itxt").each(function (i, ele) {
    if (
      $(ele)
        .parents(".p-num")
        .siblings(".p-checkbox")
        .children(".j-checkbox")
        .prop("checked") === true
    ) {
      count += parseInt($(ele).val());
    }
  });
  $(".p-sum").each(function (i, ele) {
    if (
      $(ele).siblings(".p-checkbox").children(".j-checkbox").prop("checked") ===
      true
    ) {
      money += parseFloat($(ele).text().substr(1));
    }
  });
  money = money.toFixed(2);
  $(".amount-sum em").text(count);
  $(".price-sum em").html("￥" + money);
}

$(".p-action a").click(function () {
  $(this).parents(".cart-item").remove();
  getSum();
});

$(".remove-batch").click(function () {
  $(".j-checkbox:checked").parents(".cart-item").remove();
  getSum();
});
$(".clear-all").click(function () {
  $(".cart-item").remove();
  getSum();
});
