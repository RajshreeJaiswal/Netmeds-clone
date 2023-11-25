const swiper = new Swiper('.swiper', {
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },
    loop: true,
  
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

  });


  var nam=localStorage.getItem("namesign");
  var logout=document.getElementById("user")
  // logout.addEventListener("click",gologout)
      document.getElementById("user").textContent=nam
var cart=JSON.parse(localStorage.getItem("cart-product"))||[];


if(cart.length==0){
  var divw=document.createElement("div");
  var img=document.createElement("img");
  img.src="cartempty.png";
  img.style.width="100%"
  var btn2=document.createElement("button");
  btn2.textContent="ADD PRODUCTS";
  btn2.style.margin="auto";
  btn2.addEventListener("click",function addsomething(){
     window.location.href="./product.html";
  })
  divw.append(img,btn2);
 document.getElementById("cartpage").append(divw)
}else{
  displayCartprod()
  console.log(cart.length);
  function displayCartprod(){
    document.getElementById('dataappenddiv').textContent="";
    cart.map((ele,idx)=>{
        var div=document.createElement("div");
        
        var divImage1=document.createElement("div");
        divImage1.id="divcartImage";

        var ImagedivDetail=document.createElement("div");
        ImagedivDetail.id="ImagedivDetail";

        var image=document.createElement("img");
        image.src=ele.img1;

        divImage1.append(image);

        var divDetailsCart=document.createElement("div");
        divDetailsCart.id="divDetailsCart";

        var name=document.createElement('h2');
        name.textContent=ele.name;

        var mfr=document.createElement("p");
        mfr.textContent="Mkt: Reckitt Benckiser India Ltd";

        var price=document.createElement("p");
        price.textContent="₹"+ele.price;

        var mrp=document.createElement("p");
        mrp.textContent="₹"+ele.mrp;

        var  p=document.createElement("p");
        p.textContent="Delivery between JUNE 06-JUNE 07"

        divDetailsCart.append(name,mfr,price,mrp,p);

        var deleteQty=document.createElement("div");
        deleteQty.id="deleteQty";

        var button=document.createElement("button");
        button.textContent="Remove";
        button.addEventListener("click",()=>{
          RemoveItem(ele,idx);
        })

        var divQuantity=document.createElement("div");
        divQuantity.id="divQuantity"

        var quantity=document.createElement("h2");
        quantity.textContent="Qty";

        var span=document.createElement("span");
        span.textContent=""+"1";

        document.getElementById("cartcount").textContent=cart.length;


      var increase=document.createElement("button");
      increase.setAttribute("id","btn")
         increase.textContent="+";
         increase.onclick=function(){
           increaseval(span.textContent);
         };
         function increaseval(value){
             var pr=parseInt(value)+1;
             var va=pr*Number(ele.price);
             var ver=pr*Number(ele.mrp);
             span.textContent=pr;
             price.textContent="₹"+va;
             mrp.textContent="₹"+ver;
             var a= document.getElementById("total").textContent;
            var last=Number(a)+Number(ele.price);
            var dis=130
            document.getElementById("total").textContent=(last);
            document.getElementById("adi").textContent=dis;
    var totalAmountof=parseInt(last)-Number(dis)
    document.getElementById("tota").textContent=totalAmountof
    document.getElementById("payabl").textContent=totalAmountof
    document.getElementById("save").textContent=dis;
    document.getElementById("proicediv").textContent=totalAmountof

         }
        
         var decrease=document.createElement("button");
         decrease.setAttribute("id","btn")
         decrease.textContent="-";
         decrease.onclick=function(){
           decreaseval(span.textContent);
         };
         function decreaseval(value){
           if(value==1){
               return ;
            }else{
           var pr=parseInt(value)-1;
           var va=pr*Number(ele.price)
           var ver=pr*Number(ele.mrp);
           span.textContent=pr;
             price.textContent="₹"+va;
             mrp.textContent="₹"+ver;
         var a= document.getElementById("total").textContent;
      var last=parseInt(a)-parseInt(ele.price);
       document.getElementById("total").textContent=(last);
       var dis=130;
       document.getElementById("total").textContent=(last);
       document.getElementById("adi").textContent=dis;
          var totalAmountof=Number(last)-Number(dis)
           document.getElementById("tota").textContent=totalAmountof
        document.getElementById("payabl").textContent=totalAmountof
           document.getElementById("save").textContent=dis;
           document.getElementById("proicediv").textContent=totalAmountof
       }
       
           } 
           ImagedivDetail.append(divImage1,divDetailsCart)
           quantity.append(span);

           divQuantity.append(increase,quantity,decrease);
           deleteQty.append(button,divQuantity)
           div.append(ImagedivDetail,deleteQty);

           document.getElementById('dataappenddiv').append(div);



    })
    


  }
  function RemoveItem(ele,idx){
         cart.splice(idx,1);
         localStorage.setItem("cart-product",JSON.stringify(cart));
         displayCartprod();
         totalprice();
  }
  totalprice(cart)
 
  function totalprice(){
    var total=0;
    var dis=130;
    for(var i=0;i<cart.length;i++){
      total+=parseInt(cart[i].price);
    }
    document.getElementById("total").textContent=total;
    document.getElementById("adi").textContent=dis;
    var totalAmountof=parseInt(total)-parseInt(dis)
    document.getElementById("tota").textContent=totalAmountof
    document.getElementById("payabl").textContent=totalAmountof
    document.getElementById("save").textContent=dis;
    document.getElementById("proicediv").textContent=totalAmountof
  }

  function funper(){
    var div=document.createElement("div")
    var input=document.createElement("input");
    input.id="promo";
    
    var button=document.createElement("button");
    button.textContent="Apply"
    button.addEventListener("click",function(){
      checkpu();
    })
   
    div.append(input,button);
    document.getElementById("Apply").append(div);
    // document.getElementById("radeo").style.display="none";
    // document.getElementById("apllyp").style.textAlign="center";
  }
  function checkpu(){
    // event.preventDefault();
        var ch = document.getElementById("promo").value;
        console.log(ch);
        if(ch =="masai30"){
            var temp = document.createElement("p");
            temp.setAttribute("class","hurry");
            temp.style.color="white";
            temp.style.marginBottom="20px"
            temp = "Hurray!... You got 30% off";
            var btn=document.createElement("button");
            btn.textContent="OK";
            btn.id="okhurry";
            btn.addEventListener("click",()=>{
             okHurryClose()
            })
            document.querySelector('.hurrypopup').append(temp,btn)
            
            document.querySelector('.hurrypopup').style.display="block";
            var t = parseInt(document.getElementById("total").textContent);
            var change = (t*3)/10;
            document.getElementById("total").textContent = t - change;
           

    
    document.getElementById("tota").textContent= t - change;
    var pkj= document.getElementById("payabl").textContent= t - change;
    localStorage.setItem("totalpsb",JSON.stringify(pkj))
    
    document.getElementById("proicediv").textContent= t - change;
        }
    }
  }


      
    function okHurryClose(){
      document.querySelector('.hurrypopup').style.display='none'
    }


    document.getElementById("nextbutton").addEventListener("click",()=>{
      nextPageadd();
    })
    function nextPageadd(){
      window.location.href="./address.html"
    }