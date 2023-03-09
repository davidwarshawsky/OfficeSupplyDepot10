const form = document.querySelector('form');
const resultsSection = document.querySelector('#results');

form.addEventListener('submit', event => {
	event.preventDefault(); // prevent the form from submitting

	const searchInput = form.elements.search;
	const searchTerm = searchInput.value;

	// Replace this with actual API request code to fetch search results
	const fakeItems = [
		{ name: 'Stapler', description: 'A useful tool for attaching papers together', price: 5.99, image: 'https://dummyimage.com/200x200/000/fff&text=Stapler' },
		{ name: 'Paperclips', description: 'Perfect for keeping papers organized', price: 1.99, image: 'https://dummyimage.com/200x200/000/fff&text=Paperclips' },
		{ name: 'Pencils', description: 'Write down your ideas with ease', price: 3.49, image: 'https://dummyimage.com/200x200/000/fff&text=Pencils' }
	];

	// Display fake search results
	resultsSection.innerHTML = '';

	if (fakeItems.length === 0) {
		resultsSection.innerHTML = '<p>No results found</p>';
	} else {
		fakeItems.forEach(item => {
			const itemElement = document.createElement('div');
			itemElement.classList.add('item');

			const imageElement = document.createElement('img');
			imageElement.src = item.image;
			imageElement.classList.add('item-image');
			itemElement.appendChild(imageElement);

			const nameElement = document.createElement('h2');
			nameElement.textContent = item.name;
			itemElement.appendChild(nameElement);

			const descriptionElement = document.createElement('p');
			descriptionElement.textContent = item.description;
			itemElement.appendChild(descriptionElement);

			const priceElement = document.createElement('p');
			priceElement.textContent = `$${item.price}`;
			itemElement.appendChild(priceElement);

			resultsSection.appendChild(itemElement);
		});
	}
});
