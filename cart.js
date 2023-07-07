var arr = JSON.parse(localStorage.getItem("cart")) || [];

    var box=document.createElement("div");
    box.id="carbox";
    
    box.style.textItem="center";
    
    var image = document.createElement("img");
    image.src = "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/bag_925d9ab5-b7d8-4b86-bfc5-2cb9b4df471e.png?v=1633452372";
    image.style.width = "200px";
    
    var cartheading = document.createElement("h2");
    cartheading.textContent = "Your cart is feeling lonely.";
    
    var ContinueButton = document.createElement("button");
    ContinueButton.style.backgroundColor="black";
    ContinueButton.style.color="white";
    ContinueButton.style.width="10%";
    ContinueButton.style.height="35px";
    ContinueButton.style.borderRadius="5%";
    ContinueButton.style.cursor="pointer";
    
    ContinueButton.textContent = "Start Shopping";
    ContinueButton.addEventListener("click",function(){
        window.location.href="nav.html";
    });
    
        if((arr==null)||(arr.length<=0)){
            box.append(image,cartheading,ContinueButton);
            document.querySelector("#emptyCart").append(box);
}
else{

    arr.foreach(function(elem){
        var contain=document.querySelector("#container");
        
        var detail=document.createElement("div");
    
        var imgcell = document.createElement("img");
        imgcell.src=elem.image;

        var namecell=document.createElement("h3");
        namecell.textContent.elem.name;
    

    })
   

}

