
// gsap.registerPlugin(ScrollTrigger)

// let sections = gsap.utils.toArray('.section')

// gsap.to(sections, {
//     yPercent: - 100 * (sections.length - 1),
//     scrollTrigger: {
//         trigger: "#section",
//         markers: true,
//         pin: true,
//         pinSpacing: true,
//         scrub: 1,
//         snap: 1 / (sections.length - 1),
//         end: () => {
//             document.querySelector('.section').offsetWidth
//         }
//     }
// })


//animate links
function styleLinks(target) {
    let cursors = $(".curLink").toArray()
    $.each(cursors, function(index, cursor) { 
        $(cursor).removeClass('cursorfocus');
        if(index==target) $(cursor).addClass('cursorfocus')
    });
}

let anchorSelector = 'a[href^="#"]';
const sectionHeight = $('#sections').height()
$(anchorSelector).on('click', function (e) {
    
    
    e.preventDefault();

    desStr = this.hash
    let destination = Number(desStr.charAt( desStr.length - 1)) - 1
    
    let scrollPosition = destination * sectionHeight;
    
    let animationDuration = 500;

    $('#sections').animate({
        scrollTop: scrollPosition
    }, animationDuration);
});

$('#sections').on('scroll', (e)=> {
    const offset = Math.abs($('#section1').offset().top-75)
    const target = Math.floor((offset+(sectionHeight/2)) / sectionHeight)
    styleLinks(target)
})