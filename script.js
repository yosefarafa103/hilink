const bars = document.querySelector('.bars');
const sidebar = document.getElementsByTagName('aside')[0];
bars.addEventListener('click', () => {
    bars.classList.toggle('close')
    if (bars.classList.contains('close')) {
        sidebar.style.display = 'block'
    } else {
        sidebar.style.display = 'none'
    }
})
document.querySelector('.sidebar-discover').addEventListener('click', () => {
    document.querySelector('.sidebar-discover').classList.toggle('bottom-[20px]')
    document.querySelector('.sidebar-discover .list').classList.toggle('active')
    document.querySelector('.arrow-right i').classList.toggle('rotate-[90deg]')
})
const tl = gsap.timeline();
tl.from(".header ul li", {
    x: -10,
    opacity: 0,
    duration: 1,
    stagger: {
        each: 0.1
    }
})
tl.from(".header .regsiter", {
    scale: 0,
    opacity: 0,
    stagger: {
        each: 0.1
    }
})
tl.from(".main-section", {
    y: 20,
    opacity: 0,
})

// regsiter