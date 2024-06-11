function validateForm(x){
    let email = document.getElementById("email-data").value
    let password = document.getElementById("password-data").value

    if (x==1){
        let conPass = document.getElementById("confirm-password-data").value
        if (conPass != password){
            document.getElementById("error-confirm-password").innerHTML = "Confirm password must be the same as the previous password"
            valid = false
        }else{
            document.getElementById("error-confirm-password").innerHTML = ""
        }
    }

    let valid = true;

    if (!email.endsWith("@gmail.com")){
        document.getElementById("error-email").innerHTML = "Email must end with @gmail.com"
        valid = false
    }else{
        document.getElementById("error-email").innerHTML = ""
    }

    if (!alphanumeric(password)){
        document.getElementById("error-password").innerHTML = "Password must be alpha numeric"
        valid = false
    }else if(password.length<8){
        document.getElementById("error-password").innerHTML = "Password must be at least 8 characters"
        valid = false
    }else{
        document.getElementById("error-password").innerHTML = ""
    }

    if (valid){
        window.location.href = "home.html";
    }
}

function alphanumeric(password){
    let isAlpha = false
    let isNumeric = false

    for (let i=0; i<password.length; i++){
        if(isNaN(password[i]) == true){
            isAlpha = true
        }else{
            isNumeric = true
        }
    }

    if (isAlpha == true && isNumeric == true){
        return true
    }else{
        return false
    }
}

function viewmap(layer){
    let overview = document.getElementById("view-all")
    overview.style.display = "none"

    let view1 = document.getElementById("view-map-1")
    let view2 = document.getElementById("view-map-2")
    let view3 = document.getElementById("view-map-3")
    let view4 = document.getElementById("view-map-4")

    if (layer == 1){
        view2.style.display = "none"
        view3.style.display = "none"
        view4.style.display = "none"
        view1.style.display = "block"
    }else if (layer == 2){
        view1.style.display = "none"
        view3.style.display = "none"
        view4.style.display = "none"
        view2.style.display = "block"
    }else if (layer == 3){
        view1.style.display = "none"
        view2.style.display = "none"
        view4.style.display = "none"
        view3.style.display = "block"
    }else if (layer == 4){
        view1.style.display = "none"
        view2.style.display = "none"
        view3.style.display = "none"
        view4.style.display = "block"
    }
}

function viewall(){
    let map1 = document.getElementById("view-map-1")
    let map2 = document.getElementById("view-map-2")
    let map3 = document.getElementById("view-map-3")
    let map4 = document.getElementById("view-map-4")

    map1.style.display = "none"
    map2.style.display = "none"
    map3.style.display = "none"
    map4.style.display = "none"

    let overview = document.getElementById("view-all")
    overview.style.display = "flex"
}

function openSettings(){
    let content = document.getElementById("settings")

    if (content.style.display == "block"){
        content.style.display = "none"
    }else{
        content.style.display = "block"
    }
}

function showSide(){
    const menu = document.querySelector('.sidebar')
    menu.style.display = 'flex'
}

function hideSide(){
    const menu = document.querySelector('.sidebar')
    menu.style.display = 'none'
}

function openSettingsSide(){
    let content = document.getElementById("settingsSide")

    if (content.style.display == "block"){
        content.style.display = "none"
    }else{
        content.style.display = "block"
    }
}

const Tenant = {
    haidilao: {
        img: "/img/tenant-1.jpg",
        desc: "Haidilao International Holding Ltd., or Haidilao (Chinese: 海底捞), is a Chinese hot pot chain renowned for industrial innovation and robotic automation. Founded in Jianyang, Sichuan in 1994, it has since grown to become China's largest hot pot chain."
    },
    zara: {
        img: "/img/tenant-2.jpg",
        desc: "Zara is a fast-fashion retail subsidiary of the Spanish multinational fashion design, manufacturing, and retailing group Inditex. Zara sells clothing, accessories, beauty products and perfumes. The head office is located at Arteixo."
    },
    balenciaga: {
        img: "/img/tenant-3.jpg",
        desc: "Balenciaga is a Spanish luxury fashion line that was founded in 1919 by couturier Cristóbal Balenciaga in San Sebastián. Balenciaga produces ready-to-wear footwear, handbags, and accessories, and licenses its name to Coty for fragrances."
    },
    uniqlo: {
        img: "/img/tenant-4.jpg",
        desc: "UNIQLO is an international clothing retailer that has a specialized knack for designing apparel that lasts. The simple, basics-inspired clothing created at UNIQLO continues to be successful trend cycle after trend cycle."
    },
    gyukaku: {
        img: "/img/tenant-5.jpg",
        desc: "Gyu-Kaku provides an authentic Japanese Yakiniku dining experience where anyone can be a chef and grill their own food, complete with a wonderful atmosphere perfect for gathering of friends and families."
    },
    hnm: {
        img: "/img/tenant-6.jpg",
        desc: "H & M Hennes & Mauritz AB, also known as H&M Group, is a multinational clothing company based in Sweden that focuses on fast-fashion clothing. As of 23 June 2022, H&M Group operated in 75 geographical markets with 4,801 stores."
    },
    xxi: {
        img: "/img/tenant-7.jpg",
        desc: "Cinema XXI presents an unforgettable viewing experience for today and tomorrow. For three consecutive years in 2017, 2018, 2019 Cinema XXI has been awarded the (World Branding Award) the Best Brand in the Entertainment Cinema Category. "
    },
    ibox: {
        img: "/img/tenant-8.jpg",
        desc: "iBox is a leading Reseller of Premium Apple Products in Indonesia which specializes in offering Apple products and various kinds of complementary accessories, software and others. iBox offers one-stop Apple digital lifestyle shopping."
    },
    timezone: {
        img: "/img/tenant-9.jpg",
        desc: "PT. Matahari Graha Fantasi is a joint venture company between LAI Asia Pte. Ltd (Leisure and Allied Industries) Singapore and PT. Nadya Prima Indonesia easily recognizable by its Timezone brand. We are the pioneer in the Family Entertainment Center industry."
    },
    wingstop: {
        img: "/img/tenant-10.jpg",
        desc: "Wingstop as The Wing Experts is dedicated to SERVING THE WORLD FLAVOR, offering chicken wings in the Crunchy Wings variant with bones or Boneless Wings which are available without bones."
    },
    kfc: {
        img: "/img/tenant-11.jpg",
        desc: "KFC Indonesia is an American fast food restaurant chain that specializes in fried chicken, established in 1978, has become synonymous with finger-lickin' good chicken, holding the title of #JagonyaAyam (The Master of Chicken) for over four decades."
    },
    jco: {
        img: "/img/tenant-12.jpg",
        desc: "J.CO Donuts & Coffee is an Indonesian cafe restaurant chain that specializes in donuts, coffee and frozen yogurt. J.CO is the fastest growing donut and coffee chain in Indonesia with 236 stores opened since 2005."
    }   
}

function openTenant(category){
    const tenantContent = document.getElementById('view-tenant');
    tenantContent.innerHTML = '';
    
    currTenant = Tenant[category]

    tenantContent.innerHTML = `
        <img src="${currTenant.img}" alt="">
        <div id="tenant-content" class="flex flow-column gap gap-4">
            <img src="/img/x.png" onclick="closeTenant()" alt="">
            <h3 class="text white">${currTenant.desc}</h3>
        </div>
    `
}

function closeTenant(){
    const tenantContent = document.getElementById('view-tenant');
    tenantContent.innerHTML = '';
}