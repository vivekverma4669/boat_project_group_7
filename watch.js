var watches=[
    {
        img_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Storm.jpg?v=1682583585",
        rating:"4.8",
        name:"Storm",
        desc:"34499",
        org:"5990",
        off:"42% off"
    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Wave_Call.jpg?v=1682408982",
        rating:"4.9",
        name:"Wave Call",
        desc:"1799",
        org:"7990",
        off:"81% off"
    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Xtend_6a57e3cd-0fa0-47ac-a46e-ea788a526627.jpg?v=1682583585",
        rating:"4.8",
        name:"Xtend",
        desc:"3499",
        org:"7990",
        off:"56% off"
    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Storm_Call.jpg?v=1682408982",
        rating:"4.7",
        name:"Storm Call",
        desc:"1799",
        org:"7990",
        off:"77% off"
    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Wave-Lite.jpg?v=1682408982",
        rating:"4.9",
        name:"Wave lite",
        desc:"1799",
        org:"6990",
        off:"74% off"
    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/9e5b8bf2-29bf-4e1c-b24f-f8f4196ac14b_300x.png?v=1676434921",
        rating:"4.8",
        name:"Wave Flash",
        desc:"3299",
        org:"7990",
        off:"59% off"
    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Wave-Neo.jpg?v=1682583585",
        rating:"4.7",
        name:"Wave",
        desc:"1999",
        org:"5990",
        off:"67% off"
    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Wave-Connect.jpg?v=1682583585",
        rating:"4.9",
        name:"Wave Connect",
        desc:"3999",
        org:"7990",
        off:"77% off"
    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_57e6221e-9677-434f-9175-f9051bc30c58_300x.png?v=1679651024",
        rating:"4.8",
        name:"Wave Pro 47",
        desc:"2,999",
        org:"6990",
        off:"50% off"
    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Wave-Select-Smartwatch.jpg?v=1682583585",
        rating:"5.0",
        name:"Wave Select Smartwatch",
        desc:"2,799",
        org:"7990",
        off:"81% off"
    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Watch-Storm---Captain-America-Marvel-Edition.jpg?v=1682583585",
        rating:"4.9",
        name:"Storm Captain",
        desc:"2999",
        org:"6990",
        off:"50% off"
    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Wave_Armour.jpg?v=1682408981",
        rating:"4.7",
        name:"Wave Armour",
        desc:"2,799",
        org:"7990",
        off:"77% off"
    }

];

  watches.map(function(ele,idx){
    var parent=document.querySelector("#watches");
   
    var Lparent=document.createElement("div");
    var img=document.createElement("img");
   var rating=document.createElement("p");
   var name=document.createElement("p");
   var desc=document.createElement("span");
   var org=document.createElement("s");
   var off=document.createElement("span");
   var add=document.createElement("button");

    img.setAttribute("src",ele.img_url);
   
    rating.textContent="⭐"+ele.rating;
    name.textContent=ele.name;
    desc.textContent="₹"+ele.desc;
    org.textContent=ele.org;
    off.textContent=ele.off;
    add.textContent="Add To Cart";

   add.addEventListener("click",function(){
    var arr=JSON.parse(localStorage.getItem("cart")) || [];
    arr.push(ele);
    localStorage.setItem("cart",JSON.stringify(arr));
  })
    Lparent.append(img,rating,name,desc,org,off,add);
    parent.append(Lparent);
   
  })