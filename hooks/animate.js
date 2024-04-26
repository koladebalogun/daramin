import anime from "animejs";

export const Animate = (item1, item2, item3) => {
    console.log(item1, item2, item3)
  anime.timeline().add({
    targets: item1,
    translateY: [200, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 2000 + 50 * i,
  });

  anime.timeline().add({
    targets: item2,
    translateY: [200, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 2200 + 50 * i,
  });

  anime.timeline().add({
    targets: item3,
    translateY: [200, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 2300 + 50 * i,
  });

  
};
