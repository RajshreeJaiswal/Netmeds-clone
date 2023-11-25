function slide1(){
    document.getElementById("slideimage").src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1682530776_VVR_01_Category-Banner_Web_1000x200.jpg"

}
function slide2(){
    document.getElementById("slideimage").src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1671734909_01-11.jpg"

}
function slide3(){
    document.getElementById("slideimage").src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1678301855_11915783-C-Saridon_English_Ecom_NETMEDS_1000_X_200.jpg"

}
setInterval(slide1,2000);
setInterval(slide2,4000);
setInterval(slide3,6000);

var arr=[
    {
        img1:"https://www.netmeds.com/images/product-v1/600x600/405871/diataal_d_capsule_10s_48662_0_1.jpg",
        img2:"https://www.netmeds.com/images/product-v1/600x600/405871/diataal_d_capsule_10s_410151_1_0.jpg",
        img3:"https://www.netmeds.com/images/product-v1/600x600/405871/diataal_d_capsule_10s_410152_2_0.jpg",
        img4:"https://www.netmeds.com/images/product-v1/600x600/405871/diataal_d_capsule_10s_410153_3_0.jpg",
        img5:"https://www.netmeds.com/images/product-v1/600x600/405871/diataal_d_capsule_10s_410154_4_0.jpg",
        name:"Diataal D Capsule 10'S",
        btn1:"Fitness",
        btn2:"Family Nutrition",
        price:120,
        mrp:150,
    },
    {
        img1:"https://www.netmeds.com/images/product-v1/600x600/368144/2baconil_tts20_14mg_patch_7s_44132_0_2.jpg",
        img2:"https://www.netmeds.com/images/product-v1/600x600/368144/2baconil_tts20_14mg_patch_7s_44133_1_2.jpg",
        img3:"https://www.netmeds.com/images/product-v1/600x600/368144/2baconil_tts20_14mg_patch_7s_44134_2_1.jpg",
        img4:"https://www.netmeds.com/images/product-v1/600x600/368144/2baconil_tts20_14mg_patch_7s_44135_3_1.jpg",
        img5:"https://www.netmeds.com/images/product-v1/600x600/368144/2baconil_tts20_14mg_patch_7s_549633_5_0.jpg",
        name:"2baconil TTS20 14mg",
        btn1:"Fitness Smoking",
        btn2:"Cessation Support",
        price:528,
        mrp:724,
    },
    {
        img1:"https://www.netmeds.com/images/product-v1/600x600/413286/nestle_resource_high_protein_powder_vanilla_flavour_400_gm_pet_jar_54785_0_4.jpg",
        img2:"https://www.netmeds.com/images/product-v1/600x600/413286/nestle_resource_high_protein_powder_vanilla_flavour_400_gm_pet_jar_114860_1_3.jpg",
        img3:"https://www.netmeds.com/images/product-v1/600x600/413286/nestle_resource_high_protein_powder_vanilla_flavour_400_gm_pet_jar_114861_2_3.jpg",
        img4:"https://www.netmeds.com/images/product-v1/600x600/413286/nestle_resource_high_protein_powder_vanilla_flavour_400_gm_pet_jar_139683_3_2.jpg",
        img5:"https://www.netmeds.com/images/product-v1/600x600/413286/nestle_resource_high_protein_powder_vanilla_flavour_400_gm_pet_jar_139684_4_2.jpg",
        name:"Nestle Protein Powder",
        btn1:"Fitness",
        btn2:"Family Nutrition",
        price:901,
        mrp:949,
    },
    {
        img1:"https://www.netmeds.com/images/product-v1/600x600/38284/enerzal_orange_flavour_sachet_100gm_34568_0_2.jpg",
        img2:"https://www.netmeds.com/images/product-v1/600x600/38284/enerzal_orange_flavour_sachet_100gm_458442_1_1.jpg",
        img3:"https://www.netmeds.com/images/product-v1/600x600/38284/enerzal_orange_flavour_sachet_100gm_458443_2_1.jpg",
        img4:"https://www.netmeds.com/images/product-v1/600x600/38284/enerzal_orange_flavour_sachet_100gm_548051_3_0.jpg",
        img5:"https://www.netmeds.com/images/product-v1/600x600/38284/enerzal_orange_flavour_sachet_100gm_548052_4_0.jpg",
        name:"Enerzal Orange Flavour",
        btn1:"Fitness Health",
        btn2:"Food And Drinks",
        price:55,
        mrp:70,
    },
    {
        img1:"https://www.netmeds.com/images/product-v1/600x600/851151/ostocalcium_plus_chewable_tablet_30s_588028_0_1.jpg",
        img2:"https://www.netmeds.com/images/product-v1/600x600/851151/ostocalcium_plus_chewable_tablet_30s_588531_1_0.jpg",
        img3:"https://www.netmeds.com/images/product-v1/600x600/851151/ostocalcium_plus_chewable_tablet_30s_588530_2_0.jpg",
        img4:"https://www.netmeds.com/images/product-v1/600x600/851151/ostocalcium_plus_chewable_tablet_30s_588531_1_0.jpg",
        img5:"https://www.netmeds.com/images/product-v1/600x600/851151/ostocalcium_plus_chewable_tablet_30s_588028_0_1.jpg",
        name:"Plus Chewable Tablet",
        btn1:"Fitness",
        btn2:"Vitamins And Supplements",
        price:165,
        mrp:194,
    },
    {
        img1:"https://www.netmeds.com/images/product-v1/600x600/100376/horlicks_health_drink_powder_classic_malt_500_gm_refill_pack_0_1.jpg",
        img2:"https://www.netmeds.com/images/product-v1/600x600/100376/horlicks_health_drink_powder_classic_malt_500_gm_refill_pack_1_0.jpg",
        img3:"https://www.netmeds.com/images/product-v1/600x600/100376/horlicks_health_drink_powder_classic_malt_500_gm_refill_pack_2_0.jpg",
        img4:"https://www.netmeds.com/images/product-v1/600x600/100376/horlicks_health_drink_powder_classic_malt_500_gm_refill_pack_3_0.jpg",
        img5:"https://www.netmeds.com/images/product-v1/600x600/100376/horlicks_health_drink_powder_classic_malt_500_gm_refill_pack_0_1.jpg",
        name:"Horlicks Health Drink",
        btn1:"Fitness",
        btn2:"Family Nutrition",
        price:288,
        mrp:299,
    },
    {
        img1:"https://www.netmeds.com/images/product-v1/600x600/100426/2baconil_tts30_21mg_patch_7s_36473_0_2.jpg",
        img2:"https://www.netmeds.com/images/product-v1/600x600/100426/2baconil_tts30_21mg_patch_7s_36474_1_2.jpg",
        img3:"https://www.netmeds.com/images/product-v1/600x600/100426/2baconil_tts30_21mg_patch_7s_36475_2_1.jpg",
        img4:"https://www.netmeds.com/images/product-v1/600x600/100426/2baconil_tts30_21mg_patch_7s_36476_3_1.jpg",
        img5:"https://www.netmeds.com/images/product-v1/600x600/100426/2baconil_tts30_21mg_patch_7s_549629_5_0.jpg",
        name:"2baconil TTS30 21mg",
        btn1:"Fitness ",
        btn2:"Smoking Cessation Support",
        price:733,
        mrp:977,
    },
    {
        img1:"https://www.netmeds.com/images/product-v1/600x600/350466/sugar_free_gold_powder_100_gm_0_1.jpg",
        img2:"https://www.netmeds.com/images/product-v1/600x600/350466/sugar_free_gold_powder_100_gm_1_0.jpg",
        img3:"https://www.netmeds.com/images/product-v1/600x600/350466/sugar_free_gold_powder_100_gm_2_0.jpg",
        img4:"https://www.netmeds.com/images/product-v1/600x600/350466/sugar_free_gold_powder_100_gm_3_0.jpg",
        img5:"https://www.netmeds.com/images/product-v1/600x600/350466/sugar_free_gold_powder_100_gm_4_0.jpg",
        name:"Sugar Free Gold Powder",
        btn1:"Fitness",
        btn2:"Family Nutrition",
        price:147,
        mrp:150,
    },
    {
        img1:"https://www.netmeds.com/images/product-v1/600x600/404317/protinex_powder_tasty_chocolate_flavour_250_gm_tin_0_2.jpg",
        img2:"https://www.netmeds.com/images/product-v1/600x600/404317/protinex_powder_tasty_chocolate_flavour_250_gm_tin_1_1.jpg",
        img3:"https://www.netmeds.com/images/product-v1/600x600/404317/protinex_powder_tasty_chocolate_flavour_250_gm_tin_2_0.jpg",
        img4:"https://www.netmeds.com/images/product-v1/600x600/404317/protinex_powder_tasty_chocolate_flavour_250_gm_tin_168473_3_1.jpg",
        img5:"https://www.netmeds.com/images/product-v1/600x600/404317/protinex_powder_tasty_chocolate_flavour_250_gm_tin_4_0.jpg",
        name:"Protinex Powder",
        btn1:"Fitness",
        btn2:"Family Nutrition",
        price:402,
        mrp:415,
    },
    {
        img1:"https://www.netmeds.com/images/product-v1/600x600/12773/boost_3x_stamina_powder_500_gm_refill_pack_0_1.jpg",
        img2:"https://www.netmeds.com/images/product-v1/600x600/12773/boost_3x_stamina_powder_500_gm_refill_pack_1_0.jpg",
        img3:"https://www.netmeds.com/images/product-v1/600x600/12773/boost_3x_stamina_powder_500_gm_refill_pack_2_0.jpg",
        img4:"https://www.netmeds.com/images/product-v1/600x600/12773/boost_3x_stamina_powder_500_gm_refill_pack_3_0.jpg",
        img5:"https://www.netmeds.com/images/product-v1/600x600/12773/boost_3x_stamina_powder_500_gm_refill_pack_4_0.jpg",
        name:"Boost 3x Stamina Powder",
        btn1:"Fitness",
        btn2:"Family Nutrition",
        price:293,
        mrp:299,
    },
    {
        img1:"https://www.netmeds.com/images/product-v1/600x600/804123/ensure_diabetes_care_powder_chocolate_flavour_200_gm_refill_pack_0_1.jpg",
        img2:"https://www.netmeds.com/images/product-v1/600x600/804123/ensure_diabetes_care_powder_chocolate_flavour_200_gm_refill_pack_1_0.jpg",
        img3:"https://www.netmeds.com/images/product-v1/600x600/804123/ensure_diabetes_care_powder_chocolate_flavour_200_gm_refill_pack_2_0.jpg",
        img4:"https://www.netmeds.com/images/product-v1/600x600/804123/ensure_diabetes_care_powder_chocolate_flavour_200_gm_refill_pack_3_0.jpg",
        img5:"https://www.netmeds.com/images/product-v1/600x600/804123/ensure_diabetes_care_powder_chocolate_flavour_200_gm_refill_pack_6_0.jpg",
        name:"Ensure Diabetes Powder",
        btn1:"Fitness",
        btn2:"Family Nutrition",
        price:446,
        mrp:460,
    },
    {
        img1:"https://www.netmeds.com/images/product-v1/600x600/113742/revital_h_capsule_10s_37290_0_1.jpg",
        img2:"https://www.netmeds.com/images/product-v1/600x600/113742/revital_h_capsule_10s_443039_1_0.jpg",
        img3:"https://www.netmeds.com/images/product-v1/600x600/113742/revital_h_capsule_10s_443040_2_0.jpg",
        img4:"https://www.netmeds.com/images/product-v1/600x600/113742/revital_h_capsule_10s_443041_3_0.jpg",
        img5:"https://www.netmeds.com/images/product-v1/600x600/113742/revital_h_capsule_10s_443042_4_0.jpg",
        name:"Revital H Capsule 10'S",
        btn1:"Fitness",
        btn2:"Family Nutrition",
        price:93,
        mrp:110,
    },
    
]
// var cart=JSON.parse(localStorage.getItem("product"))||[];

// localStorage.setItem("product",JSON.stringify(cart))
displayData(arr);
function displayData(){
    document.getElementById("product").textContent="";
    arr.map((ele)=>{
       var diva=document.createElement("div")
        var div=document.createElement("div");

        
        // var anchor =document.createElement("a");
        // anchor.src=productdesc.html;
       
        
        var image=document.createElement("img");
        image.setAttribute("src",ele.img1);
        image.addEventListener("click",function(){
            nextPage(ele);
        })
        
    //    anchor.append(image);
        var divname=document.createElement("div");
        
        
        var name=document.createElement('h3');
        name.textContent=ele.name;
       
        divname.append(name)

        var divbtn=document.createElement("div");
        divbtn.classList="divbtn"

        var btn1=document.createElement('button');
        btn1.textContent=ele.btn1;

        var btn2=document.createElement('button');
        btn2.textContent=ele.btn2;

        

        divbtn.append(btn1,btn2);

        var p=document.createElement('p');
        p.textContent="Mkt: Reckitt Benckiser India Ltd";
        p.style.color="rgb(134,166,206)";
        p.style.fontFamily=""

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

        var addtocart=document.createElement("div");
        addtocart.classList="btnadd"

        var cart=document.createElement("button");
        cart.textContent="ADD TO CART";
        cart.addEventListener("click",function(){
            if(check(ele.name)===false){
                addTocart(ele)
                popup()

            }else{
                hidepopup()
                
            }
        })
        addtocart.appendChild(cart);
        div.append(image,divname,divbtn,p,price,strikedprice);
        diva.append(div,addtocart)
        document.getElementById("product").append(diva);



    })
}
var nam=localStorage.getItem("namesign");
var logout=document.getElementById("user")
// logout.addEventListener("click",gologout)
    document.getElementById("user").textContent=nam
function popup(){
    setTimeout(()=>{
        document.getElementById('productpop').textContent='Item added to cart...'
        document.querySelector('.propopup').style.display='block'
    },0)
    setTimeout(()=>{
        document.querySelector('.propopup').style.display='none'
    },4000)
    
}

function hidepopup(){
    setTimeout(()=>{
        document.getElementById('productpop').textContent='Item is already in cart...'
        document.querySelector('.propopup').style.display='block'
    },0)
    setTimeout(()=>{
        document.querySelector('.propopup').style.display='none'
    },2000)
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

var descItem=[];
        function nextPage(ele){
            descItem.push(ele);
            localStorage.setItem("product-desc",JSON.stringify(descItem));
             window.location.href="productdesc.html"
}
var prior=JSON.parse(localStorage.getItem("cart-product"))|| [];
document.getElementById("cartcount").textContent=prior.length;
function addTocart(ele){
    prior.push(ele);
    localStorage.setItem("cart-product",JSON.stringify(prior));
    document.getElementById("cartcount").textContent=prior.length;
    displayData();
}

var lth=document.getElementById("lth").addEventListener("click",lowtoh);
function lowtoh(){
    var filter=arr.sort((a,b)=>{
        return a.price-b.price;
    })
    displayData(filter);
    
}
var htl=document.getElementById("htl").addEventListener("click",htlow);
function htlow(){
    var filterhtl=arr.sort((a,b)=>{
        return b.price-a.price;
    })
    displayData(filterhtl);
    console.log(filterhtl);
}
var pop=document.getElementById("pop").addEventListener("click",pop);
function pop(){
    var filterhtl=arr.sort((a,b)=>{
        return b.price-a.price;
    })
    displayData(filterhtl);
    console.log(filterhtl);
}
var dis=document.getElementById("dis").addEventListener("click",pope);
function pope(){
    var filterdis=arr.sort((a,b)=>{
        if(a.name>b.name) return 1;
        if(a.name<b.name) return -1;
        return 0;
    })
    displayData(filterdis);
    console.log(filterdis);
}