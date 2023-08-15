let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
const sr = scrollReveal ({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

st.reveal('.text',{delay: 200, origin: 'top'})
st.reveal('.form-container form',{delay: 800, origin: 'left'})
st.reveal('.heading',{delay: 200, origin: 'top'})
st.reveal('.fide-container .box',{delay: 600, origin: 'top'})
st.reveal('.services-container .box',{delay: 600, origin: 'top'})
st.reveal('.about-container',{delay: 600, origin: 'top'})
st.reveal('.reviews-container',{delay: 600, origin: 'top'})
st.reveal('.newsletter .box',{delay: 400, origin: 'top'})


// window.addEventListener('scroll', () => {
//     header.classList.toggle('active', window.scrollY > 0);
// })

// menu.onlick = () => {
//     navbar.classList.toggle('active');
// }


