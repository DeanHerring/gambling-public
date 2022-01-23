let lzBalance = document.querySelector('.header__game').children[1]
let lzAmount = document.querySelector('.lz__red-heading').children[1]
let lzBet = document.querySelector('.bet').children[0]
let lzBetButton = lzBet.nextElementSibling
let lzRestart = lzBetButton.nextElementSibling
let lzTakeWin = lzRestart.nextElementSibling
let lzPossibleWinColor = document.querySelector('.lz__black-heading').children[1]
let lzPossibleWinSuit = document.querySelector('.lz__black-bottom').children[1]
let lzRed = document.querySelector('.lz__red-color')
let lzBlack = document.querySelector('.lz__black-color')
let lzCard = document.querySelector('.lz__card').children[0]
let lz = document.querySelector('.lz')

let lzCardDeck = {
	default: '/img/luckyzodiac/card-back.svg',
	hearts: {
		color: 0,
		2: "/gambling-public/img/luckyzodiac/hearts/2-hearts.svg",
		3: "/gambling-public/img/luckyzodiac/hearts/3-hearts.svg",
		4: "/gambling-public/img/luckyzodiac/hearts/4-hearts.svg",
		5: "/gambling-public/img/luckyzodiac/hearts/5-hearts.svg",
		6: "/gambling-public/img/luckyzodiac/hearts/6-hearts.svg",
		7: "/gambling-public/img/luckyzodiac/hearts/7-hearts.svg",
		8: "/gambling-public/img/luckyzodiac/hearts/8-hearts.svg",
		9: "/gambling-public/img/luckyzodiac/hearts/9-hearts.svg",
		10: "/gambling-public/img/luckyzodiac/hearts/10-hearts.svg",
		11: "/gambling-public/img/luckyzodiac/hearts/j-hearts.svg",
		12: "/gambling-public/img/luckyzodiac/hearts/q-hearts.svg",
		13: "/gambling-public/img/luckyzodiac/hearts/k-hearts.svg",
		14: "/gambling-public/img/luckyzodiac/hearts/a-hearts.svg",
	},
	spades: {
		color: 1,
		2: "/gambling-public/img/luckyzodiac/spades/2-spades.svg",
		3: "/gambling-public/img/luckyzodiac/spades/3-spades.svg",
		4: "/gambling-public/img/luckyzodiac/spades/4-spades.svg",
		5: "/gambling-public/img/luckyzodiac/spades/5-spades.svg",
		6: "/gambling-public/img/luckyzodiac/spades/6-spades.svg",
		7: "/gambling-public/img/luckyzodiac/spades/7-spades.svg",
		8: "/gambling-public/img/luckyzodiac/spades/8-spades.svg",
		9: "/gambling-public/img/luckyzodiac/spades/9-spades.svg",
		10: "/gambling-public/img/luckyzodiac/spades/10-spades.svg",
		11: "/gambling-public/img/luckyzodiac/spades/j-spades.svg",
		12: "/gambling-public/img/luckyzodiac/spades/q-spades.svg",
		13: "/gambling-public/img/luckyzodiac/spades/k-spades.svg",
		14: "/gambling-public/img/luckyzodiac/spades/a-spades.svg",
	},
	diamonds: {
		color: 0,
		2: "/gambling-public/img/luckyzodiac/diamonds/2-diamonds.svg",
		3: "/gambling-public/img/luckyzodiac/diamonds/3-diamonds.svg",
		4: "/gambling-public/img/luckyzodiac/diamonds/4-diamonds.svg",
		5: "/gambling-public/img/luckyzodiac/diamonds/5-diamonds.svg",
		6: "/gambling-public/img/luckyzodiac/diamonds/6-diamonds.svg",
		7: "/gambling-public/img/luckyzodiac/diamonds/7-diamonds.svg",
		8: "/gambling-public/img/luckyzodiac/diamonds/8-diamonds.svg",
		9: "/gambling-public/img/luckyzodiac/diamonds/9-diamonds.svg",
		10: "/gambling-public/img/luckyzodiac/diamonds/10-diamonds.svg",
		11: "/gambling-public/img/luckyzodiac/diamonds/j-diamonds.svg",
		12: "/gambling-public/img/luckyzodiac/diamonds/q-diamonds.svg",
		13: "/gambling-public/img/luckyzodiac/diamonds/k-diamonds.svg",
		14: "/gambling-public/img/luckyzodiac/diamonds/a-diamonds.svg",
	},
	clubs: {
		color: 1,
		2: "/gambling-public/img/luckyzodiac/clubs/2-clubs.svg",
		3: "/gambling-public/img/luckyzodiac/clubs/3-clubs.svg",
		4: "/gambling-public/img/luckyzodiac/clubs/4-clubs.svg",
		5: "/gambling-public/img/luckyzodiac/clubs/5-clubs.svg",
		6: "/gambling-public/img/luckyzodiac/clubs/6-clubs.svg",
		7: "/gambling-public/img/luckyzodiac/clubs/7-clubs.svg",
		8: "/gambling-public/img/luckyzodiac/clubs/8-clubs.svg",
		9: "/gambling-public/img/luckyzodiac/clubs/9-clubs.svg",
		10: "/gambling-public/img/luckyzodiac/clubs/10-clubs.svg",
		11: "/gambling-public/img/luckyzodiac/clubs/j-clubs.svg",
		12: "/gambling-public/img/luckyzodiac/clubs/q-clubs.svg",
		13: "/gambling-public/img/luckyzodiac/clubs/k-clubs.svg",
		14: "/gambling-public/img/luckyzodiac/clubs/a-clubs.svg",
	},
}

// localStorage.balance = 10000
lzBalance.innerText = localStorage.balance
lzCard.src = lzCardDeck.default

function placeBet(e) {
	e.preventDefault()

	if ( lz.classList.contains('disabled') ) {
		lz.classList.remove('disabled')
	}

	let lzDiff = parseInt(localStorage.balance) - lzBet.value

	if ( Math.sign(lzDiff) <= 0 ) {
		lzAmount.innerText = localStorage.balance
		lzBalance.innerText = 0
		localStorage.balance = parseInt(lzBalance.innerText)
	} else {
		lzAmount.innerText = lzBet.value
		lzBalance.innerText = parseInt(localStorage.balance) - lzBet.value
		localStorage.balance = parseInt(lzBalance.innerText)
	}

	lzBetButton.disabled = true
	lzPossibleWinColor.innerText = parseInt(lzAmount.innerText) * 2
	lzPossibleWinSuit.innerText = parseInt(lzPossibleWinColor.innerText) * 2
}

function restart(e) {
	e.preventDefault()

	localStorage.balance = parseInt(lzBalance.innerText)
	lzCard.src= lzCardDeck.default
	lzAmount.innerText = 0
	lzPossibleWinColor.innerText = 0
	lzPossibleWinSuit.innerText = 0
	lzBetButton.disabled = false
	lzBet.value = 0
	lz.classList.add('disabled')
}

function randomInteger(min, max) {
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}

function lzAlert(title, message, int) {
	let alertColor = undefined

	if ( int == 0 ) {
		alertColor = '#F06966'
	} else {
		alertColor = '#6ABE83'
	}

	iziToast.show({
		title: title,
		titleColor: '#fff',
		titleSize: 18,
		messageSize: 15,
		message: message,
		messageColor: '#fff',
		color: alertColor,
		maxWidth: 350,
	})
}

function selected(e) {
	e.preventDefault()

	let target = e.target;

	if ( lz.classList.contains('disabled') ) {
		lzAlert("Ошибка", "Сделайте ставку!", 0)
	} else {
		lzAlert("Заебися", "Ставки приняты!", 1)

		let lzSelectedOption = target.getAttribute('data-option') // 0 - red 1 - black
		let randomSuit = randomInteger(1, 4)
		let randomCard = randomInteger(2, 14)

		lzCard.src = Object.entries(lzCardDeck)[randomSuit][1][randomCard]

		if ( lzSelectedOption == Object.entries(lzCardDeck)[randomSuit][1].color ) {
			lzAlert("Повезло!", "Вы выиграли", 1)
			lzAmount.innerText = lzPossibleWinColor.innerText
			lzPossibleWinColor.innerText = parseInt(lzAmount.innerText) * 2
			lzPossibleWinSuit.innerText = parseInt(lzPossibleWinColor.innerText) * 2
		} else {
			lzAlert("Не повезло!", "Вы проиграли", 0)
			restart(e)
		}
	}
}

function takeWin(e) {
	e.preventDefault()

	localStorage.balance = parseInt(localStorage.balance) + parseInt(lzAmount.innerText)
	lzBalance.innerText = localStorage.balance
	restart(e)
}

[lzRed, lzBlack].forEach(option => {
	option.addEventListener('click', selected)
})
lzBetButton.addEventListener('click', placeBet)
lzRestart.addEventListener('click', restart)
lzTakeWin.addEventListener('click', takeWin)