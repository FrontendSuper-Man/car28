const select = document.getElementById('select');
const h2 = document.querySelector('h2');
h2.textContent = 'Выбери тачку';

let carsData = [];

fetch("cars.json")
	.then(res => res.json())
	.then(data => {
		carsData = data.cars;
	})
	.catch(error => {
		console.error('Ошибка загрузки данных:', error);
		h2.textContent = 'Не удалось загрузить данные о машинах.';
	});

const selectCar = (id) => {
	if (id === -1) {
		h2.textContent = 'Выбери тачку';
		return;
	}

	const car = carsData[id];
	if (car) {
		h2.textContent = `Тачка: ${car.brand} ${car.model}\nЦена: ${car.price}$`;
	} else {
		h2.textContent = 'Данные о выбранной машине не найдены.';
	}
};

select.addEventListener('input', () => {
	const selectedIndex = select.selectedIndex; // Текущий индекс выбранного элемента
	selectCar(selectedIndex - 1); // Сдвиг на -1, чтобы учесть первый элемент "Выбери тачку"
});
