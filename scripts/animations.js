$(document).ready(function() {

	var request = null;
	var mouse = { x: 0, y: 0 };
	var cx = window.innerWidth / 3;
	var cy = window.innerHeight / 3;

	$("#hero").mousemove(function(event) {

		mouse.x = event.pageX;
		mouse.y = event.pageY;

		cancelAnimationFrame(request);
		request = requestAnimationFrame(update);
	});

	function update() {

		dx = mouse.x - cx;
		dy = mouse.y - cy;

		tiltx = (dy / cy) ;
		tilty = - (dx / cx);


		radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
		degree = (radius * 10);

		TweenLite.to(".heroLogo", 0.1, {transform:'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)'});

  }

	$(window).resize(function() {
		cx = window.innerWidth / 3;
		cy = window.innerHeight / 3;
	});
});





/*animations on scroll*/

$(function(){
  //init controller
  var controller = new ScrollMagic.Controller();

  var headshotBack = document.getElementById("headshotBack");
  var headshot = document.getElementById("headshot");
  var clip = document.getElementsByClassName("clip");
  /*change menu button color*/
  var person = new ScrollMagic.Scene({triggerElement: "#person", duration: "108%"})
    .triggerHook("0.15")
    .setClassToggle(".bar", "person-color")
    .addTo(controller);


      /*open head door*/
      headshot.onclick = function(){
      headshot.classList.toggle("head-open");
      headshotBack.classList.toggle("headBack-open");
      }
      /*close head door*/
      headshotBack.onclick = function(){
        headshot.classList.remove("head-open");
        headshotBack.classList.remove("headBack-open");
      }

  var downArrow = document.getElementById("arrowContainer");

  var downArrowScene = new ScrollMagic.Scene({triggerElement: "#logo"})
      .triggerHook("onLeave")
      .setTween(TweenLite.from(downArrow, 0.5, {bottom: "15vh", opacity: 0}))
      .addTo(controller);


  /*split letters of person title*/
  $("#headOpenTag").lettering();
  var headOpenTag = $("#headOpenTag").children();
  var openTagNum = headOpenTag.length;

  var headOpenTagTl = new TimelineLite();
  headOpenTagTl.staggerFrom(headOpenTag, 0.6, { opacity: 0}, 0.1);

  var headCloseTag = document.getElementById("headCloseTag");
  var headBehind = document.getElementsByClassName("headBehind");
  var line = document.getElementById("line");
  var psuedoGlow = document.getElementById("psuedoGlow");
  var underShadow = document.getElementById("underShadow");
  var leftFrame = document.getElementById("leftFrame");
  var rightFrame = document.getElementById("rightFrame");
  var aboutMeTitle = document.getElementsByClassName("aboutMeTitle");

  var aboutOpenTl = new TimelineLite();
  aboutOpenTl.add(TweenLite.to("#aboutMe", 0.5, {className: "aboutOpen"}));

  var headTl = new TimelineLite();
  headTl.add(TweenLite.to(aboutMeTitle, 0.1, {opacity: 0}));
  headTl.add(TweenLite.from(leftFrame,0.4, {left: "-100vw", skewY:"-90deg"}));
  headTl.add(TweenLite.from(rightFrame, 0.4,{left: "100vw", skewY:"90deg"}));
  headTl.add(headOpenTagTl, 0.6);
  headTl.add(TweenLite.from(headCloseTag, 0.1, {opacity: 0}),"-=0.4");
  headTl.add(TweenLite.to(headshot, 0.2, {className: "+=opaque"}), "-=0.2");
  headTl.add(TweenLite.from(psuedoGlow, 0.1, {opacity: 0}), "+=0.4");
  headTl.add(TweenLite.to(headBehind, 0.2, {className: "+=opaque"}),"+=0.1");
  headTl.add(aboutOpenTl, 1);
  headTl.add(TweenLite.from(innerFrame, 0.1, {opacity: 0}), "-=0.6");
  headTl.add(TweenLite.from("#aboutMeText", 0.05, {opacity: 0}),"-=1");
  headTl.add(TweenLite.from("#headInstruction", 0.05, {opacity: 0}), "+=9");
  headTl.add(TweenLite.from("#workInstruction", 0.05, {opacity: 0}), "+=1");

  var person2 = new ScrollMagic.Scene({triggerElement: "#person"})
      .triggerHook("0.225")
      .setTween(headTl)
      .addTo(controller);


  var projects = new ScrollMagic.Scene({triggerElement: "#projects", duration: "100%"})
      .triggerHook("onLeave")
      .setClassToggle(".bar", "projects-color")
      .addTo(controller);


  var blue1 = document.getElementById("blue1");
  var green1 = document.getElementById("green1");
  var red1 = document.getElementById("red1");
  var yellow1 = document.getElementById("yellow1");

  var projectsTl = new TimelineLite();
  projectsTl.add(TweenLite.from(blue1, 0.5, {left: "-100vw"}));
  projectsTl.add(TweenLite.from(green1, 0.5, {left: "100vw"}));
  projectsTl.add(TweenLite.from(red1, 0.5, {left: "-100vw"}));
  projectsTl.add(TweenLite.from(yellow1, 0.5, {left: "100vw"}));

  var projects2 = new ScrollMagic.Scene({triggerElement: "#projects"})
      .triggerHook("0.8")
      .setTween(projectsTl)
      .addTo(controller);

  var resume = new ScrollMagic.Scene({triggerElement: "#resume", duration: "100%"})
        .triggerHook("0.05")
        .setClassToggle(".bar", "resume-color")
        .addTo(controller);


  var resumeTl = new TimelineLite();
  resumeTl.add(TweenLite.from("#resumeTitle", 1, {left: "-100vw"}));
  resumeTl.staggerFrom(".rezSecTitle", 0.6, {opacity: 0}, 0.2);
  resumeTl.staggerFrom(".rez", 0.6, {opacity: 0, height: 0}, 0.2);

  var resume2 = new ScrollMagic.Scene({triggerElement: "#green1"})
        .triggerHook("0.15")
        .setTween(resumeTl)
        .addTo(controller);

  var contactTitle = document.getElementById("contactTitle");
  var MNcontact = document.getElementById("MNcontact");
  var contactForm = document.getElementById("contactForm");
  var contactTl = new TimelineLite();
  contactTl.add(TweenLite.from(contactTitle, 0.5, {opacity: 0}));
  contactTl.add(TweenLite.from(MNcontact, 0.5, {left: "-100vw"}), "-=0.4");
  contactTl.add(TweenLite.from(contactForm, 0.5, {left: "100vw"}));

  var contact = new ScrollMagic.Scene({triggerElement: "#contact"})
        .triggerHook("1")
        .setTween(contactTl)
        .addTo(controller);

});
