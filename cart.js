var arr = JSON.parse(localStorage.getItem("cart")) || [];

function display(arr) {
  var items = arr.length;
  var totalprice = arr.reduce(function (acc, curr) {
    return +acc + +curr.desc;
  }, 0);

  document.querySelector("#totalitems").textContent = items;
  document.querySelector("#totalAmount").textContent = "₹ " + totalprice;

  var form=document.querySelector("form");
  form.addEventListener("submit",function(){
    event.preventDefault();
    var code=form.promo.value;
    if(code==="masai30"){
      var newTotal=Math.round((70*totalprice)/100);
      document.querySelector("#totalAmount").textContent="₹ "+newTotal;
    }
    else{
      document.querySelector("#totalAmount").textContent=totalprice;
    }

    form.reset();
  })

  var box = document.createElement("div");
  box.id = "carbox";

  box.style.textItem = "center";

  var image = document.createElement("img");
  image.src =
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/bag_925d9ab5-b7d8-4b86-bfc5-2cb9b4df471e.png?v=1633452372";
  image.style.width = "200px";

  var cartheading = document.createElement("h2");
  cartheading.textContent = "Your cart is feeling lonely.";

  var ContinueButton = document.createElement("button");
  ContinueButton.style.backgroundColor = "black";
  ContinueButton.style.color = "white";
  ContinueButton.style.width = "10%";
  ContinueButton.style.height = "35px";
  ContinueButton.style.borderRadius = "5%";
  ContinueButton.style.cursor = "pointer";

  ContinueButton.textContent = "Start Shopping";
  ContinueButton.addEventListener("click", function () {
    window.location.href = "index.html";
  });

  if (arr == null || arr.length <= 0) {
    box.append(image, cartheading, ContinueButton);
    document.querySelector("#emptyCart").append(box);
  } else {
    arr.map(function (elem, index) {
      var contain = document.querySelector("#ProdList");

      var Ssuper = document.createElement("p");
      Ssuper.textContent = "⚡Super Saver";

      var detail = document.createElement("div");
      detail.id = "con";

      var imgcell = document.createElement("img");
      imgcell.src = elem.img_url;

      var workcell = document.createElement("p");
      workcell.textContent = elem.work;

      var rating = document.createElement("p");
      rating.textContent = "⭐" + elem.rating;

      var name = document.createElement("p");
      name.textContent = elem.name;

      var desc = document.createElement("span");
      desc.textContent = "₹ " + elem.desc;

      var org = document.createElement("s");
      org.textContent = elem.org;

      var off = document.createElement("span");
      off.textContent = elem.off;

      var dele = document.createElement("button");
      dele.textContent = "Remove";

      dele.addEventListener("click", function () {
        arr.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(arr));
        window.location.reload();
      });

      detail.append(
        imgcell,
        Ssuper,
        workcell,
        rating,
        name,
        desc,
        org,
        off,
        dele
      );
      contain.append(detail);
    });
  }
}

var pay = document.querySelector("#ConfirmOrder>button");
pay.addEventListener("click",function(){
  window.location.assign("./payment.html");
})
display(arr);
