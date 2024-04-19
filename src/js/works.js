import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export function works(){
    gsap.registerPlugin(ScrollTrigger)
    const horSection=gsap.utils.toArray('.work_item')
    gsap.to(horSection, {
        xPercent:-100*(horSection.length -1),
        ease:"none",
        scrollTrigger:{
            trigger:"#work",
            start: 'top 56px',//header뺀 나머지
            end:'+=2380px',//전체 width
            pin: true,
            scrub:1, 

            invalidateOnRefresh:true,
            anticipatePin:1,

        }
    })
}

// ^^가로 스크롤 제어