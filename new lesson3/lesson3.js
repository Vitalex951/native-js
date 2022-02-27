//обработчик, handler, слушатель, listener, подписчик, subscriber -> function
// function({.....}) => объект, со сведениями о произошедешм событии
// event, ev, e -> объект, со сведениями о произошедешм событии


const sm = document.getElementById('small')

const onClickHandler1 = () => alert('yo!')
const onClickHandler2= () => alert('hey')
const onClickHandler3= (e) => console.dir(e)
const onClickHandler4= (e) => console.dir(e.currentTarget)
const onClickHandler5= (e) => {
    e.stopImmediatePropagation()
    console.log(e.stopPropagation())
    if(e.currentTarget.id === "small"){
        console.log(e.currentTarget.id)
    }
}

// sm.onclick = onClickHandler;
// sm.onclick = '';

const md = document.getElementById('medium')
const bg = document.getElementById('big')

// sm.addEventListener('click', onClickHandler5)
md.addEventListener('click', onClickHandler4)
bg.addEventListener('click', onClickHandler4)

const suoerHadlre = (e) => {
    e.stopImmediatePropagation()
    if(e.target.tagName === "BUTTON") {
        console.log(e.target.tagName)
    }
}
sm.addEventListener('click', suoerHadlre)