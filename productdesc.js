var prior=JSON.parse(localStorage.getItem("product-desc"))||[];

displayData(prior);
function displayData(){
    document.getElementById("desc").textContent="";
    prior.map((ele)=>{
        var div=document.createElement("div");

        var divImage=document.createElement("div");
        divImage.setAttribute("id","imagediv");

        var img1=document.createElement("img");
        img1.src=ele.img1;

        var img2=document.createElement("img");
        img2.src=ele.img2;

        var img3=document.createElement("img");
        img3.src=ele.img3;

        var img4=document.createElement("img");
        img4.src=ele.img4;

        var img5=document.createElement("img");
        img5.src=ele.img5;

        divImage.append(img1,img2,img3,img4,img5);

        

        var divDetails=document.createElement("div");
        divDetails.setAttribute("id","details");

        var name=document.createElement("h1");
        name.textContent=ele.name;

        var divbtn=document.createElement("div");
        divbtn.setAttribute("id","smallbutton");

        var btn1=document.createElement("button");
        btn1.textContent=ele.btn1;

        var btn2=document.createElement("button");
        btn2.textContent=ele.btn2;

        divbtn.append(btn1,btn2);
        divrating=document.createElement("div");
        divrating.setAttribute("id","rating");
        
        // var p=document.createElement('p');
        // p.innerHTML=`<ion-icon id="ionheart" name="heart-outline"></ion-icon>`;
        

        var span=document.createElement("span");
        span.textContent="5.0"
        span.style.fontWeight="bold";

        var imagerate=document.createElement("img");
        imagerate.setAttribute("src","sale_1_05.jpg");
        imagerate.setAttribute("id","rate")

        span.appendChild(imagerate)

        

        divrating.append(span);

        var hr=document.createElement("hr");
        
        var br=document.createElement("br");

        var price=document.createElement("p");
        price.textContent="Best price* ";

        var span=document.createElement("span");
        span.textContent="Rs. "+ele.price;
       
        span.style.color='red';
        span.style.fontSize="20px"

        price.appendChild(span)

        var span1=document.createElement("span");
        span1.textContent="Rs. "+ele.mrp;
        span1.style.textDecoration="line-through"

        var strikedprice=document.createElement("p");
        strikedprice.textContent="MRP "
        strikedprice.style.color="rgb(139,167,201)"
        
        strikedprice.appendChild(span1); 

         var divd=document.createElement("div");
         divd.style.fontFamily="sans-serif";
         divd.style.color="#c4c4c4";
         divd.style.fontWeight="bold"
         divd.style.fontSize="15px"

         var per=document.createElement("p");
         per.textContent="(Inclusive of all taxes)";
         

         var per1=document.createElement("p");
         per1.textContent="*Applicable coupon to be applied during checkout";


         var per2=document.createElement("p");
         per2.textContent="*This product cannot be returned for a refund or exchange.";

         var per3=document.createElement("p");
         per3.textContent="*Mkt: Reckitt Benckiser India Ltd";

         var per4=document.createElement("p");
         per4.textContent="*Country of Origin: India";

         var per5=document.createElement("p");
         per5.textContent="*Delivery charges if applicable will be applied at checkout";

         divd.append(per,per1,per2,per3,per4,per5);

         divmin=document.createElement("div");
         divmin.style.borderRadius="10px"
         divmin.style.marginBottom="10px"
         divmin.style.padding="4px"
         divmin.style.width="60%"
         divmin.style.height="40px"
         divmin.style.display="flex";
         divmin.style.gap="150px"
         divmin.style.alignItems="center";
         divmin.style.backgroundColor="rgb(247,236,215)"
         

         var pere=document.createElement("p");
         pere.textContent="Minimum Order Quantity:10";

         var pere1=document.createElement("p");
         pere1.textContent="3 know more"

         divmin.append(pere,pere1);

         var button=document.createElement("button");
         button.textContent="ADD TO CART";
         button.classList="addTocartpage"
         button.addEventListener("click",function(){
            if(check(ele.name)===false){
                addToCartButton(ele)
                popup()
            }else{
                hidepopup()
            }
        })

         var hr1=document.createElement("hr");

         var divexpiry=document.createElement("div");
         divexpiry.setAttribute("id","expiry");
        //  divexpiry.style.display="flex";

         var avail=document.createElement("p");
         avail.textContent="Availability & Expiry"
         avail.style.color="rgb(137,136,140)";
         avail.style.fontSize="20px"

         var delivery=document.createElement("p");
         delivery.textContent="Delivering To"
         delivery.style.color="Black";
         delivery.style.fontSize="20px"

         var span3=document.createElement("span");
         span3.textContent=" 110002";
         span3.style.fontSize="25px"
         
         span3.style.color="rgb(88,206,220)";

         var divavailibity=document.createElement("div");
         divavailibity.classList="divavailibity";
         divavailibity.style.display="flex";
         divavailibity.style.width="300px";
         divavailibity.style.columnGap="20px"
         divavailibity.style.alignItems="center";

        var qwer=document.createElement("div");
         var expirDate=document.createElement("p");
         expirDate.textContent="Expiry Date";
         expirDate.style.color="rgb(136,142,153)"
         expirDate.style.fontSize="16px";
         expirDate.style.fontWeight="bold";

         var date=document.createElement("p");
         date.textContent="May 2026";
         qwer.append(expirDate,date);
         
         var pore=document.createElement("div");
         var vertical=document.createElement("div");
         vertical.classList="vertical";

         var deli=document.createElement("p");
         deli.textContent="Expected Delivery";
         deli.style.color="rgb(136,142,153)";
         deli.style.fontSize="16px"
         deli.style.fontWeight="bold";

         var tommorrow=document.createElement("p");
         tommorrow.textContent="Tomorrow 1 day delivery";

         pore.append(deli,tommorrow);

         divavailibity.append(qwer,vertical,pore);
         divavailibity.style.marginBottom="20px"

         var slide=document.createElement("div");
         slide.style.border="1px solid pink"
         slide.style.borderRadius="10px"
        slide.style.marginBottom="20px"

         var slider1=document.createElement("img");
         slider1.style.width="100%"
         slider1.src="slider1.png";
         slider1.style.borderTopLeftRadius="10px";
         slider1.style.borderTopRightRadius="10px"

         function slide1(){
            slider1.src="slider2.png"
        
        }
        function slide2(){
            slider1.src="slider3.png"
        
        }
        function slide3(){
            slider1.src="slider1.png";
        
        }
        setInterval(slide1,2000);
        setInterval(slide2,4000);
        setInterval(slide3,6000);
         
         slide.append(slider1)

         delivery.append(span3);

         divexpiry.append(avail,delivery);

         
         
         divDetails.append(name,divbtn,divrating,br,hr,price,strikedprice,divd,divmin,button,hr1,divexpiry,divavailibity,slide);
         div.append(divImage,divDetails);
         document.getElementById("desc").append(div);
    })
    
}
function check(name){
    let checkCart=prior.filter(function(ele){
        return name===ele.name;
    })
    if(checkCart.length>0){
        return true;
    }else{
        return false;
    }
}
function popup(){
    setTimeout(()=>{
        document.getElementById('propop').textContent='Item added to cart...'
        document.querySelector('.popup').style.display='block'
    },0)
    setTimeout(()=>{
        document.querySelector('.popup').style.display='none'
    },4000)
    
}
var nam=localStorage.getItem("namesign");
var logout=document.getElementById("user")
// logout.addEventListener("click",gologout)
    document.getElementById("user").textContent=nam

function hidepopup(){
    setTimeout(()=>{
        document.getElementById('propop').textContent='Item is already in cart...'
        document.querySelector('.popup').style.display='block'
    },0)
    setTimeout(()=>{
        document.querySelector('.popup').style.display='none'
    },2000)
}
var addToCartarr=JSON.parse(localStorage.getItem("cart-product"))|| [];
document.getElementById("increaseCount").textContent=addToCartarr.length;
function addToCartButton(ele){
        addToCartarr.push(ele);
        localStorage.setItem("cart-product",JSON.stringify(addToCartarr))
        
       
}
var contentDiv=document.getElementById("button-info");
    document.getElementById("a").style.backgroundColor="white";
    document.getElementById("a").style.color="rgb(108,207,220)";
    // document.getElementById("b").style.backgroundColor="";
    //     document.getElementById("c").style.backgroundColor="";
    //     document.getElementById("d").style.backgroundColor="";
    //     document.getElementById("e").style.backgroundColor="";
    var contentdiv1=document.createElement("div");
        contentdiv1.style.display="flex";
        contentdiv1.style.gap="4px"
        contentdiv1.style.marginBottom="-10px"

        
        var span=document.createElement("p");
        span.textContent="";
        
        
        var description1=document.createElement("p");
        description1.textContent="Dettol Antiseptic Liquid provides protection to you and your family against illness-causing germs and comes in a fresh pine fragrance. The topical antiseptic liquid sanitizes your home and helps maintain your personal hygiene."
  
        var description2=document.createElement('p');
        description2.textContent="The Dettol first aid antiseptic liquid can be used to protect against infection from cuts and scratches, disinfect toys, and sanitize baby wear leaving everything clean and fresh. It can also be used as a household disinfectant and cleaner on surfaces or in laundry cleaning to kill germs. This liquid antiseptic is recommended by the Indian Medical Association and can be kept in your emergency first aid kit. "

        // span.appendChild(description1);

        contentdiv1.append(span,description1)

        contentDiv.append(contentdiv1,description2);
    function infoa(){
        contentDiv.textContent="";
        document.getElementById("a").style.backgroundColor="white";
        document.getElementById("b").style.backgroundColor="";
        document.getElementById("c").style.backgroundColor="";
        document.getElementById("d").style.backgroundColor="";
        document.getElementById("e").style.backgroundColor="";
        document.getElementById("a").style.color="rgb(108,207,220)";
        document.getElementById("b").style.color="";
        document.getElementById("c").style.color="";
        document.getElementById("d").style.color="";
        document.getElementById("e").style.color="";

        var contentdiv1=document.createElement("div");
        contentdiv1.style.display="flex";
        contentdiv1.style.gap="2px"
        contentdiv1.style.marginBottom="-10px"
        
        var span=document.createElement("p");
        span.textContent="";
        
        
        var description1=document.createElement("p");
        description1.textContent="Dettol Antiseptic Liquid provides protection to you and your family against illness-causing germs and comes in a fresh pine fragrance. The topical antiseptic liquid sanitizes your home and helps maintain your personal hygiene."
  
        var description2=document.createElement('p');
        description2.textContent="The Dettol first aid antiseptic liquid can be used to protect against infection from cuts and scratches, disinfect toys, and sanitize baby wear leaving everything clean and fresh. It can also be used as a household disinfectant and cleaner on surfaces or in laundry cleaning to kill germs. This liquid antiseptic is recommended by the Indian Medical Association and can be kept in your emergency first aid kit. "

        // span.appendChild(description1);

        contentdiv1.append(span,description1)

        contentDiv.append(contentdiv1,description2);
    }
    function infob(){
        contentDiv.textContent="";
        document.getElementById("b").style.backgroundColor="white";
        document.getElementById("a").style.backgroundColor="";
        document.getElementById("c").style.backgroundColor="";
        document.getElementById("d").style.backgroundColor="";
        document.getElementById("e").style.backgroundColor="";
        document.getElementById("b").style.color="rgb(108,207,220)";
        document.getElementById("a").style.color="";
        document.getElementById("c").style.color="";
        document.getElementById("d").style.color="";
        document.getElementById("e").style.color="";
        var contentdiv2=document.createElement("div");
        

        var ol=document.createElement("ol");

        var li1=document.createElement("li");
        li1.textContent="Dettol Antiseptic Liquid kills more than 100 illness-causing germs."

        var li2=document.createElement("li");
        li2.textContent="Can be used to disinfect bathing water and disinfect laundry."

        var li3=document.createElement("li");
        li3.textContent="Ideal to be used for First Aid, cleaning cuts and wounds."

        var li4=document.createElement("li");
        li4.textContent="Antiseptic Liquid used to disinfect household items and surfaces."

        var li5=document.createElement("li");
        li5.textContent="Recommended by the Indian Medical Association."

        ol.append(li1,li2,li3,li4,li5);
        contentdiv2.append(ol);
        contentDiv.append(contentdiv2)
    }
    function infoc(){
        contentDiv.textContent="";
        document.getElementById("c").style.backgroundColor="white";
        document.getElementById("a").style.backgroundColor="";
        document.getElementById("b").style.backgroundColor="";
        document.getElementById("d").style.backgroundColor="";
        document.getElementById("e").style.backgroundColor="";
        document.getElementById("c").style.color="rgb(108,207,220)";
        document.getElementById("a").style.color="";
        document.getElementById("b").style.color="";
        document.getElementById("d").style.color="";
        document.getElementById("e").style.color="";

        var contentdiv3=document.createElement("div");
         
        var permit=document.createElement("p");
        permit.textContent="Recommended dilutions to protect your family from germs:";
        
        var ol=document.createElement("ol");
        
         

        var li1=document.createElement("li");
        li1.textContent="First AID: 15ml to 300ml of water"

        var li2=document.createElement("li");
        li2.textContent="Bathing: 5ml in a 10-litre bucket of water"

        var li3=document.createElement("li");
        li3.textContent="Nappy Wash: 12.5ml to 500ml of water"

        var li4=document.createElement("li");
        li4.textContent="Floor Cleaning: 15ml in 1 bucket of water"

       
        ol.append(li1,li2,li3,li4);
        contentdiv3.append(permit,ol);
        contentDiv.append(contentdiv3)


    }
    function infod(){
        contentDiv.textContent="";
        var contentdiv4=document.createElement("div");
        document.getElementById("d").style.backgroundColor="white";
        document.getElementById("b").style.backgroundColor="";
        document.getElementById("c").style.backgroundColor="";
        document.getElementById("a").style.backgroundColor="";
        document.getElementById("e").style.backgroundColor="";
        document.getElementById("d").style.color="rgb(108,207,220)";
        document.getElementById("a").style.color="";
        document.getElementById("b").style.color="";
        document.getElementById("c").style.color="";
        document.getElementById("e").style.color="";

        var ol=document.createElement("ul");

        var li1=document.createElement("li");
        li1.textContent="Avoid contact with eyes"

        var li2=document.createElement("li");
        li2.textContent="In case of contact with eyes rinse with plenty of water"

        var li3=document.createElement("li");
        li3.textContent="If swallowed/ingested seek medical advice immediately and show this container or label"

        var li4=document.createElement("li");
        li4.textContent="Use as directed for best results"

        

        ol.append(li1,li2,li3,li4);
        contentdiv4.append(ol);
        contentDiv.append(contentdiv4)

    }
    function infoe(){
        contentDiv.textContent="";
        var contentdiv5=document.createElement("div");
        document.getElementById("e").style.backgroundColor="white";
        document.getElementById("b").style.backgroundColor="";
        document.getElementById("c").style.backgroundColor="";
        document.getElementById("d").style.backgroundColor="";
        document.getElementById("a").style.backgroundColor="";
        document.getElementById("e").style.color="rgb(108,207,220)";
        document.getElementById("a").style.color="";
        document.getElementById("b").style.color="";
        document.getElementById("d").style.color="";
        document.getElementById("b").style.color="";

        var p=document.createElement("p");
        p.textContent="Key Ingredients: ";
        // p.style.fontWeight="bold";

        var span=document.createElement("span");
        span.textContent="Chloroxylenol I.P. 4.8% w/v, Terpineol B.P. 9.0% v/v, Alcohol (Denatured) eq.to absolute alcohol 13.1% v/v, Contains Caramel as colour, Excipients q.s."

        p.append(span);
        contentdiv5.append(p);
        contentDiv.append(contentdiv5);

    }