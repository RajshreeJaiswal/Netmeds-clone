var dataArr=JSON.parse(localStorage.getItem("cart-product"))|| [];
var total=0;
var totalprice=0;
var payableamount=0;
 var totalmrp=JSON.parse(localStorage.getItem("totalprice"));
 totalpayableam=JSON.parse(localStorage.getItem("tp"));
 var pkj=localStorage.getItem("totalpsb");
displayfun(dataArr);
function displayfun(){
    document.getElementById("divdisplay").textContent="";
    dataArr.map((ele)=>{
        var div=document.createElement("div");

        var divcombine=document.createElement('div');
        divcombine.id="divcombine";

        divImage=document.createElement("div");
        divImage.id="adressImage"

        var img=document.createElement("img");
        img.src=ele.img1;

        divImage.append(img);

        var divDetails=document.createElement("div");
        
        var name=document.createElement("h2");
        name.textContent=ele.name;

        var p=document.createElement('p');
        p.textContent="Mkt: Reckitt Benckiser India Ltd";
        p.style.color="rgb(134,166,206)";

        var per=document.createElement("p");
        per.textContent="Expiry : Jan 2026";

        divDetails.append(name,p,per);

        var divpricepa=document.createElement('div');
        
        
        var price=document.createElement("p");
        price.textContent="Rs. "+ele.price;

        var span1=document.createElement("span");
        span1.textContent="Rs. "+ele.mrp;
        span1.style.textDecoration="line-through"

        var strikedprice=document.createElement("p");
        strikedprice.textContent="MRP "
        strikedprice.style.color="rgb(139,167,201)"
        
        strikedprice.appendChild(span1); 
        divcombine.append(divImage,divDetails)

        divpricepa.append(price,strikedprice);

        div.append(divcombine,divpricepa);
        
        total+=ele.price;
         totalmrp=document.getElementById('totalmrp').textContent="Rs."+total;
        localStorage.setItem("totalprice",JSON.stringify(totalmrp));
        var pankajdis=130
        var discountadditional=document.getElementById("adiscount").textContent="-"+"Rs."+pankajdis;
         var totalpayment=total-pankajdis;
        document.getElementById("totalamount").textContent="Rs."+ pkj;

        totalpayableam=document.getElementById("payabletotal").textContent="Rs."+ pkj;
        // localStorage.setItem("tp",JSON.stringify(totalpayableam))
        // localStorage.setItem("payablemoney",JSON.stringify(totalpayment))
        document.getElementById("totalsave").textContent="Rs."+pankajdis

        document.getElementById("divdisplay").append(div);
    })
}

// var c=document.querySelector("span");
// c.addEventListener("click",closemodal)
document.querySelector("form").addEventListener("submit",funpan);
var arr=JSON.parse(localStorage.getItem("form-address"))|| [];
function funpan(){
    event.preventDefault()
    var pincode=document.getElementById("pin").value;
    var city=document.getElementById("city").value;
    var state=document.getElementById("state").value;
    var namefirst=document.getElementById("namefirst").value;
    var namelast=document.getElementById("namelast").value;
    var address=document.getElementById("address").value;
    var phone=document.getElementById("phone").value;
    var obj={
        pincode:pincode,
        city:city,
        state:state,
        namefirst:namefirst,
        namelast:namelast,
        address:address,
        phone:phone,
    }

	// User Pressed Yes, Do submission //this.submitForm(...);
    function popalert(){
    document.getElementById('addme').textContent=`Please Fill all the Details`
    document.getElementById('addpsb').style.display='block';
    }
    document.getElementById("okmebye").addEventListener("click",()=>{
        plzzcloseit();
    })
    function plzzcloseit(){
       document.getElementById('addpsb').style.display='none';
    }
    
     if(pincode==""||city==""||state==""||namefirst==""||namelast==""||address==""||phone==""){
        popalert()
        return;
     }
    
    arr.push(obj);
    localStorage.setItem("form-address",JSON.stringify(arr));
    displayData();
}

function displayData(){
    document.getElementById("formappend").textContent="";
    arr.map((ele,idx)=>{

   

    var tr=document.createElement("div");

    var td1=document.createElement("p");
    td1.textContent= "Pincode: "+ele.pincode;

    var td2=document.createElement("p");
    td2.textContent="City: "+ele.city;

    var td3=document.createElement("p");
    td3.textContent="State: "+ele.state;

    var td4=document.createElement("p");
    td4.textContent="Name: "+ele.namefirst+" "+ele.namelast;

    


    var td6=document.createElement("p");
    td6.textContent="Address: "+ele.address;

     var td7=document.createElement("p");
    td7.textContent="Phone Number: "+ele.phone;

    var div=document.createElement("div");

    var button=document.createElement("button");
    button.textContent="Remove";
    button.addEventListener("click",()=>{
        removebutton(ele,idx);
    })
    
    div.append(button);
    tr.append(td1,td2,td3,td4,td6,td7);
    document.getElementById("formappend").append(tr,div);
})
}
function removebutton(ele,idx){
         arr.splice(idx,1);
         localStorage.setItem("form-address",JSON.stringify(arr));
         displayData(arr)
}
function showmodal(){
    document.querySelector("#perment").style.display="block";
}

function closemodal(){
    document.querySelector("#perment").style.display="none"
}
var nam=localStorage.getItem("namesign");
var logout=document.getElementById("user")
// logout.addEventListener("click",gologout)
    document.getElementById("user").textContent=nam
