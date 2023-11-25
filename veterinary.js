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
    img1:"https://www.netmeds.com/images/product-v1/600x600/1066454/canine_creek_adult_dry_dog_food_ultra_premium_1200_gm_496789_0_0.jpg",
    img2:"https://www.netmeds.com/images/product-v1/600x600/1066454/canine_creek_adult_dry_dog_food_ultra_premium_1200_gm_496790_1_0.jpg",
    img3:"https://www.netmeds.com/images/product-v1/600x600/1066454/canine_creek_adult_dry_dog_food_ultra_premium_1200_gm_496791_2_0.jpg",
    img4:"https://www.netmeds.com/images/product-v1/600x600/1066454/canine_creek_adult_dry_dog_food_ultra_premium_1200_gm_496792_3_0.jpg",
    img5:"https://www.netmeds.com/images/product-v1/600x600/1066454/canine_creek_adult_dry_dog_food_ultra_premium_1200_gm_496793_4_0.jpg",
    name:"Canine Dog Food",
    btn1:"Petcare",
    btn2:"Veterinary",
    price:507,
    mrp:590,
    rateImg:"sale_1_05.jpg",
},
{
    img1:"https://www.netmeds.com/images/product-v1/600x600/1070423/wiggles_floor_cleaner_liquid_pet_friendly_lemongrass_500_ml_526211_0_0.jpg",
    img2:"https://www.netmeds.com/images/product-v1/600x600/1070423/wiggles_floor_cleaner_liquid_pet_friendly_lemongrass_500_ml_512958_1_1.jpg",
    img3:"https://www.netmeds.com/images/product-v1/600x600/1070423/wiggles_floor_cleaner_liquid_pet_friendly_lemongrass_500_ml_512959_2_1.jpg",
    img4:"https://www.netmeds.com/images/product-v1/600x600/1070423/wiggles_floor_cleaner_liquid_pet_friendly_lemongrass_500_ml_512960_3_1.jpg",
    img5:"https://www.netmeds.com/images/product-v1/600x600/1070423/wiggles_floor_cleaner_liquid_pet_friendly_lemongrass_500_ml_512961_4_1.jpg",
    name:"Wiggles Floor Cleaner",
    btn1:"Veterinary",
    btn2:"Petcare",
    price:219,
    mrp:399,
    rateImg:"sale_1_05.jpg",
},
{
    img1:"https://www.netmeds.com/images/product-v1/600x600/1063443/natural_remedies_natlife_paste_30_ml_481341_0_0.jpg",
    img2:"https://www.netmeds.com/images/product-v1/600x600/1063443/natural_remedies_natlife_paste_30_ml_481342_1_0.jpg",
    img3:"https://www.netmeds.com/images/product-v1/600x600/1063443/natural_remedies_natlife_paste_30_ml_481343_2_0.jpg",
    img4:"https://www.netmeds.com/images/product-v1/600x600/1063443/natural_remedies_natlife_paste_30_ml_481344_3_0.jpg",
    img5:"https://www.netmeds.com/images/product-v1/600x600/1063443/natural_remedies_natlife_paste_30_ml_481345_4_0.jpg",
    name:"Natural Natlife Paste",
    btn1:"Veterinary",
    btn2:"Petcare",
    price:408,
    mrp:480,
    rateImg:"sale_1_05.jpg",
},
{
    img1:"https://www.netmeds.com/images/product-v1/600x600/1066456/drools_absolute_milk_bone_jar_dog_treats_new_40s_496801_0_0.jpg",
    img2:"https://www.netmeds.com/images/product-v1/600x600/1066456/drools_absolute_milk_bone_jar_dog_treats_new_40s_496802_1_0.jpg",
    img3:"https://www.netmeds.com/images/product-v1/600x600/1066456/drools_absolute_milk_bone_jar_dog_treats_new_40s_496803_2_0.jpg",
    img4:"https://www.netmeds.com/images/product-v1/600x600/1066456/drools_absolute_milk_bone_jar_dog_treats_new_40s_496804_3_0.jpg",
    img5:"https://www.netmeds.com/images/product-v1/600x600/1066456/drools_absolute_milk_bone_jar_dog_treats_new_40s_496805_4_0.jpg",
    name:"Drools Milk Bone Jar",
    btn1:"Veterinary",
    btn2:"Petcare",
    price:391,
    mrp:460,
    rateImg:"sale_1_05.jpg",
},
{
    img1:"https://www.netmeds.com/images/product-v1/600x600/1066538/purepet_mutton_flavour_real_chicken_biscuit_dog_treats_jar_455_gm_497562_0_0.jpg",
    img2:"https://www.netmeds.com/images/product-v1/600x600/1066538/purepet_mutton_flavour_real_chicken_biscuit_dog_treats_jar_455_gm_497563_1_0.jpg",
    img3:"https://www.netmeds.com/images/product-v1/600x600/1066538/purepet_mutton_flavour_real_chicken_biscuit_dog_treats_jar_455_gm_497564_2_0.jpg",
    img4:"https://www.netmeds.com/images/product-v1/600x600/1066538/purepet_mutton_flavour_real_chicken_biscuit_dog_treats_jar_455_gm_497565_3_0.jpg",
    img5:"https://www.netmeds.com/images/product-v1/600x600/1066538/purepet_mutton_flavour_real_chicken_biscuit_dog_treats_jar_455_gm_497566_4_0.jpg",
    name:"Purepet Mutton Flavour",
    btn1:"Veterinary",
    btn2:"Petcare",
    price:169,
    mrp:199,
    rateImg:"sale_1_05.jpg",
},
{
    img1:"https://www.netmeds.com/images/product-v1/600x600/1066495/drools_100_vegetarian_adult_dry_dog_food_3_kg_with_free_1_2kg_4200_gm_497050_0_0.jpg",
    img2:"https://www.netmeds.com/images/product-v1/600x600/1066495/drools_100_vegetarian_adult_dry_dog_food_3_kg_with_free_1_2kg_4200_gm_497051_1_0.jpg",
    img3:"https://www.netmeds.com/images/product-v1/600x600/1066495/drools_100_vegetarian_adult_dry_dog_food_3_kg_with_free_1_2kg_4200_gm_497052_2_0.jpg",
    img4:"https://www.netmeds.com/images/product-v1/600x600/1066495/drools_100_vegetarian_adult_dry_dog_food_3_kg_with_free_1_2kg_4200_gm_497053_3_0.jpg",
    img5:"https://www.netmeds.com/images/product-v1/600x600/1066495/drools_100_vegetarian_adult_dry_dog_food_3_kg_with_free_1_2kg_4200_gm_497054_4_0.jpg",
    name:"Drools Vegetarian Dog Food",
    btn1:"Veterinary",
    btn2:"Petcare",
    price:645,
    mrp:760,
    rateImg:"sale_1_05.jpg",
},
{
    img1:"https://www.netmeds.com/images/product-v1/600x600/1066461/drools_absolute_vitamin_tablet_dog_supplement_50s_496834_0_0.jpg",
    img2:"https://www.netmeds.com/images/product-v1/600x600/1066461/drools_absolute_vitamin_tablet_dog_supplement_50s_496835_1_0.jpg",
    img3:"https://www.netmeds.com/images/product-v1/600x600/1066461/drools_absolute_vitamin_tablet_dog_supplement_50s_496836_2_0.jpg",
    img4:"https://www.netmeds.com/images/product-v1/600x600/1066461/drools_absolute_vitamin_tablet_dog_supplement_50s_496837_3_0.jpg",
    img5:"https://www.netmeds.com/images/product-v1/600x600/1066461/drools_absolute_vitamin_tablet_dog_supplement_50s_496838_4_0.jpg",
    name:"Drools Vitamin Tablet",
    btn1:"Veterinary",
    btn2:"Petcare",
    price:235,
    mrp:270,
    rateImg:"sale_1_05.jpg",
},
{
    img1:"https://www.netmeds.com/images/product-v1/600x600/1065664/whiskas_adult_chicken_in_gravy_pack_of_85gm_x_24_4080_gm_495890_0_0.jpg",
    img2:"https://www.netmeds.com/images/product-v1/600x600/1065664/whiskas_adult_chicken_in_gravy_pack_of_85gm_x_24_4080_gm_495891_1_0.jpg",
    img3:"https://www.netmeds.com/images/product-v1/600x600/1065664/whiskas_adult_chicken_in_gravy_pack_of_85gm_x_24_4080_gm_495892_2_0.jpg",
    img4:"https://www.netmeds.com/images/product-v1/600x600/1065664/whiskas_adult_chicken_in_gravy_pack_of_85gm_x_24_4080_gm_495893_3_0.jpg",
    img5:"https://www.netmeds.com/images/product-v1/600x600/1065664/whiskas_adult_chicken_in_gravy_pack_of_85gm_x_24_4080_gm_495894_4_0.jpg",
    name:"Whiskas Adult Chicken",
    btn1:"Veterinary",
    btn2:"Petcare",
    price:1904,
    mrp:1999,
    rateImg:"sale_1_05.jpg",
},
{
    img1:"https://www.netmeds.com/images/product-v1/600x600/1066589/canine_creek_adult_dry_dog_food_ultra_premium_4000_gm_497909_0_0.jpg",
    img2:"https://www.netmeds.com/images/product-v1/600x600/1066589/canine_creek_adult_dry_dog_food_ultra_premium_4000_gm_497910_1_0.jpg",
    img3:"https://www.netmeds.com/images/product-v1/600x600/1066589/canine_creek_adult_dry_dog_food_ultra_premium_4000_gm_497911_2_0.jpg",
    img4:"https://www.netmeds.com/images/product-v1/600x600/1066589/canine_creek_adult_dry_dog_food_ultra_premium_4000_gm_497912_3_0.jpg",
    img5:"https://www.netmeds.com/images/product-v1/600x600/1066589/canine_creek_adult_dry_dog_food_ultra_premium_4000_gm_497914_5_0.jpg",
    name:"Canine Dog Food",
    btn1:"Veterinary",
    btn2:"Petcare",
    price:1760,
    mrp:2200,
    rateImg:"sale_1_05.jpg",
},
{
    img1:"https://www.netmeds.com/images/product-v1/600x600/1065576/whiskas_junior_ocean_fish_flavor_with_milk_3000_gm_495211_0_0.jpg",
    img2:"https://www.netmeds.com/images/product-v1/600x600/1065576/whiskas_junior_ocean_fish_flavor_with_milk_3000_gm_495212_1_0.jpg",
    img3:"https://www.netmeds.com/images/product-v1/600x600/1065576/whiskas_junior_ocean_fish_flavor_with_milk_3000_gm_495213_2_0.jpg",
    img4:"https://www.netmeds.com/images/product-v1/600x600/1065576/whiskas_junior_ocean_fish_flavor_with_milk_3000_gm_495214_3_0.jpg",
    img5:"https://www.netmeds.com/images/product-v1/600x600/1065576/whiskas_junior_ocean_fish_flavor_with_milk_3000_gm_495215_4_0.jpg",
    name:"Whiskas Ocean Fish Flavor",
    btn1:"Veterinary",
    btn2:"Petcare",
    price:1012,
    mrp:1100,
    rateImg:"sale_1_05.jpg",
},
{
    img1:"https://www.netmeds.com/images/product-v1/600x600/1070423/wiggles_floor_cleaner_liquid_pet_friendly_lemongrass_500_ml_526211_0_0.jpg",
    img2:"https://www.netmeds.com/images/product-v1/600x600/1070423/wiggles_floor_cleaner_liquid_pet_friendly_lemongrass_500_ml_512958_1_1.jpg",
    img3:"https://www.netmeds.com/images/product-v1/600x600/1070423/wiggles_floor_cleaner_liquid_pet_friendly_lemongrass_500_ml_512959_2_1.jpg",
    img4:"https://www.netmeds.com/images/product-v1/600x600/1070423/wiggles_floor_cleaner_liquid_pet_friendly_lemongrass_500_ml_512960_3_1.jpg",
    img5:"https://www.netmeds.com/images/product-v1/600x600/1070423/wiggles_floor_cleaner_liquid_pet_friendly_lemongrass_500_ml_512961_4_1.jpg",
    name:"Wiggles Floor Cleaner",
    btn1:"Veterinary",
    btn2:"Petcare",
    price:219,
    mrp:399,
    rateImg:"sale_1_05.jpg",
},
{
    img1:"https://www.netmeds.com/images/product-v1/600x600/1069361/wiggles_kittystix_cat_treats_chicken_herbs_70_gm_495013_0_2.jpg",
    img2:"https://www.netmeds.com/images/product-v1/600x600/1069361/wiggles_kittystix_cat_treats_chicken_herbs_70_gm_495014_1_2.jpg",
    img3:"https://www.netmeds.com/images/product-v1/600x600/1069361/wiggles_kittystix_cat_treats_chicken_herbs_70_gm_495015_2_2.jpg",
    img4:"https://www.netmeds.com/images/product-v1/600x600/1069361/wiggles_kittystix_cat_treats_chicken_herbs_70_gm_495016_3_2.jpg",
    img5:"https://www.netmeds.com/images/product-v1/600x600/1069361/wiggles_kittystix_cat_treats_chicken_herbs_70_gm_495017_4_2.jpg",
    name:"Wiggles Chicken & Herbs 70 gm",
    btn1:"Veterinary",
    btn2:"Petcare",
    price:169,
    mrp:239,
    rateImg:"sale_1_05.jpg",
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

        

        var image=document.createElement("img");
        image.setAttribute("src",ele.img1);
        image.addEventListener("click",function(){
            nextPage(ele);
        })

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
        cart.addEventListener("click",()=>{
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
var nam=localStorage.getItem("namesign");
var logout=document.getElementById("user")
// logout.addEventListener("click",gologout)
    document.getElementById("user").textContent=nam
var descItem=[];
        function nextPage(ele){
            descItem.push(ele);
            localStorage.setItem("product-desc",JSON.stringify(descItem));
             window.location.href="productdesc.html"
}
var prior=JSON.parse(localStorage.getItem("cart-product"))|| [];
document.getElementById("cartcount").textContent=prior.length
function addTocart(ele){
    prior.push(ele);
    localStorage.setItem("cart-product",JSON.stringify(prior));
    document.getElementById("cartcount").textContent=prior.length
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
// {
//     img1:"",
//     img2:"",
//     img3:"",
//     img4:"",
//     img5:"",
//     name:"",
//     btn1:"",
//     btn2:"",
//     price:,
//     mrp:,
// },