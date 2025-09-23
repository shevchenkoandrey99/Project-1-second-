// 1. Переключение вкладок
document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      // Убираем активность у всех
      document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
      // Добавляем активность текущей
      tab.classList.add('active');
    });
  });

  // 2. Обмен местами полей "Откуда" и "Куда"
  const fromField = document.querySelector('.search-field:nth-child(1)');
  const toField = document.querySelector('.search-field:nth-child(2)');
  const swapBtn = document.querySelector('.search-field:nth-child(2)::before'); // Используем псевдоэлемент как кнопку

  // Слушаем клик на символ ↔
  fromField.parentNode.addEventListener('click', (e) => {
    if (e.target === fromField || e.target === toField) {
      // Меняем значения
      [fromField.value, toField.value] = [toField.value, fromField.value];
    }
  });

  // 3. Форма подписки — проверка email
  const newsletterForm = document.querySelector('.newsletter form');
  const emailInput = document.querySelector('.newsletter input[type="email"]');
  const errorDiv = document.querySelector('.newsletter .error');

  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Остановить отправку

    const email = emailInput.value.trim();

    if (!email.includes('@') || !email.includes('.')) {
      errorDiv.textContent = 'Пожалуйста, введите корректный email';
      errorDiv.style.display = 'block';
      return;
    }

    // Если всё нормально — можно отправить
    alert('Спасибо за подписку!');
    errorDiv.style.display = 'none';
    emailInput.value = '';
  });

  // 4. Кнопка "Сложный маршрут" — открывает модальное окно
  const complexRouteBtn = document.querySelector('.complex-route');
  const modal = document.createElement('div');
  modal.innerHTML = `
    <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 999; display: flex; justify-content: center; align-items: center;">
      <div style="background: white; padding: 20px; border-radius: 8px; max-width: 400px; width: 90%;">
        <h3>Сложный маршрут</h3>
        <p>Вы можете указать несколько точек назначения.</p>
        <button style="padding: 10px 20px; background: #ff3b5c; color: white; border: none; border-radius: 4px; cursor: pointer;">Продолжить</button>
        <button style="padding: 10px 20px; margin-left: 10px; background: #ccc; color: black; border: none; border-radius: 4px; cursor: pointer;">Закрыть</button>
      </div>
    </div>
  `;
  modal.style.display = 'none';

  document.body.appendChild(modal);

  complexRouteBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  // Закрытие модального окна
  modal.querySelector('button:last-child').addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // 5. Закрытие по клику вне окна
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // 6. Анимация кнопки "Найти"
  const searchBtn = document.querySelector('.search-btn');
  searchBtn.addEventListener('click', () => {
    searchBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      searchBtn.style.transform = 'scale(1)';
    }, 100);
  });

  // 7. Отображение ошибки только при необходимости
  emailInput.addEventListener('input', () => {
    if (errorDiv.style.display === 'block') {
      errorDiv.style.display = 'none';
    }
  });