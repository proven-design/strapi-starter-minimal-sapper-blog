let header = document.createElement('header');
let bfMenu = document.createElement('nav');
let sefMenu = document.createElement('nav');
let loginBand = document.createElement('div');
let currentWidth = getWidth();
window.onresize = currentWidth;


function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }



function getPhone(phoneNumber) {
  phoneNumber = '877.857.7259';
  if (document.URL.includes('efairs') || document.URL.includes('home')) {
    phoneNumber = '888.511.5114';
    return phoneNumber;
  }
  else {
    return phoneNumber;
  }
  return phoneNumber;
}

bfMenu.classList.add('menu', 'bookfairs', 'hover-menu');
sefMenu.classList.add('menu', 'efairs', 'hover-menu');

header.innerHTML = `
<nav role="navigation" class="header">
  <a href="/" alt="Follett Book Fairs Logo">
  <img src="https://follettbookfairs.com/images/FBF-White.png" width="224">
  </a>
  <a class="hide-670"></a>
  <a class="hide-899 hide-670 hide-1220"></a>
  <a href="/bookfairs" class="a-bg-white hide-460 bfLink hover-menu" data-menu="bfMenu">Book Fairs</a>
  <a href="/schoolefairs" class="a-bg-white hide-460 sefLink hover-menu"  data-menu="sefMenu">Online Book Fairs</a>
  <a href="/mission" class="hide-899">Our Mission</a>  
  <a class="nav-number hide-899" href="tel:${getPhone()}">${getPhone()}</a>
  <button class="btn btn-orange nav-btn learnMore">Get Started</button>
 
  <button class="header__menu-button toggle-menu hamburger">
<div class="header__menu-button-content">
  <div class="header__menu-button-icon">
    <span class="icon--menu"></span>
  </div>
   </div>
</button>
</nav>

`;

document.body.insertAdjacentElement('afterbegin', header);

loginBand.innerHTML = `
<div style="height: 23px;width: 100%;background: white;display: flex;flex-direction: column-reverse;max-width: ;text-align: right;"><div style="/*! margin: 0 auto; */width: 100%;max-width: 1220px;margin: 0 auto;display: flex;flex-direction: row-reverse;"><a href="" style="font-size: 14px;">Already have an account? <strong> Log in here</strong></a><div style="margin: 0 auto;max-width: 1140px;"></div></div></div>
`;

header.insertAdjacentElement('afterbegin', loginBand);


bfMenu.innerHTML = `

    <a href="#" class="mobile-only">
    <h5>Book Fairs</h5> 
    </a>

    <section class="mobile-only">
        <a href="/bookfairs" class="mobile-only">
        <h5>Book Fairs Home</h5> 
        </a>

    </section>

    <section>
        <a href="/selection/">
        <h5>Book Selection</h5> 
        </a>
        <a href="/selection/">Book Selection</a>
        <a href="/title-highlights/">Title highlights flyers</a>
        <a href="/title-highlights/#videos">Title highlights videos</a>
        <a href="/title-highlights/#talks">Title Talks</a>
    </section>

    <section>
        <a href="/running-your-fair/">
        <h5>Running Your Fair</h5>
        </a>

        <a href="/running-your-fair/">Running Your Fair</a>
        <a href="/running-your-fair/training/">Webinars</a>
        <a href="/running-your-fair/#low-touch">Low-touch Fair</a>
        <a href="https://insider.follettbookfairs.com" target="_blank">Book Fair
        Insider</a>

    </section>

    <section>
        <a href="/rewards/">
        <h5>Rewards</h5>
        </a>
        <a href="/rewards/">Rewards Program</a>
        <a href="https://shop.follettbookfairs.com/" target="_blank">Redeem Your
        Rewards</a>
    </section>

    <section>
        <a href="/gift-cards" target="_blank">
        <h5>Gift Cards</h5>
        </a>
        <a href="/gift-cards">Gift Cards</a>
        <a href="https://www.giftfly.com/shop/follett-book-fairs#select-gift-card" target="_blank">Purchase Gift Cards</a>
        <a href="https://shop.follettbookfairs.com" target="_blank">Shop the
        Book Store</a>
    </section>
<!--
    <section>
    <a href="/testimonials/"> <h5 style="">What People Are Saying</h5></a>
    <a href="/testimonials/">What People Are Saying</a>
    </section>

    <section>
    <a href="/themes/"> <h5 style="">Themes</h5></a>
    <a href="/themes/">Book Fair Themes</a>
    </section> -->

    <section class="featured-banner">
      <a href="/#content">
        <img src="https://cdn.brandfolder.io/EZCQY9GG/as/q484vs-4n14zs-k4p2p/publisher-banner.jpg" alt="Featured Publisher Banner">
        </a>
    </section>

`;

/* School eFairs Menu 
___________________________________________________________
 */

sefMenu.innerHTML = `

<a href="/schoolefairs/" class="mobile-only">
<h5>Online Book Fairs</h5> 
</a>

<section class="mobile-only">
<a href="/schoolefairs" class="mobile-only">
<h5>Online Book Fairs Home</h5> 
</a>

</section>
    <section>
        <a href="/schoolefairs/selection/">
        <h5>Book Selection</h5> 
        </a>
        <a href="/schoolefairs/selection/">Book Selection</a>
        <a href="/schoolefairs/title-highlights/">Title highlights flyers</a>
        <a href="/schoolefairs/title-highlights#videos">Title highlights videos</a>
        <a href="/schoolefairs/title-highlights#talks">Title Talks</a>
    </section>

    <section>
    <a href="/schoolefairs/running-your-efair/">
    <h5>Running Your eFair</h5>
    </a>
        <a href="/schoolefairs/running-your-efair/">Running Your eFair</a>
        <a href="https://follettcommunity.force.com/registration/s/login/SelfRegister" target="_blank">Start Your eFair</a>
        <a href="https://cdn.brandfolder.io/9PA1UQVX/as/q7ejdi-211cmw-81xekm/eFair_Customer_FAQ.pdf" target="_blank">School eFairs F.A.Q.</a>
  <!--  <a href="/testimonials">Testimonials</a> -->
    </section>

    <section>
        <a href="/schoolefairs/rewards/">
        <h5>Rewards</h5>
        </a>
        <a href="/schoolefairs/rewards/">Rewards Program</a>
        <a href="https://shop.follettbookfairs.com/" target="_blank">Redeem Your Rewards</a>
    </section>

    <!--  
    <section>
   
    <img src="https://cdn.brandfolder.io/EZCQY9GG/as/q484vs-4n14zs-k4p2p/publisher-banner.jpg" alt="Featured Publisher Banner">
    </section>
    -->

    <section>
    <a href="/gift-cards" target="_blank">
    <h5>Gift Cards</h5>
    </a>
    <a href="/gift-cards">Gift Cards</a>
    <a href="https://www.giftfly.com/shop/follett-book-fairs#select-gift-card" target="_blank">Purchase Gift Cards</a>
    <a href="https://shop.follettbookfairs.com/" target="_blank">Shop the
    Book Store</a>
</section>

<!--
    <section>
    <a href="https://cdn.brandfolder.io/9PA1UQVX/as/q7ejdi-211cmw-81xekm/eFair_Customer_FAQ.pdf" target="_blank"><h5 style="">F.A.Q.</h5></a>
    <a href="https://cdn.brandfolder.io/9PA1UQVX/as/q7ejdi-211cmw-81xekm/eFair_Customer_FAQ.pdf" target="_blank">School eFairs F.A.Q.</a>
    </section>



    <section>
    <a href="/testimonials"> <h5 style="">What People Are Saying</h5></a>
    <a href="/testimonials">What People Are Saying</a>
    </section>


<section>
    <a href="/themes/"> <h5 style="">Themes</h5></a>
    <a href="/themes/">Online Book Fair Themes</a>
    </section>


    <section>
    <a href="/schoolefairs/start-your-efair/"> <h5 style="">Tests</h5></a>
    <a href="/schoolefairs/start-your-efair/">Test 1</a>
    <a href="/schoolefairs/start-your-efair/scroll">Test 2</a>
    </section> -->


    <section class="featured-banner2">

    <a href="/schoolefairs/rewards/#titlewave-rewards">
    <img alt="Featured Publisher Block" src="https://cdn.brandfolder.io/EZCQY9GG/as/8f2hxqmcmmjqgbsvbqgw6hrc/eFair-Banner.jpg">
  </a>
    </section>

`;
header.insertAdjacentElement('afterbegin', sefMenu);
header.insertAdjacentElement('afterbegin', bfMenu);


const bfLink = document.querySelector('.bfLink');
const sefLink = document.querySelector('.sefLink');

/*   */
bfLink.addEventListener('mouseenter', event => { 

    bfMenu.classList.add("hover-active");
    bfLink.style.background = 'white';
    bfLink.style.color = '#00529c';
    
    });

bfLink.addEventListener('mouseleave', event => { 
        bfMenu.classList.remove("hover-active");
        bfLink.style.background = 'none';
        bfLink.style.color = '#fff';
        event.stopPropagation();
       });

       bfMenu.addEventListener('mouseenter', event => { 

        bfMenu.classList.add("hover-active");
       bfLink.style.background = 'white';
       bfLink.style.color = '#00529c';
        
       });
   
   bfMenu.addEventListener('mouseleave', event => { 
           bfMenu.classList.remove("hover-active");
           bfLink.style.background = 'none';
           bfLink.style.color = '#fff';
          });


/* School eFairs Menu Activation
___________________________________________________________
 */

sefLink.addEventListener('mouseenter', event => {
    sefMenu.classList.add("hover-active");
    sefLink.style.background = 'white';
    sefLink.style.color = '#00529c';

});

sefLink.addEventListener('mouseleave', event => {
    sefMenu.classList.remove("hover-active");
    sefLink.style.background = 'none';
    sefLink.style.color = '#fff';

});

sefMenu.addEventListener('mouseenter', event => {
    sefMenu.classList.add("hover-active");
    sefLink.style.background = 'white';
    sefLink.style.color = '#00529c';

});

sefMenu.addEventListener('mouseleave', event => {
    sefMenu.classList.remove("hover-active");
    sefLink.style.background = 'none';
    sefLink.style.color = '#fff';

});

/* ___________________________________________________________
School eFairs Menu Activation */

const hamburger = document.querySelector('.toggle-menu');
hamburger.addEventListener('click', function(e){
    e.preventDefault();
    
    if (!hamburger.classList.contains('is-active')) {
        hamburger.classList.add('is-active');
        bfMenu.classList.add('hover-active');
        sefMenu.classList.add('hover-active');
        header.prepend(document.querySelector('.header'));
        document.querySelector('#page-content').style.display = 'none';
    } else {
        hamburger.classList.remove('is-active');
        bfMenu.classList.remove('hover-active');
        sefMenu.classList.remove('hover-active');
        document.querySelector('#page-content').style.display = 'block';
    }

});

// hamburger.onclick = () => hamburger.classList.toggle('is-active');
// hamburger.onclick = () => bfMenu.classList.toggle('hover-active');console.log('toggled');
// hamburger.onclick = () => sefMenu.classList.toggle('hover-active');

addEventListener


// document.addEventListener("scroll", function(){
 window.addEventListener("load", function(){
header.style.background = '#00529c';
header.classList.add('sticking');

if (document.URL.includes('/efairs') == 1) {
    header.style.borderBottom = `6px solid #ffffff`;
    header.style.borderColor = '#4fb2ad!important';
    // console.log(document.URL.includes('/efairs'))
    } 
    
if (!document.URL.includes('/efairs')) {
        // console.log(document.URL.includes('/efairs'));
    header.style.borderBottom = `6px solid #ffffff`;
}

if (document.URL.includes('/fairs')) {
  header.style.background = 'none';
header.classList.remove('sticking');
header.style.borderBottom = `none`;
}

});


/* Get Started BTN */

const learnMoreBtn = document.querySelector(".learnMore");

const learnBtnToolTip = document.createElement("div");

let componentExists = false;
const toolTipBody = document.createElement("div");
toolTipBody.style.display = "none";
toolTipBody.classList.add("LearnMoreToolTip");
toolTipBody.innerHTML = `


<div>
<img src="/images/bookfairslogo-color.png" width="180" >
<p style="padding-bottom: 20px;">Bring a bookstore experience<br>to your school.</p>
<a style="margin-right:0px;margin-top:12px;float:none!important;padding-top: 10px;padding-bottom: 10px;margin-left: -1px;text-decoration: none;" href="https://insider.follettbookfairs.com/" target="_blank" class="btn btn-blue-white">Book Fair</a></div>

<div>
<img src="/images/bookefairslogo-color.png"   width="180" >
<p style="padding-bottom: 20px;">Shop online - <br>anywhere, anytime.</p>
<a href="https://follettcommunity.force.com/registration/s/login" target="_blank" class="btn btn-orange-white"  style="margin-right:0px;margin-top:12px;float:none!important;border-radius:37.5px;border-width:1px;border-style: solid;padding-top: 10px;padding-bottom: 10px;margin-left: 0px;text-decoration: none;">Online Book Fair</a></div>
`;

// learnMoreBtn.appendChild(toolTipBody);
var currentlyHovered = false;

function LearnMoreToolTip(event) {

  event.preventDefault();


  if (componentExists === false && currentWidth >= 1245) {
    // console.log("hovered");
    event.preventDefault();

    // console.log(toolTipBody.classList);
    // this.appendChild(toolTipBody);
    componentExists = true;
    // console.log(`Still Active ${componentExists}`);
    toolTipBody.style.display = "grid";
    toolTipBody.style.opacity = "1";
  }

  this.addEventListener("mouseleave", function () {
    setTimeout(function () {
      if (currentlyHovered === false) {
        toolTipBody.style.opacity = "0";
        toolTipBody.style.display = "none";

        componentExists = false;
        currentlyHovered = false;
        //  console.log(`Hiding Tooltip, hoverstate is ${componentExists}`);

      }
    }, 600); // 600
  });
}


learnMoreBtn.addEventListener("mouseenter", LearnMoreToolTip);

learnMoreBtn.addEventListener("mouseover", function () {
  
  if (currentWidth >= 1245){
    currentlyHovered = true;
    // console.log(currentWidth);
  } else {
    currentlyHovered = false;
  }


});

learnMoreBtn.addEventListener("mouseleave", function () {
  currentlyHovered = false;
});

learnMoreBtn.addEventListener("click", function (event) {
  event.preventDefault();
  
  
});

/* Adding Modals */

const loginModal = document.createElement('div');
loginModal.classList.add('modal');
loginModal.setAttribute('id', 'login');
loginModal.innerHTML = `
<div class="login-options">
  <section id="insider">
    <a href="https://insider.follettbookfairs.com/" target="_blank"><img class="insider-img"
        src="https://follettbookfairs.com/images/resource-insider.png" alt="Follett Book Fair Insider"></a>
    <div>
      <p class="logincopy">Access your book fair setup and training hub.</p>
      <a href="https://insider.follettbookfairs.com/" target="_blank" class="btn btn-blue-white">Insider
        Login</a>
    </div>
  </section>
  <section id="schoolefairs">
    <a target="_blank" href="https://follettcommunity.force.com/registration/s/login"><img
        class="efairs-img" src="https://follettbookfairs.com/images/resource-efairs.png" alt="Follett eFairs" width="300"></a>
    <div>
      <p class="logincopy">Log in today to immediately setup your online book fair.</p>
      <a href="https://follettcommunity.force.com/registration/s/login" target="_blank"
        class="btn btn-orange-white">eFairs Login</a>
    </div>
  </section>


</div>
`;

const getStartedModal = document.createElement('div');
getStartedModal.classList.add('modal');
getStartedModal.setAttribute('id', 'getStarted');
getStartedModal.innerHTML = `
<div class="login-options">
  <section id="getStartedModal">
    <!-- <h3 class="light">Follett Book Fairs Insider</h3> -->
    <a href="/try-follett-book-fairs"><img
        src="https://follettbookfairs.com/images/bookfairslogo-color.png" width="312"></a>
    <div>
      <p class="logincopy">Bring a bookstore experience to your school.</p>
      <a href="/try-follett-book-fairs"  class="btn btn-blue-white">Book
        Fair</a>
      <!-- <button type="submit" value="Submit" class="btn btn-ghost-blue">Create Account</button> -->
    </div>
  </section>

  <section id="getStartedModal2">
    <!-- <h3 class="light">Follett Book Fairs Insider</h3> -->
    <a target="_blank" href="https://follettcommunity.force.com/registration/s/login"><img
        src="https://follettbookfairs.com/images/bookefairslogo-color.png" width="312"></a>
    <div>
      <p class="logincopy">Shop online - anywhere, anytime.</p>
      <a href="https://follettcommunity.force.com/registration/s/login" target="_blank"
        class="btn btn-orange-white">Online Book Fair</a>
      <!-- <button type="submit" value="Submit" class="btn btn-ghost-blue">Create Account</button> -->
    </div>
  </section>


</div>
`;

document.body.insertAdjacentElement('beforeend', loginModal);
document.body.insertAdjacentElement('beforeend', getStartedModal);


$(document).ready(function() {
  "use strict";
 
  $('.existing-login').click(function(event) {
    event.preventDefault();
    $("#login").modal({
      fadeDuration: 150,
      fadeDelay: 0.20
    });   
  });

  $('.learnMore').click(function(event) {
    // $("#getStarted").modal({
    //   fadeDuration: 150,
    //   fadeDelay: 0.20
    // });   
    window.location='/try-follett-book-fairs/';
  });

  
 
    var newURL = window.location.pathname + window.location.hash;
    var linkMatched = document.querySelectorAll(`*[href="${newURL}"]`);
    linkMatched.forEach((linkMatched) => {
    linkMatched.classList.add("activeItem")
    });

});


if (currentWidth <= 695) {
  console.log(currentWidth);
}