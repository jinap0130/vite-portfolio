// import moduleName from 'gsap'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export function intro(){
    gsap.registerPlugin(ScrollTrigger)
    const frameCount=7
    let offsetValue=100
    // (너비)씩 이동해라
    //vw >> 비율계산( %) - 단위 통일... 
    gsap.to('.img_symbol',{
        backgroundPosition:(-offsetValue*frameCount)+'%',
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