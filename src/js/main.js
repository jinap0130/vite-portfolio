import {menu} from"./menu.js"
import {intro} from "./intro.js"
import {works} from "./works.js"
import {graphics} from "./graphics.js"
import {link} from "./link.js"
import {smooth} from "./smooth.js"

window.addEventListener('load',function(){
    smooth()
    link()
    menu()
    intro()
    works()
    graphics()
})