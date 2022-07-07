const img = document.querySelectorAll('.bg-img')
const dot = document.querySelectorAll('.dots__item')
const dots = document.querySelector('.dots')
const title = document.querySelectorAll('.slider__title')
const openCatalog = document.querySelector('.js-catalog')
const popup = document.querySelector('.menu__item-popup')
const user = document.querySelector('.user__item')
const search = document.querySelector('.user__item-search')
let bgImageBody = document.body.style

const bgColorsAndTitle = [
	{color: "#9dbaaa"},
	{color: "#9baaba"},
	{color: "#b4a199"},
]

const srcImg = []
img.forEach(it => (srcImg.push(it.src)))
const addActiveClass = (event) => {
	let id = +event.target.dataset.id
	bgImageBody.backgroundImage = `url(${srcImg[id]})`;
	bgImageBody.backgroundColor = bgColorsAndTitle[id].color
	dot.forEach(it => it.classList.remove('dots__item-active'))
	dot[id].classList.add('dots__item-active')
	title.forEach(it => it.classList.add('visibility-hidden'))
	title[id].classList.remove('visibility-hidden')
}
const toggleItemMenu = (element) => {
	element.classList.toggle('visibility-hidden')
}
const viewSearchItem = (event) => {
	search.classList.remove('visibility-hidden')
	if (event.keyCode === 13) {
		search.classList.add('visibility-hidden')
	}
}
dots.addEventListener('click', addActiveClass)
openCatalog.addEventListener('click', () => {
	toggleItemMenu(popup)
})
user.addEventListener('click', viewSearchItem)
user.addEventListener('keypress', viewSearchItem)
