const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function cursorFollow() {
    window.addEventListener("mousemove", function(dets) {
        document.querySelector('.cursor').style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`
    });
}

function heroSecAnimate(){
    var tl= gsap.timeline()
    tl.from(".header",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut
    })
    .to(".boundingele",{
        y:0,
        ease:Expo.easeInOut,
        delay:-1,
        duration:2,
        stagger:.3
    })
    .from(".hero_footer",{
        y:'-10',
        opacity:0,
        delay:-1,
        duration:1.5,
        ease:Expo.easeInOut
    })
}

document.querySelectorAll(".elem").forEach((elem) => {

    var rotate =0;
    var differenceRotate=0;
    elem.addEventListener("mousemove", (details) => {
        const img = elem.querySelector("img");
        const h1 =elem.querySelector("h1")
        const diffY = details.clientY - elem.getBoundingClientRect().top;
        
        

        differenceRotate= details.clientX -rotate;
        rotate=details.clientX
        gsap.to(img, {
            opacity: 1,
            ease: gsap.Power3,
            top: diffY,
            left: details.clientX, 
            rotate: gsap.utils.clamp(-20,20, differenceRotate ),
            duration: 0.5,
        });

        gsap.to(h1,{
            opacity:0.4,
            x:20

        })
        
    });

    elem.addEventListener("mouseleave", () => {
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
        });
    });
    elem.addEventListener("mouseleave", () => {
        gsap.to(elem.querySelector("h1"), {
            opacity: 1,
            x: 0,      
            duration: 0.5, 
            ease: "power2.out" 
        });
    });
    
});

const footer_h5 = document.getElementById("time");

const currentDate = new Date();
const year = currentDate.getFullYear();
const monthIndex = currentDate.getMonth(); 
const day = currentDate.getDate();

const months = [
  "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"
];
const month = months[monthIndex];

footer_h5.innerText = ` ${day}${" "} ${month}${"  "} ${year}`;


const username = 'DevBisht12'; 


fetch(`https://api.github.com/users/${username}`)
  .then(response => response.json())
  .then(data => {
    const profilePhoto = data.avatar_url;
    const profilePhotoElement = document.getElementById("profile_photo");
    profilePhotoElement.src = profilePhoto;
  })
  .catch(error => {
    console.error('Error fetching profile data:', error);
  });







cursorFollow()
heroSecAnimate()