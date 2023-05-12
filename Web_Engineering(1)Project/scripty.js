function checkHuman() {
  var ans = prompt("Please Solve This equation.\n1+1", "(-_O)");
  if (ans == 2) {
    alert("verification passed!");
  } else {
    alert("verification failed!");
    checkHuman();
  }
}

function Login() {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;

  if (email !== "" && pass !== "") {
    alert("Logging in ...");
    checkHuman();
  } else {
    alert("EMPTY FIELDS!!");
  }
}

var Audio = new Audio("Data/audio.mp4");

function Confirm_purchase(product_name, price) {
  if (
    confirm(
      "You are about to buy " +
        product_name +
        " for " +
        price +
        "$\nPlease accept to procced the purchase!"
    )
  ) {
    Audio.play();
  }
}

var cart_items = 0;

function Cart_Inc() {
  if (cart_items <= 8) {
    document.getElementById("cart_items").innerHTML = cart_items++;
  } else {
    alert("Your Cart is Full!!\nSign up to add more.");
  }
}

$("#cart_items").mouseenter(function () {
  Cart_Inc();
});

$("#cart_items").click(function () {
  cart_items = 0;
  document.getElementById("cart_items").innerHTML = 0;
});

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

$(".xx").on({
  mouseenter: function () {
    alert("ahhh");
    $(this).css("background-color", getRandomColor());
  },

  mouseleave: function () {
    $(this).css("background-color", getRandomColor());
  },
});

$("#HideME").click(function () {
  $(".dessert").toggle();
});

$("#FadeME").mouseenter(function () {
  $(".dessert").fadeToggle();
  $(".dessert").fadeToggle("slow");
  $(".dessert").fadeToggle(1000);
});

$("#SlideME").click(function () {
  $(".dessert").slideToggle();
});

$("#AnimateME").click(function () {
  var div = $(".section-3 div img");
  div.animate({ height: "+=50px", opacity: "0.4" }, "slow");
  div.animate({ width: "+=50px", opacity: "0.8" }, "slow");
  div.animate({ height: "+=50px", opacity: "0.4" }, "slow");
  div.animate({ width: "+=50px", opacity: "0.8" }, "slow");
});

$("#TryMe").click(function () {
  $(".section-2").css("background-color", "red").delay(500).slideUp(2000).slideDown(2000)
    .queue(function (next) {
      $(this).css("background-color", "green");
      next();
    }).delay(500).slideUp(2000).slideDown(2000).queue(function (next) {
      $(this).css("background-color", "blue");
      next();
    }).delay(500).slideUp(2000).slideDown(2000);
});
