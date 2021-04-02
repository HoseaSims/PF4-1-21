const aboutMe = document.querySelector('.about-me')
const fabs = document.querySelector('.fabs')

aboutMe.classList.add('slideout')
setTimeout(() =>{aboutMe.classList.add('slidein')},500)

fabs.classList.add('fadeout')
setTimeout(() =>{fabs.classList.remove('fadeout'), fabs.classList.add('fadein')},1500)