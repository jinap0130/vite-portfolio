// import moduleName from 'gsap'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export function intro(){
    gsap.registerPlugin(ScrollTrigger)
    const frameCount=14
    let offsetValue=200
    // (너비)씩 이동해라
    gsap.to('.img',{
        backgroundPosition:(-offsetValue*frameCount)+'px',
        ease:'steps('+frameCount+')',
        scrollTrigger:{
            trigger:'#intro',
            start:'top top',
            end:'+='+(frameCount*offsetValue),
            pin:true,
            scrub:true,


        } 
    })
}