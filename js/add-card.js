/*
 This function will add the Card in the list
 */

function addCardTrello(list) {
	return function () {
		var titleTextarea = list.titleFormNode
			.getElementsByClassName('trello-new-card-title-input')[0]
		list.titleFormNode.getElementsByClassName('trello-new-card-title-submit')[0]
			.onclick = titleSubmit
		list.titleFormNode.style.display = 'block';
		titleTextarea.focus();

		function titleSubmit(evt) {
			evt.preventDefault()
			var title = titleTextarea.value.trim()
				, card;

			list.titleFormNode.style.display = 'none';
			titleTextarea.value = '';
			if (!title) {
				return
			}

				card = new Card(list, title);
			list.board.registerCard(card, list.cards.length);
			list.cardsNode.insertBefore(card.node, list.cards[list.cards.length - 1].node);
			list.cards.push(card);
		}
	}
}