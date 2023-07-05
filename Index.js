var products=[
    {
        img_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes-115_1.jpg?v=1686139410",
        work:"Clear Calling",
        rating:"4.9",
        name:"Airdopes 115",
        desc:"1,499",
        org:"2990",
        off:"50% off"
    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/wave-flex-render.jpg?v=1682573437",
        work:"BT Calling",
        rating:"4.8",
        name:"Wave Flex Connect",
        desc:"1,499",
        org:"7990",
        off:"81% off"
    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_new_8c8dd689-e23d-4448-9920-2ef3f5a5e43b.jpg?v=1685686859",
        work:"60 Hours Playback",
        rating:"4.8",
        name:"Airdopes 131",
        desc:"999",
        org:"2990",
        off:"67% off"
    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Storm_Call.jpg?v=1682408982",
        work:"BT Calling",
        rating:"4.7",
        name:"Storm Call",
        desc:"1,799",
        org:"7990",
        off:"77% off"
    }

];

  products.map(function(ele,idx){
    var parent=document.querySelector("#ProdList");
    var Ssuper=document.createElement("p");
    var Lparent=document.createElement("div");
    var img=document.createElement("img");
    var work=document.createElement("p");
   var rating=document.createElement("p");
   var name=document.createElement("p");
   var desc=document.createElement("span");
   var org=document.createElement("s");
   var off=document.createElement("span");
   var add=document.createElement("button");

    img.setAttribute("src",ele.img_url);
    Ssuper.textContent="⚡Super Saver";
    work.textContent=ele.work;
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
    Lparent.append(img,Ssuper,work,rating,name,desc,org,off,add);
    parent.append(Lparent);
   
  })



  // Categories

  var Categories=[
    {
      img1:"https://www.boat-lifestyle.com/cdn/shop/files/True-wireless-earbuds_small.png?v=1684842854",
      name: "True Wireless Earbuds"
    },
    {
      img1:"https://www.boat-lifestyle.com/cdn/shop/files/Neckbands_bc6343f4-622f-4ebd-bb36-205643c3bf78_small.png?v=1684842854",
      name: "Neckbands"
    },
    {
      img1:"https://www.boat-lifestyle.com/cdn/shop/files/Smartwatches_88f12bcf-24bd-4e3a-aacb-ecc204f62179_small.png?v=1684842853",
      name: "Smart watches"
    },
    {
      img1:"https://www.boat-lifestyle.com/cdn/shop/files/Wireless-Headphones_small.png?v=1684842854",
      name: "Wiresless Headphones"
    },
    {
      img1:"https://www.boat-lifestyle.com/cdn/shop/files/Wireless-Speaker_small.png?v=1684842854",
      name: "Wireless Speakers"
    },
    {
      img1:"https://www.boat-lifestyle.com/cdn/shop/files/Wired-Headphones_small.png?v=1684842854",
      name: "Wired Headphones"
    },
    {
      img1:"https://www.boat-lifestyle.com/cdn/shop/files/Wired-Earphones_small.png?v=1684842854",
      name: "Wired Earphones"
    },
    {
      img1:"https://www.boat-lifestyle.com/cdn/shop/files/Soundbars_d9a7bdfd-e780-4581-ab85-f2e86f84cd28_small.png?v=1684842854",
      name: "Soundbars"
    },
    {
      img1:"https://www.boat-lifestyle.com/cdn/shop/files/Gaming-Headphones_small.png?v=1684842853",
      name: "Gaming Headphones"
    },
    {
      img1:"https://www.boat-lifestyle.com/cdn/shop/files/w_de57f25b-de5b-4d1a-bed0-765975b25da8_small.png?v=1684847228",
      name: "Party Speakers"
    }
  ];

  Categories.map(function(ele,idx){
      var parent=document.querySelector("#Category");
      var catdiv=document.createElement("div");
      var img1=document.createElement("img");
      var name1=document.createElement("p");

      img1.setAttribute("src",ele.img1);
      name1.textContent=ele.name;
      
      catdiv.append(img1,name1);
      parent.append(catdiv);
})





// New Launches
var launches=[
  {
      img_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AB_2000_pro.jpg?v=1688455732",
      work:"Wireless Subwoofer",
      rating:"Be first to review",
      name:"Avante Bar pro",
      desc:"10,499",
      org:"22,990",
      off:"54% off"
  },
  {
      img_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Ultima_Connect.jpg?v=1687865888",
      work:"BT Calling",
      rating:"Be first to review",
      name:"Ultima Connect",
      desc:"1,999",
      org:"7990",
      off:"73% off"
  },
  {
      img_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/xtend-plus.png?v=1687954418",
      work:"BT Calling",
      rating:"Be first to review",
      name:"Xtend Plus",
      desc:"2,299",
      org:"8,999",
      off:"74% off"
  },
  {
      img_url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Lunar_Connect_Ace.jpg?v=1687342035",
      work:"BT Calling",
      rating:"Be first to review",
      name:"Lunar Connect Ace",
      desc:"2,499",
      org:"9990",
      off:"77% off"
  }

];

launches.map(function(ele,idx){
  var parent=document.querySelector("#Launches");
  var Ssuper=document.createElement("p");
  var Lparent=document.createElement("div");
  var img=document.createElement("img");
  var work=document.createElement("p");
 var rating=document.createElement("p");
 var name=document.createElement("p");
 var desc=document.createElement("span");
 var org=document.createElement("s");
 var off=document.createElement("span");
 var add=document.createElement("button");

  img.setAttribute("src",ele.img_url);
  Ssuper.textContent="⚡New Launches";
  work.textContent=ele.work;
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
  Lparent.append(img,Ssuper,work,rating,name,desc,org,off,add);
  parent.append(Lparent);
 
})


// Features with images
var features=[
  {
    img2:"https://www.boat-lifestyle.com/cdn/shop/files/Group_334305_small.svg?v=1682336123",
    text:"𝟭 𝘆𝗲𝗮𝗿 Warranty"
  },
  {
    img2:"https://www.boat-lifestyle.com/cdn/shop/files/Group_334304_small.svg?v=1682336123",
    text:"𝟳 𝗱𝗮𝘆 Replacement"
  },
  {
    img2:"https://www.boat-lifestyle.com/cdn/shop/files/Group_334303_small.svg?v=1682336123",
    text:"𝗙𝗿𝗲𝗲 Shipping"
  },
  {
    img2:"https://www.boat-lifestyle.com/cdn/shop/files/Group_334302_small.svg?v=1682336123",
    text:"𝗚𝗦𝗧 Billing"
  }
];

features.map(function(element,idx){
  var launch=document.querySelector("#Features");
  var parentt=document.createElement("div");
  var imge=document.createElement("img");
  var text=document.createElement("p");

  imge.setAttribute("src",element.img2);
   text.textContent=element.text;

   parentt.append(imge,text);
   launch.append(parentt);
})
