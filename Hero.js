document.addEventListener('DOMContentLoaded', () => {
    // Hero Recipes
    const recipes = [
        {
            id: 1,
            title: '<h1><b>Halo-halo</b></h1>',
            desc: 'Two colorful glasses of Halo-Halo, each topped with a scoop of purple ube ice cream.'
        },
        {
            id: 2,
            title: '<h1><b>Carbonara</b></h1>',
            desc: 'Classic Carbonara coated in a silky sauce, studded with crispy, savory bits of pork.'
        },
        {
            id: 3,
            title: '<h1><b>Lasagna</b></h1>',
            desc: 'Lasagna hot from the oven! This melty, cheesy goodness is served, waiting for you to start.'
        },
        {
            id: 4,
            title: '<h1><b>Waffle</b></h1>',
            desc: 'Crispy on the outside and fluffy on the inside, waffles are a classic breakfast dish.'
        },
        {
            id: 5,
            title: '<h1><b>Leche Flan</h1>',
            desc: 'A creamy Leche Flan, with a perfect spoonful scooped out and ready to enjoy.'
        }
    ]
    let i = 0
    for (let recipe of recipes) {
        let title = document.querySelector(`#title${i+1}`)
        let desc = document.querySelector(`.desc${i+1}`)

        title.innerHTML = recipe.title
        desc.textContent = recipe.desc
        i++
    }
})

const slides = document.querySelector('.slider')
const allRecipes = document.querySelectorAll('.slider-recipe')
const recipeBtn = document.querySelectorAll('.toRec')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const recipeNum = document.querySelector('.featured-number')

let number = 1
let index = 0
let slide

function move(i){
    if (i > allRecipes.length-1) index = 0
    else if (i < 0) index = allRecipes.length - 1
    else index = i

    slides.style.transform = `translateX(${-index*100}%)`
    slides.style.transition = 'transform 0.5s ease'
    recipeNum.innerHTML = `<b>${index+1}</b> / 5`
}
move(index)
recipeBtn.forEach(btn => {
    btn.addEventListener('mouseover', () => {
        stop()
    })
    btn.addEventListener('mouseout', () => {
        restart()
    })
})
next.addEventListener('click', () => {
    move(index+1)
    restart()
})
prev.addEventListener('click', () => {
    move(index-1)
    restart()
})

function autoSlide(){
    slide = setInterval(() => {
        move(index+1)
    }, 6000);
}
function stop(){
    clearInterval(slide)
}
function restart(){
    clearInterval(slide)
    autoSlide()
}

autoSlide()
