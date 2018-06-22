/*found on stack overflow*/
$(document).ready(function() {
    animateDiv($('.a'));
        animateDiv($('.b'));
        animateDiv($('.c'));
        animateDiv($('.d'));
        animateDiv($('.e'));
        animateDiv($('.f'));
        animateDiv($('.g'));
        animateDiv($('.h'));
        animateDiv($('.i'));
        animateDiv($('.j'));
});

function makeNewPosition($iconContainer) {

    // Get viewport dimensions (remove the dimension of the div)
    var h = $iconContainer.height() - 200;
    var w = $iconContainer.width() - 20;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

function animateDiv($target) {
    var newq = makeNewPosition($target.parent());
    var oldq = $target.offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
  
    $target.animate({
        top: newq[0],
        left: newq[1]
    }, speed, function() {
        animateDiv($target);
    });

};

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.2;

    var speed = Math.ceil(greatest / speedModifier);

    return speed;
}
