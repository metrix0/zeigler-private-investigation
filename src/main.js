import './style.css'

// UTILITY
function isMobile() {
    return window.innerWidth <= 768; // or any breakpoint you prefer
}

// MOBILE MENU

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuPanel = document.getElementById('menuPanel');
    const closeMenu = document.getElementById('closeMenu');

    const openMenu = () => {
        closeMenu.classList.remove('-rotate-45')
        mobileMenu.classList.remove('pointer-events-none');
        mobileMenu.classList.add('opacity-100');
        menuPanel.classList.remove('-translate-x-full');
    };

    const closeMenuFunc = () => {
        closeMenu.classList.add('-rotate-45')
        menuPanel.classList.add('-translate-x-full');
        mobileMenu.classList.remove('opacity-100');
        setTimeout(() => {
            mobileMenu.classList.add('pointer-events-none');
        }, 300);
    };

    menuButton.addEventListener('click', openMenu);
    closeMenu.addEventListener('click', closeMenuFunc);
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) closeMenuFunc();
    });
});


// SECTION 2 ANIMATION


gsap.registerPlugin(ScrollTrigger);

// 🧼 Initial positions
if(isMobile()){
    gsap.set("#glassTop", { x: -200 });
    gsap.set("#glassRight", { x: 400 });
    gsap.set("#glassBottom", { y: 400 });
    gsap.set("#hiddenImage2", { filter: "blur(20px)", opacity: 0 });
}
else{
    gsap.set("#glassTop", { y: -400 });
    gsap.set("#glassRight", { x: 400 });
    gsap.set("#glassBottom", { y: 400 });
    gsap.set("#hiddenImage2", { filter: "blur(20px)", opacity: 0 });
}

if(isMobile()){
    gsap.timeline({
        scrollTrigger: {
            trigger: "#section2",
            start: "center bottom",
            end: "bottom top",
            scrub: 1.5,
            ease: "power3.inOut",
            markers: false,
        }

    })
        // ✨ Reveal phase
        .to("#glassTop", { x: 0, duration: 1 }, 0)
        .to("#glassRight", { x: 0, duration: 1 }, 0)
        .to("#glassBottom", { y: 0, duration: 1 }, 0)
        .to("#hiddenImage2", { filter: "blur(0px)", opacity: 1, duration: 0.5 }, 0.5)

        // 🕒 Hold phase (25% of total timeline)
        .to({}, { duration: 1 })  // dummy tween to create a pause

        // 🔻 Move out phase
        .to("#hiddenImage2", { filter: "blur(20px)", opacity: 0, duration: 0.5 }, "-=0.5")
        .to("#glassTop", { x: -200, duration: 1 }, "<")  // "<" = start with previous tween
        .to("#glassRight", { x: 400, duration: 1 }, "<")
        .to("#glassBottom", { y: 400, duration: 1 }, "<");

}
else{
    gsap.timeline({
        scrollTrigger: {
            trigger: "#section2",
            start: "top 80%",
            end: "bottom top",
            scrub: 1.5,
            ease: "power3.inOut",
            markers: false,
        }

    })
        // ✨ Reveal phase
        .to("#glassTop", { y: 0, duration: 1 }, 0)
        .to("#glassRight", { x: 0, duration: 1 }, 0)
        .to("#glassBottom", { y: 0, duration: 1 }, 0)
        .to("#hiddenImage2", { filter: "blur(0px)", opacity: 1, duration: 0.5 }, 0.5)

        // 🕒 Hold phase (25% of total timeline)
        .to({}, { duration: 0.7 })  // dummy tween to create a pause

        // 🔻 Move out phase
        .to("#hiddenImage2", { filter: "blur(20px)", opacity: 0, duration: 0.5 }, "-=0.5")
        .to("#glassTop", { y: -400, duration: 1 }, "<")  // "<" = start with previous tween
        .to("#glassRight", { x: 400, duration: 1 }, "<")
        .to("#glassBottom", { y: 400, duration: 1 }, "<");

}


const section2 = document.getElementById("section2");


window.addEventListener("scroll", () => {
        const rect = section2.getBoundingClientRect();
        if (rect.top <= window.innerHeight/12) { // when element reaches center
            squareAnimation();
    }
});

function squareAnimation(){
    const squares = document.getElementById("squares")
    for(let i = 0; i < squares.children.length; i++){
        squares.children[i].classList.add("lineAnimation")
    }
}