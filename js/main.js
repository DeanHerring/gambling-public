let lzBalance = document.querySelector('.header__game').children[1]
let lzAmount = document.querySelector('.lz__red-heading').children[1]
let lzBet = document.querySelector('.lz-panel__bet')
let lzBetButton = document.querySelector('.lz-panel__bet-btn')
let lzRestart = document.querySelector('.lz-panel__restart')
let lzTakeWin = document.querySelector('.lz-panel__take')
let lzPossibleWinColor = document.querySelector('.lz__black-heading').children[1]
let lzPossibleWinSuit = document.querySelector('.lz__black-bottom').children[1]

let lzRed = document.querySelector('.lz__red-color')
let lzRedHearts = document.querySelector('.lz__red-hearts')
let lzRedDiamonds = document.querySelector('.lz__red-diamonds')

let lzBlack = document.querySelector('.lz__black-color')
let lzBlackSpades = document.querySelector('.lz__black-spades')
let lzBlackClubs = document.querySelector('.lz__black-clubs')

let lzCard = document.querySelector('.lz__card').children[0]
let lz = document.querySelector('.lz')
let lzAddMoney = document.querySelector('.lz-panel__add')
let lzRetry = document.querySelector('.lz-panel__retry')

let lzCardDeck = {
	default: '/img/luckyzodiac/card-back.svg',
	hearts: {
		color: "red",
		suit: "hearts",
		2: "/img/luckyzodiac/hearts/2-hearts.svg",
		3: "/img/luckyzodiac/hearts/3-hearts.svg",
		4: "/img/luckyzodiac/hearts/4-hearts.svg",
		5: "/img/luckyzodiac/hearts/5-hearts.svg",
		6: "/img/luckyzodiac/hearts/6-hearts.svg",
		7: "/img/luckyzodiac/hearts/7-hearts.svg",
		8: "/img/luckyzodiac/hearts/8-hearts.svg",
		9: "/img/luckyzodiac/hearts/9-hearts.svg",
		10: "/img/luckyzodiac/hearts/10-hearts.svg",
		11: "/img/luckyzodiac/hearts/j-hearts.svg",
		12: "/img/luckyzodiac/hearts/q-hearts.svg",
		13: "/img/luckyzodiac/hearts/k-hearts.svg",
		14: "/img/luckyzodiac/hearts/a-hearts.svg",
	},
	spades: {
		color: "black",
		suit: "spades",
		2: "/img/luckyzodiac/spades/2-spades.svg",
		3: "/img/luckyzodiac/spades/3-spades.svg",
		4: "/img/luckyzodiac/spades/4-spades.svg",
		5: "/img/luckyzodiac/spades/5-spades.svg",
		6: "/img/luckyzodiac/spades/6-spades.svg",
		7: "/img/luckyzodiac/spades/7-spades.svg",
		8: "/img/luckyzodiac/spades/8-spades.svg",
		9: "/img/luckyzodiac/spades/9-spades.svg",
		10: "/img/luckyzodiac/spades/10-spades.svg",
		11: "/img/luckyzodiac/spades/j-spades.svg",
		12: "/img/luckyzodiac/spades/q-spades.svg",
		13: "/img/luckyzodiac/spades/k-spades.svg",
		14: "/img/luckyzodiac/spades/a-spades.svg",
	},
	diamonds: {
		color: "red",
		suit: "diamonds",
		2: "/img/luckyzodiac/diamonds/2-diamonds.svg",
		3: "/img/luckyzodiac/diamonds/3-diamonds.svg",
		4: "/img/luckyzodiac/diamonds/4-diamonds.svg",
		5: "/img/luckyzodiac/diamonds/5-diamonds.svg",
		6: "/img/luckyzodiac/diamonds/6-diamonds.svg",
		7: "/img/luckyzodiac/diamonds/7-diamonds.svg",
		8: "/img/luckyzodiac/diamonds/8-diamonds.svg",
		9: "/img/luckyzodiac/diamonds/9-diamonds.svg",
		10: "/img/luckyzodiac/diamonds/10-diamonds.svg",
		11: "/img/luckyzodiac/diamonds/j-diamonds.svg",
		12: "/img/luckyzodiac/diamonds/q-diamonds.svg",
		13: "/img/luckyzodiac/diamonds/k-diamonds.svg",
		14: "/img/luckyzodiac/diamonds/a-diamonds.svg",
	},
	clubs: {
		color: "black",
		suit: "clubs",
		2: "/img/luckyzodiac/clubs/2-clubs.svg",
		3: "/img/luckyzodiac/clubs/3-clubs.svg",
		4: "/img/luckyzodiac/clubs/4-clubs.svg",
		5: "/img/luckyzodiac/clubs/5-clubs.svg",
		6: "/img/luckyzodiac/clubs/6-clubs.svg",
		7: "/img/luckyzodiac/clubs/7-clubs.svg",
		8: "/img/luckyzodiac/clubs/8-clubs.svg",
		9: "/img/luckyzodiac/clubs/9-clubs.svg",
		10: "/img/luckyzodiac/clubs/10-clubs.svg",
		11: "/img/luckyzodiac/clubs/j-clubs.svg",
		12: "/img/luckyzodiac/clubs/q-clubs.svg",
		13: "/img/luckyzodiac/clubs/k-clubs.svg",
		14: "/img/luckyzodiac/clubs/a-clubs.svg",
	},
}

if ( !localStorage.balance ) {
	localStorage.balance = 10000
}

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
	localStorage.bet = lzBet.value
}

function restart() {
	localStorage.balance = parseInt(lzBalance.innerText)
	lzCard.src= lzCardDeck.default
	lzAmount.innerText = 0
	lzPossibleWinColor.innerText = 0
	lzPossibleWinSuit.innerText = 0
	lzBetButton.disabled = false
	lzBet.value = 0
	lz.classList.add('disabled')
	lzRetry.disabled = false
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

function selectedResult(option, select) {
	let randomSuit = randomInteger(1, 4)
	let randomCard = randomInteger(2, 14)
	let generateCard = undefined
	let multiplier = undefined

	if ( select == 'color' ) {
		generateCard = Object.entries(lzCardDeck)[randomSuit][1].color
		multiplier = lzPossibleWinColor.innerText
	} else if ( select == 'suit' ) {
		generateCard = Object.entries(lzCardDeck)[randomSuit][1].suit
		multiplier = lzPossibleWinSuit.innerText
	}

	lzCard.src = Object.entries(lzCardDeck)[randomSuit][1][randomCard]

	if ( option == generateCard ) {
		lzAlert("Повезло!", "Вы выиграли", 1)
		lzAmount.innerText = multiplier
		lzPossibleWinColor.innerText = parseInt(lzAmount.innerText) * 2
		lzPossibleWinSuit.innerText = parseInt(lzPossibleWinColor.innerText) * 2
	} else {
		lzAlert("Не повезло!", "Вы проиграли", 0)
		lz.classList.add('disabled')
		setTimeout(restart, 3000)
	}
}

function selected(e) {
	let target = e.target;

	if ( lz.classList.contains('disabled') ) {
		lzAlert("Ошибка", "Сделайте ставку!", 0)
	} else {
		lzAlert("Заебися", "Ставки приняты!", 1)

		let lzSelectedOption = target.getAttribute('data-option')

		if ( lzSelectedOption == "red" || lzSelectedOption == "black" ) {
			selectedResult(lzSelectedOption, 'color')
		} else {
			selectedResult(lzSelectedOption, 'suit')
		}
	}
}

function takeWin(e) {
	e.preventDefault()

	localStorage.balance = parseInt(localStorage.balance) + parseInt(lzAmount.innerText)
	lzBalance.innerText = localStorage.balance
	restart(e)
}

function addMoney(e) {
	e.preventDefault()

	localStorage.balance = parseInt(localStorage.balance) + 10000
	lzBalance.innerText = localStorage.balance
}

function retry(e) {
	e.preventDefault()

	lzBet.value = localStorage.bet
	lzBet.innerText = localStorage.bet

	placeBet(e)
	lzRetry.disabled = true
}

[lzRed, lzBlack, lzRedHearts, lzRedDiamonds, lzBlackSpades, lzBlackClubs].forEach(option => {
	option.addEventListener('click', selected)
})
lzBetButton.addEventListener('click', placeBet)
lzRestart.addEventListener('click', restart)
lzTakeWin.addEventListener('click', takeWin)
lzAddMoney.addEventListener('click', addMoney)
lzRetry.addEventListener('click', retry)