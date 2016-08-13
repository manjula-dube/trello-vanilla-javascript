function List(board, title, index, dummyList) {
	this.board = board
	this.dummyList = dummyList
	this.title = title
	this.index = index
	this.node = document.createElement('div')
	this.titleNode = document.createElement('div')
	this.cardsNode = document.createElement('div')
	this.node.classList.add('list')
	this.titleNode.classList.add('list-title')
	this.cardsNode.classList.add('list-cards')
	this.titleNode.setAttribute('list-index', index)
	this.titleNode.appendChild(document.createTextNode(this.title))
	this.node.appendChild(this.titleNode)

	if (!dummyList) {
		var dummyCard = new Card(this, 'Add a card...', 0)

		this.titleNode.draggable = true
		this.cards = [dummyCard]
		board.registerCard(this.cards[0], 0)

		// new card title form
		this.titleFormNode = buildCardTitleForm()

		for (var i = 0; i < this.cards.length; ++i) {
			this.cardsNode.appendChild(this.cards[i].node)
		}
		dummyCard.titleNode.onclick = addCardTrello(this)
		this.node.appendChild(this.cardsNode)
		dummyCard.node.appendChild(this.titleFormNode)
		dummyCard.node.draggable = false
		dummyCard.node.onclick = undefined
	}

	// drag-drop handlers
	this.titleNode.ondragstart = function (evt) {
		var index = parseInt(evt.target.getAttribute('list-index'), 10)
		dragTracker.list = currentBoard.lists[index]
		evt.dataTransfer.effectAllowed = 'move'
	}

	this.titleNode.ondragover = function (evt) {
		if (dragTracker.list) {
			evt.preventDefault()
		}
	}

	this.titleNode.ondrop = function (evt) {
		var sourceIndex = dragTracker.list.index
			, targetIndex = parseInt(this.getAttribute('list-index'), 10)
			, numLists = board.lists.length
			, i

		if (sourceIndex === targetIndex) { return }

		board.listsNode.removeChild(dragTracker.list.node)
		board.listsNode.insertBefore(dragTracker.list.node,
			board.lists[targetIndex].node)

		for (i = sourceIndex; i < numLists-1; ++i) {
			board.lists[i] = board.lists[i+1]
			board.lists[i].titleNode.setAttribute('list-index', i)
			board.lists[i].index = i
		}
		for (i = numLists-1; i > targetIndex; --i) {
			board.lists[i] = board.lists[i-1]
			board.lists[i].titleNode.setAttribute('list-index', i)
			board.lists[i].index = i
		}
		board.lists[targetIndex] = dragTracker.list
		board.lists[targetIndex].titleNode.setAttribute('list-index', targetIndex)
		board.lists[targetIndex].index = targetIndex
		evt.preventDefault()
	}

	this.titleNode.ondragend = function () {
		dragTracker.list = undefined
	}
}