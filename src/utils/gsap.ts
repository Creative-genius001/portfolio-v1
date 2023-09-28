const animation = () =>{
        gsap.fromTo("#name", {y: 50, opacity: 0},{ y: 0, opacity: 1, duration: 1.5});
        gsap.fromTo("#name-desc", {y: 50, opacity: 0},{ y: 0, opacity: 1, duration: 1.2, delay: 0.3});
        gsap.fromTo("#name-intro", {x: -100, opacity: 0},{ x: 0, opacity: 1, duration: 1.2, delay: 0.8});
        gsap.fromTo(".social-link", {y: 100, opacity: 0},{ y: 0, opacity: 1, duration: 1.5, delay: 1.2});
        gsap.fromTo("#name-desc2", {opacity: 0},{ opacity: 1, duration: 3, delay: 2});
        gsap.fromTo("#resume-button", {opacity: 0},{ opacity: 1, duration: 0.8, delay: 2.5});
}

export {animation}