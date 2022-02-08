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

let lzProductionUrl = 'https://deanherring.github.io/gambling-public'

let lzAddMoney = document.querySelector('.lz-panel__add')
let lzRetry = document.querySelector('.lz-panel__retry')
let lzResult = document.querySelector('.lz__result')
let lzHistoryList = document.querySelector('.lz-history__list')
let lzHistoryItems = document.querySelectorAll('.lz-history__item')
let lzTurboOpen = document.querySelector('.lz-panel__generate')
let lzTurboModal = document.querySelector('.lz-modal')
let lzTurboClose = document.querySelector('.lz-modal__close')

let lzTurboForm = document.querySelector('.lz-turbo__form')
let lzTurboBet = document.querySelector('.lz-turbo__bet')
let lzTurboGames = document.querySelector('.lz-turbo__games')
let lzTurboRed = document.querySelector('.lz-modal__red')
let lzTurboBlack = document.querySelector('.lz-modal__black')
let lzTurboPlay = document.querySelector('.lz-turbo__play')
let lzTurboClear = document.querySelector('.lz-turbo__clear')
let lzTurboCards = document.querySelectorAll('.lz-modal__card')

let lzTurboResult = document.querySelector('.lz-turbo')
let lzTurboResultClose = document.querySelector('.lz-turbo__close')
let lzStatsSum = document.querySelector('.stats__sum')
let lzStatsGames = document.querySelector('.stats__games')
let lzStatsWinCount = document.querySelector('.stats__win-count')
let lzStatsWin = document.querySelector('.stats__win')
let lzTurboString = document.querySelector('.turbo__string')
let lzTurboTable = document.querySelector('.turbo-table')

let max = 10000
let min = 1

let lzCardDeck = {
	default: lzProductionUrl + '/img/luckyzodiac/card-back.svg',
	hearts: {
		color: "red",
		suit: "hearts",
		historyUrl: lzProductionUrl + "/img/luckyzodiac/miniature/hearts-miniature.svg",
		2: lzProductionUrl + "/img/luckyzodiac/hearts/2-hearts.svg",
		3: lzProductionUrl + "/img/luckyzodiac/hearts/3-hearts.svg",
		4: lzProductionUrl + "/img/luckyzodiac/hearts/4-hearts.svg",
		5: lzProductionUrl + "/img/luckyzodiac/hearts/5-hearts.svg",
		6: lzProductionUrl + "/img/luckyzodiac/hearts/6-hearts.svg",
		7: lzProductionUrl + "/img/luckyzodiac/hearts/7-hearts.svg",
		8: lzProductionUrl + "/img/luckyzodiac/hearts/8-hearts.svg",
		9: lzProductionUrl + "/img/luckyzodiac/hearts/9-hearts.svg",
		10: lzProductionUrl + "/img/luckyzodiac/hearts/10-hearts.svg",
		11: lzProductionUrl + "/img/luckyzodiac/hearts/j-hearts.svg",
		12: lzProductionUrl + "/img/luckyzodiac/hearts/q-hearts.svg",
		13: lzProductionUrl + "/img/luckyzodiac/hearts/k-hearts.svg",
		14: lzProductionUrl + "/img/luckyzodiac/hearts/a-hearts.svg",
	},
	spades: {
		color: "black",
		suit: "spades",
		historyUrl: lzProductionUrl + "/img/luckyzodiac/miniature/spades-miniature.svg",
		2: lzProductionUrl + "/img/luckyzodiac/spades/2-spades.svg",
		3: lzProductionUrl + "/img/luckyzodiac/spades/3-spades.svg",
		4: lzProductionUrl + "/img/luckyzodiac/spades/4-spades.svg",
		5: lzProductionUrl + "/img/luckyzodiac/spades/5-spades.svg",
		6: lzProductionUrl + "/img/luckyzodiac/spades/6-spades.svg",
		7: lzProductionUrl + "/img/luckyzodiac/spades/7-spades.svg",
		8: lzProductionUrl + "/img/luckyzodiac/spades/8-spades.svg",
		9: lzProductionUrl + "/img/luckyzodiac/spades/9-spades.svg",
		10: lzProductionUrl + "/img/luckyzodiac/spades/10-spades.svg",
		11: lzProductionUrl + "/img/luckyzodiac/spades/j-spades.svg",
		12: lzProductionUrl + "/img/luckyzodiac/spades/q-spades.svg",
		13: lzProductionUrl + "/img/luckyzodiac/spades/k-spades.svg",
		14: lzProductionUrl + "/img/luckyzodiac/spades/a-spades.svg",
	},
	diamonds: {
		color: "red",
		suit: "diamonds",
		historyUrl: lzProductionUrl + "/img/luckyzodiac/miniature/diamonds-miniature.svg",
		2: lzProductionUrl + "/img/luckyzodiac/diamonds/2-diamonds.svg",
		3: lzProductionUrl + "/img/luckyzodiac/diamonds/3-diamonds.svg",
		4: lzProductionUrl + "/img/luckyzodiac/diamonds/4-diamonds.svg",
		5: lzProductionUrl + "/img/luckyzodiac/diamonds/5-diamonds.svg",
		6: lzProductionUrl + "/img/luckyzodiac/diamonds/6-diamonds.svg",
		7: lzProductionUrl + "/img/luckyzodiac/diamonds/7-diamonds.svg",
		8: lzProductionUrl + "/img/luckyzodiac/diamonds/8-diamonds.svg",
		9: lzProductionUrl + "/img/luckyzodiac/diamonds/9-diamonds.svg",
		10: lzProductionUrl + "/img/luckyzodiac/diamonds/10-diamonds.svg",
		11: lzProductionUrl + "/img/luckyzodiac/diamonds/j-diamonds.svg",
		12: lzProductionUrl + "/img/luckyzodiac/diamonds/q-diamonds.svg",
		13: lzProductionUrl + "/img/luckyzodiac/diamonds/k-diamonds.svg",
		14: lzProductionUrl + "/img/luckyzodiac/diamonds/a-diamonds.svg",
	},
	clubs: {
		color: "black",
		suit: "clubs",
		historyUrl: lzProductionUrl + "/img/luckyzodiac/miniature/clubs-miniature.svg",
		2: lzProductionUrl + "/img/luckyzodiac/clubs/2-clubs.svg",
		3: lzProductionUrl + "/img/luckyzodiac/clubs/3-clubs.svg",
		4: lzProductionUrl + "/img/luckyzodiac/clubs/4-clubs.svg",
		5: lzProductionUrl + "/img/luckyzodiac/clubs/5-clubs.svg",
		6: lzProductionUrl + "/img/luckyzodiac/clubs/6-clubs.svg",
		7: lzProductionUrl + "/img/luckyzodiac/clubs/7-clubs.svg",
		8: lzProductionUrl + "/img/luckyzodiac/clubs/8-clubs.svg",
		9: lzProductionUrl + "/img/luckyzodiac/clubs/9-clubs.svg",
		10: lzProductionUrl + "/img/luckyzodiac/clubs/10-clubs.svg",
		11: lzProductionUrl + "/img/luckyzodiac/clubs/j-clubs.svg",
		12: lzProductionUrl + "/img/luckyzodiac/clubs/q-clubs.svg",
		13: lzProductionUrl + "/img/luckyzodiac/clubs/k-clubs.svg",
		14: lzProductionUrl + "/img/luckyzodiac/clubs/a-clubs.svg",
	}
}

let lzHistory = []
let arrCombination = []

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
	lzRetry.disabled = true
	lzRestart.disabled = true
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
	lzTakeWin.disabled = false
	lzRestart.disabled = false

	lzHistoryItems.forEach(item => {
		item.children[0].src = lzProductionUrl + '/img/luckyzodiac/card-back.svg'
	})
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

	function resultCheck(strWin, strLose, strText) {
		lzResult.classList.add('active')
		lz.classList.add('disabled')

		if ( lzResult.classList.contains(strLose) ) {
			lzResult.classList.remove(strLose)
			lzResult.classList.add(strWin)
			lzResult.children[0].innerText = strText
		} else {
			lzResult.classList.add(strWin)
			lzResult.children[0].innerText = strText
		}
	}

	if ( select == 'color' ) {
		generateCard = Object.entries(lzCardDeck)[randomSuit][1].color
		multiplier = lzPossibleWinColor.innerText
	} else if ( select == 'suit' ) {
		generateCard = Object.entries(lzCardDeck)[randomSuit][1].suit
		multiplier = lzPossibleWinSuit.innerText
	}

	lzCard.src = Object.entries(lzCardDeck)[randomSuit][1][randomCard]

	let promise = new Promise((resolve, reject) => {
		if ( option == generateCard ) {
			// Done

			lzAmount.innerText = multiplier
			lzPossibleWinColor.innerText = parseInt(lzAmount.innerText) * 2
			lzPossibleWinSuit.innerText = parseInt(lzPossibleWinColor.innerText) * 2

			resolve(1)
		} else {
			// Failed

			lzTakeWin.disabled = true
			lz.classList.add('disabled')

			reject(0)
		}
	})

	promise.then(
		(resolse) => {
			resultCheck('win', 'lose', 'Победа :)')
			history(Object.entries(lzCardDeck)[randomSuit][0])

			setTimeout(() => {
				lzResult.classList.remove('active')
				lz.classList.remove('disabled')
			}, 1500)
		},
		(reject) => {
			resultCheck('lose', 'win', 'Поражение :(')
			lzHistory = []

			setTimeout(() => {
				lzResult.classList.remove('active')
				lz.classList.remove('disabled')
				restart()
			}, 1500)
		}
		)
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

	if ( !localStorage.balance ) {
		localStorage.balance = 10000
	} else {
		localStorage.balance = parseInt(localStorage.balance) + 10000
	}

	lzBalance.innerText = localStorage.balance
}

function retry(e) {
	e.preventDefault()

	lzBet.value = localStorage.bet
	lzBet.innerText = localStorage.bet

	placeBet(e)
	lzRetry.disabled = true
}

function history(cardSuit) {
	lzHistory.push(cardSuit)

	lzHistory.forEach((game, index) => {
		if ( lzHistoryItems[index] == undefined ) {
			localStorage.balance = parseInt(localStorage.balance) + parseInt(lzAmount.innerText)
			lzBalance.innerText = localStorage.balance

			setTimeout(restart, 1501)
		} else {
			lzHistoryItems[index].children[0].src = lzCardDeck[game].historyUrl
		}
	})
}

function turbo(e) {
	e.preventDefault()

	if ( lzTurboModal.classList.contains('hidden') ) {
		lzTurboModal.classList.remove('hidden')
	} else {
		lzTurboModal.classList.add('hidden')
	}
}

function placeTurboBet(event) {
	event.preventDefault();

	(event.target == lzTurboBet) ? validationInput(event.target, 10000, 1) : false;
	(event.target == lzTurboGames) ? validationInput(event.target, 250, 1) : false;

	let costGames = parseInt(lzTurboBet.value) * parseInt(lzTurboGames.value)

	if ( costGames > parseInt(localStorage.balance) ) {
		lzTurboPlay.children[0].innerText = localStorage.balance
	} else {
		lzTurboPlay.children[0].innerText = costGames
	}
}

function clearTurboBet(event) {
	event.preventDefault()

	lzTurboBet.value = 100
	lzTurboGames.value = 10
	lzTurboCards.forEach(card => {
		card.classList.remove('red')
		card.classList.remove('black')
	})
	arrCombination = []

	placeTurboBet(event)
}

function createCombination(event)
{
	event.preventDefault()

	if ( arrCombination.length < 10 ) {
		arrCombination.push(event.target.getAttribute('data-option'))
		arrCombination.forEach((suit, index) => {
			lzTurboCards[index].classList.add(suit)
		})
	} else {
		console.log('Достигнуто максимальное количество карт')
	}
}

function validationInput(input, max, min)
{
	if ( parseInt(input.value) > max ) {
		input.value = max
	}

	if ( parseInt(input.value) < min ) {
		input.value = min
	}
}

function generateTurbo(event)
{
	event.preventDefault()

	lzTurboTable.innerText = '';
	let games = []
	let arrWinGame = []
	let i = 0
	let costGames = parseInt(lzTurboBet.value) * parseInt(lzTurboGames.value)
	let futureBalance = parseInt(localStorage.balance) - costGames

	if ( futureBalance > 0  ) {
		localStorage.balance = futureBalance
		lzBalance.innerText = futureBalance

		if ( !arrCombination.length == 0 ) {
			function a() {
				let game = []

				arrCombination.forEach((item, index) => {
					let randomSuit = randomInteger(1, 4)
					let randomCard = randomInteger(2, 14)

					game.push(Object.entries(lzCardDeck)[randomSuit][1].color)
				})

				return game
			}

			let turboData = {
				bet: parseInt(lzTurboBet.value),
				gamesCount: parseInt(lzTurboGames.value),
				costGames: costGames,
				combination: arrCombination,
				games: games,
			}

			while ( i < turboData.gamesCount ) {
				games.push({ id: i + 1, cards: a(), result: 0 })
				i++
			}

			lzTurboResult.classList.remove('hidden')

			lzStatsSum.innerText = turboData.costGames
			lzStatsGames.innerText = turboData.gamesCount

			let winGame = turboData.bet * 2
			let r = 1

			while ( r < turboData.combination.length ) {
				winGame = winGame * 2
				r++
			}

			turboData.games.forEach((game) => {
				let stringClone = lzTurboString.cloneNode(true);

				if ( JSON.stringify(turboData.combination) == JSON.stringify(game.cards ) ) {
					game.result = 1
					stringClone.children[3].innerText = winGame
				}

				(game.result == 1) ? arrWinGame.push(game) : false;

				stringClone.children[0].innerText = game.id
				stringClone.children[1].innerText = turboData.bet
				stringClone.children[2].innerText = 0

				lzTurboTable.appendChild(stringClone)
			})

			lzStatsWinCount.innerText = arrWinGame.length
			lzStatsWin.innerText = winGame * arrWinGame.length;

			if ( parseInt(lzStatsWin.innerText) > 0 ) { 
				localStorage.balance = parseInt(localStorage.balance) + parseInt(lzStatsWin.innerText) 
				lzBalance.innerText = localStorage.balance
			}
		} else {
			console.log('Выберите масть')
		}
	} else {
		console.log('Недостаточно средств')
	}
}

function turboResultClose() 
{
	[lzTurboModal, lzTurboResult].forEach(block => {
		block.classList.add('hidden')
	})
}

[lzRed, lzBlack, lzRedHearts, lzRedDiamonds, lzBlackSpades, lzBlackClubs].forEach(option => {
	option.addEventListener('click', selected)
})
lzBetButton.addEventListener('click', placeBet)
lzRestart.addEventListener('click', restart)
lzTakeWin.addEventListener('click', takeWin)
lzAddMoney.addEventListener('click', addMoney)
lzRetry.addEventListener('click', retry)
lzTurboOpen.addEventListener('click', turbo)
lzTurboClose.addEventListener('click', turbo)
lzTurboClear.addEventListener('click', clearTurboBet)
lzTurboRed.addEventListener('click', createCombination)
lzTurboBlack.addEventListener('click', createCombination)
lzTurboPlay.addEventListener('click', generateTurbo)
lzTurboResultClose.addEventListener('click', turboResultClose)

lzTurboBet.addEventListener('change', placeTurboBet)
lzTurboGames.addEventListener('change', placeTurboBet)