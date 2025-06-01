const navtl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
    // Desktop (min-width: 768px)
    "(min-width: 768px)": function () {

        navtl.from("nav .nav-links li", {
            opacity: 0,
            y: -20,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        });

        gsap.from("nav .cta-button", {
            opacity: 0,
            y: -20,
            duration: 1,
            delay: 1.2,
            ease: "power4.out"
        });


        gsap.from(".hero .logo span", {
            x: -45,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
        })
        gsap.from(".hero h1", {
            x: -45,
            opacity: 0,
            duration: 1,
        })
        gsap.from(".hero p", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: 0.7,
            stagger: 0.1,
        })
        gsap.from(".hero .hero-buttons .d", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: 0.8,
            stagger: 0.1,
        })
        gsap.from(".hero img", {
            x: 50,
            scale: 0.9,
            opacity: 0,
            duration: 0.8,
            delay: 0.8,
            stagger: 0.1,
        })
    }
})

ScrollTrigger.matchMedia({
    // Desktop (min-width: 768px)
    "(max-width: 768px)": function () {
        gsap.from(".hero .logo span", {
            y: 20,
            opacity: 0,
            duration: 0.5,
            // stagger: 0.1,
        })
        gsap.from(".hero .hero-content h1", {
            y: 20,
            opacity: 0,
            duration: 0.5,
            delay: 0.2,
            // stagger: 0.1,
        })
        gsap.from(".hero .hero-content p", {
            y: 20,
            opacity: 0,
            duration: 0.5,
            delay: 0.4,
            // stagger: 0.1,
        })
        gsap.from(".hero .hero-buttons a", {
            y: 20,
            opacity: 0,
            duration: 0.5,
            delay: 0.5,
            stagger: 0.1,
        })
    }
});

gsap.from(".service-card", {
    scale: 0.95,
    opacity: 0.5,
    y: 80,
    stagger: 0.1,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".service-card",
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
    }
});

gsap.from(".portfolio-item", {
    scale: 0.95,
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".portfolio-item",
        scroller: "body",
        start: "top 80%",
        end: "top 40%",
    }
});

gsap.from(".testimonial-card", {
    scale: 0.95,
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".testimonial-card",
        scroller: "body",
        start: "top 80%",
        end: "top 40%",
    }
});

gsap.from(".contact-icon i", {
    scale: 0.95,
    opacity: 0,
    x: -50,
    stagger: 0.1,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".contact-text h3",
        scroller: "body",
        start: "top 80%",
        end: "top 40%",
    }
});
