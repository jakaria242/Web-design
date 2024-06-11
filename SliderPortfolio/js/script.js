// console.log(window.innerWidth);

gsap.registerPlugin(SplitText);
const tl = gsap.timeline();

tl.to("h1", {
  scale: 1.1,
  repeat: -1,
  yoyo: true,
});

let dots = [],
  bg = document.querySelector("#featureBackground"),
  i,
  dot;

// create 80 dot elements and put them in an array
for (i = 0; i < 100; i++) {
  dot = document.createElement("div");
  dot.setAttribute("class", "dot");
  bg.appendChild(dot);
  dots.push(dot);
}

//set the initial position of all the dots, and pick a random color for each from an array of colors
gsap.set(dots, {
  backgroundColor: "random([#663399,#84d100,#cc9900,#0066cc,#993333])",
  scale: "random(0.1, 1)",
  left: "random(0,3000)",
  top: "random(0,1500)",
});

// create the physics2D animation
let tween = gsap.to(dots, {
  duration: 5,
  physics2D: {
    velocity: "random(200, 650)",
    angle: "random(250, 290)",
    gravity: 500,
  },
  delay: "random(0, 5)",
  repeat: -1,
  yoyo: true,
  //   scale: 0,
  stagger: {
    each: 0.2,
  },
});

(mySplitText = new SplitText("#quote", { type: "words,chars" })),
  (chars = mySplitText.chars); //an array of all the divs that wrap each character

gsap.set("#quote", { perspective: 800 });

tl.from(chars, {
  duration: 3,
  opacity: 0,
  scale: 0,
  y: 80,
  rotationX: 380,
  transformOrigin: "0% 50% -50",
  ease: "back",
  stagger: 0.05,
  repeat: -1,
  yoyo: true,
});

gsap.utils.toArray(".comparisonSection").forEach((section) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "center center",
      // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
      end: () => "+=" + section.offsetWidth,
      scrub: 3,
      pin: true,
      // anticipatePin: 1,
    },
    defaults: { ease: "none" },
  });
  // animate the container one way...
  tl.fromTo(
    section.querySelector(".afterImage"),
    { xPercent: 100, x: 0 },
    { xPercent: 0 }
  )
    // ...and the image the opposite way (at the same time)
    .fromTo(
      section.querySelector(".afterImage img"),
      { xPercent: -100, x: 0 },
      { xPercent: 0 }
    )
    .fromTo(
      section.querySelector(".afterImage2"),
      { xPercent: 100, x: 0 },
      { xPercent: 0 }
    )
    // ...and the image the opposite way (at the same time)
    .fromTo(
      section.querySelector(".afterImage2 img"),
      { xPercent: -100, x: 0 },
      { xPercent: 0 },
      0
    )
    .fromTo(
      section.querySelector(".afterImage3"),
      { xPercent: 100, x: 0 },
      { xPercent: 0 }
    )
    // ...and the image the opposite way (at the same time)
    .fromTo(
      section.querySelector(".afterImage3 img"),
      { xPercent: -100, x: 0 },
      { xPercent: 0 }
    )
    .fromTo(
      section.querySelector(".afterImage4"),
      { xPercent: 100, x: 0 },
      { xPercent: 0 }
    )
    // ...and the image the opposite way (at the same time)
    .fromTo(
      section.querySelector(".afterImage4 img"),
      { xPercent: -100, x: 0 },
      { xPercent: 0 },
      0
    )
    .fromTo(
      section.querySelector(".afterImage5"),
      { xPercent: 100, x: 0 },
      { xPercent: 0 }
    )
    // ...and the image the opposite way (at the same time)
    .fromTo(
      section.querySelector(".afterImage5 img"),
      { xPercent: -100, x: 0 },
      { xPercent: 0 }
    );
});

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=3500",
  },
});
