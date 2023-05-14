/******************  LOGIN START ************************/
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
/******************  LOGIN END ************************/
/******************  HOME START ************************/

$(".cheif-1, .cheif-2, .cheif-3").click(function() {
  var cheif1 = $(".cheif-1");
  var cheif2 = $(".cheif-2");
  var cheif3 = $(".cheif-3");

  if ($(this).hasClass("cheif-1")) {
    cheif2.fadeToggle(1000);
    cheif3.fadeToggle(1000);
  } else if ($(this).hasClass("cheif-2")) {
    cheif1.fadeToggle(1000);
    cheif3.fadeToggle(1000);
  } else if ($(this).hasClass("cheif-3")) {
    cheif1.fadeToggle(1000);
    cheif2.fadeToggle(1000);
  }
});







/******************  HOME END ************************/
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/******************  SERVICE START ************************/

$(".section-1 img").click(function()
{
  if (prompt("Wanna get the offer ?","YES")=="YES") {
    
    $(".section-1 h1").text("Congratulations!")


    $(".section-1 img").animate({
    left:"-100px"
    },1500).animate(
  {
    left:"2000px"
  },600);

}
});
var New_Purhcase = new Audio("Data/audio.mp4");
var cart_items = 0;

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
        New_Purhcase.play();
  }
}


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
  $(".section-2")
    .css("background-color", "red")
    .delay(500)
    .slideUp(2000)
    .slideDown(2000)
    .queue(function (next) {
      $(this).css("background-color", "green");
      next();
    })
    .delay(500)
    .slideUp(2000)
    .slideDown(2000)
    .queue(function (next) {
      $(this).css("background-color", "blue");
      next();
    })
    .delay(500)
    .slideUp(2000)
    .slideDown(2000);
});

/************************* SERVICE END *************************/



/************************* ABOUT US START *************************/
$(".about-p").on({
  mouseenter: function () {
    $(this).css("background-color", getRandomColor());
    $(".container").css("background-color", getRandomColor());
  },

  mouseleave: function () {
    $(this).css("background-color", getRandomColor());
    $(".container").css("background-color", getRandomColor());
  }
});
/************************* ABOUT US END*************************/
