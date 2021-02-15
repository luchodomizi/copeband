const menu = document.querySelector('.menu')
const navegacion = document.querySelector('.navegacion')

console.log(navegacion)
console.log(menu)


menu.addEventListener('click', ()=>{
    navegacion.classList.toggle("spread")
})

window.addEventListener('click', e =>{
    if(navegacion.classList.contains('spread') 
        && e.target != navegacion && e.target != menu){
            console.log('cerrar')
            navegacion.classList.toggle("spread")
        }

})

