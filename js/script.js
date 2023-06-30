//mobile nav//
const btnNav = document.querySelector(".mobile-nav-btn");
const headerNav = document.querySelector(".header");
btnNav.addEventListener("click", function () {
    headerNav.classList.toggle("nav-open");
});

//safari smooth fix//
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        const href = link.getAttribute("href");
        console.log(href)
        //scroll back to top
        if (href == "#-B")
            window.scroll({
                top: 0,
                behavior: 'smooth',
            });
        if (href == '#-T')
            window.scroll({
                top: 99999,
                behavior: 'smooth'
            })
        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: "smooth" });
        }
    });

});
//sticky navigation//
const sectionHeroEl = document.querySelector(".hero");
const obs = new IntersectionObserver
(function (entries) {
    const ent = entries[0];
    console.log(ent);
    
    if (ent.isIntersecting === false) {
        document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
        document.body.classList.remove("sticky");
    }
},
    {
        //in view port
        root: null,
        threshold: 0,
    }
);
obs.observe(sectionHeroEl);