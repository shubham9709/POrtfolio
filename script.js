var dropdown = document.getElementsByClassName("dropdown")[0];

function myFunction() {
  dropdown.classList.toggle("open");
}

// Contact me Email js
const sendmail = (event) => {
  var templateParams = {
    user_name: document.getElementById("name").value,
    user_email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  emailjs.send("service_hdohbgl", "template_lgkjp6k", templateParams).then(
    function (response) {
      alert("SUCCESS!", response.status, response.text);
    },
    function (error) {
      alert("FAILED...", error);
    }
  );
};

function timeline() {
  "use strict";

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
}
timeline();
// Gsap animations

gsap.registerPlugin(ScrollTrigger);
const myText = new SplitType(".intro");
const overview = new SplitType(".page2-div>h1");

var element = document.querySelector(".page2-div>h1");

element.addEventListener("mouseover", onMouseOver);

function onMouseOver(event) {
  var trg = event.target;
  console.log(trg.className);
  if (trg.className === "char") {
    console.log("hello");
    var tl = gsap.timeline();

    tl.to(trg, { y: -50, yoyo: true });
    tl.to(trg, { y: 0, yoyo: true });
  }
}

gsap.to(".line>.round", {
  scrollTrigger: {
    trigger: "#main",
    scrub: true,
    start: "bottom top",
    end: "top bottom",
  },
  x: -200,
});
gsap.from(".intro>.line>.word>.char", {
  scrollTrigger: {
    trigger: "#page2>.page2-div>h1",
    scrub: 0.5,
    start: "top bottom",
    end: "top top",
  },
  opacity: 0,
  stagger: 0.05,
  duration: 0.9,
});
gsap.from("#page1>.inner-div>.line", {
  y: -1000,
  duration: 1,
});
// gsap.from("#page2>.page2-div>p", {
//   scrollTrigger: {
//     trigger: "#page2>.page2-div>p",
//     scrub: 0.5,
//     start: "top bottom",
//     end: "top top",
//   },
//   stagger: 0.2,
//   color: `#000`,
// });
gsap.from("#page2>.aboutmeCards>.card", {
  scrollTrigger: {
    trigger: "#page2>.page2-div>p",
    scrub: 0.5,
    start: "top bottom",
    end: "top top",
  },
  scale: 0,
});

gsap.from("#page4>.portfolio-container>.portfolio-box", {
  scrollTrigger: {
    trigger: "#page4>h2",
    start: "top bottom",
    end: "top top",
  },
  scale: 0,
  duration: 2,
});
