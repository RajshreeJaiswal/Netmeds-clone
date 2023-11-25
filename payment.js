var pay=localStorage.getItem("payablemoney");
var pkj=localStorage.getItem("totalpsb");
function showbutton(){
    document.getElementById("radio").style.display="none"
    // document.getElementById("radio").style.cursor="pointer"
    var btn=document.createElement("button");
    btn.addEventListener("click",()=>{
        redirectTootp();
    })
    btn.textContent="Pay"+" "+"Rs. "+pkj;
    document.getElementById("buttonofpay").append(btn);
    
}
function redirectTootp(){
    window.location.href="./otp.html";
}
var nam=localStorage.getItem("namesign");
var logout=document.getElementById("user")
// logout.addEventListener("click",gologout)
    document.getElementById("user").textContent=nam

// >>>>>>>>>>>>>>>>>>>>>>JS code for form credit
document.addEventListener('DOMContentLoaded', () => {
    for (const el of document.querySelectorAll("[placeholder][data-slots]")) {
    const pattern = el.getAttribute("placeholder"),
    slots = new Set(el.dataset.slots || "_"),
    prev = (j => Array.from(pattern, (c,i) => slots.has(c)? j=i+1: j))(0),
    first = [...pattern].findIndex(c => slots.has(c)),
    accept = new RegExp(el.dataset.accept || "\\d", "g"),
    clean = input => {
    input = input.match(accept) || [];
    return Array.from(pattern, c =>
    input[0] === c || slots.has(c) ? input.shift() || c : c
    );
    },
    format = () => {
    const [i, j] = [el.selectionStart, el.selectionEnd].map(i => {
    i = clean(el.value.slice(0, i)).findIndex(c => slots.has(c));
    return i<0? prev[prev.length-1]: back? prev[i-1] || first: i; }); el.value=clean(el.value).join``; el.setSelectionRange(i, j); back=false; }; let back=false; el.addEventListener("keydown", (e)=> back = e.key === "Backspace");
        el.addEventListener("input", format);
        el.addEventListener("focus", format);
        el.addEventListener("blur", () => el.value === pattern && (el.value=""));
        }
        });
    
    var user_name = document.querySelector(".user_name");
    var set_card_number = document.querySelector(".set_card_number");
    var user_cardcvv = document.querySelector(".user_card_cvv")
    var user_name_input = document.getElementById("user_name_input");
    var user_card_number_input= document.getElementById("user_card_number_input");
    function userName(name){
        
        user_name.innerHTML = name; 
    } 
    
    function userCardNumber(cardNumber){
        set_card_number.innerHTML = cardNumber;
    }
    
    function usercardcvv(cvv){
        user_cardcvv.innerHTML=cvv; 
    }
    
    var card=document.querySelector(".debit-card");
    var click_pay = document.querySelector(".click-pay");
    var left_side = document.querySelector(".left-side");
    var right_side = document.querySelector(".right-side");
    var success = document.querySelector(".success");
    click_pay.addEventListener('click',function(){
        
        
        if(!validateform()){ 
            return false;
        } 
      right_side.style.display="none";
      left_side.classList.toggle('wide');
      left_side.style.display="block";
      card.classList.add('d-none');
         
      setTimeout(function(){
        success.classList.add('success_done');
    }, 2000);
      
    setTimeout(function(){
        success.classList.add('success_final');
    }, 4000);
       

    setTimeout(function(){
        window.location.href="./otp.html"
    },6000)
    });
    
    function validateform(){
        validate=true;
    var validate_inputs=document.querySelectorAll(".right-side input");  
         
         validate_inputs.forEach(function(input_valid){
         input_valid.classList.remove('warning');
         if(input_valid.hasAttribute('require')){
             if(input_valid.value.length==0){
                 validate=false;
                 input_valid.classList.add('warning');
             }
         }
    });
      return validate;
    }
 

    // .////paytm.pop
    function popClick(){
        document.getElementById('shubhamC').style.display='block'
    }
   function closepankajpopup(){
    document.getElementById('shubhamC').style.display='none'
     }









    // ...card.ATTRIBUTE_NODE. this for popUp////////

    function showpopuppay(){
        document.querySelector(".container").style.display="block";
    }
    function closeme(){
        document.querySelector(".container").style.display="none";
    }


    ////phone pay
    function showpaytm(){
        document.getElementById("rdio").style.display="none"
        // document.getElementById("rdio").style.cursor="pointer"
        var btn=document.createElement("button");
        btn.addEventListener("click",()=>{
            redirecttopage();
        })
        btn.textContent="Pay"+" "+"Rs. "+pkj;
        document.getElementById("btnofpaytm").append(btn);
        
    }
    function redirecttopage(){
        window.location.href="./otp.html";
    }



       var tp=JSON.parse(localStorage.getItem("totalprice"));
       var payableam=JSON.parse( localStorage.getItem("tp"));
        var totalmrp=document.getElementById('totalmrp1').textContent=tp;
        
        var pankajdiscount=130
        var discountadditional=document.getElementById("adiscount1").textContent="Rs. "+pankajdiscount;
         var totalpayment=Number(tp)+Number(pankajdiscount);
        document.getElementById("totalamount1").textContent=pkj;

        document.getElementById("payabletotal1").textContent= pkj;
        // localStorage.setItem("payablemoney",JSON.stringify(totalpayment))
        document.getElementById("totalsave1").textContent="Rs."+pankajdiscount




        function redirectme(){
            window.location.href="./otp.html"
        }