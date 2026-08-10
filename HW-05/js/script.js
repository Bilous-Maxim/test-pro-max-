// JavaScript код для інтерактивності
// Тут буде твій код для лічильника кліків!

let clickCount = 0;

function showMagic() {
  clickCount = clickCount + 1;
  document.getElementById('click-count').textContent = clickCount;

  // Твоя логіка з повідомленнями...

  // 🏆 ЛЕГЕНДАРНА НАГОРОДА за 5 кліків!

  if (clickCount === 5) {
    document.getElementById('main-title').textContent =
      '🎉 ВІТАЮ! Ти досяг 5-го рівня магії! 🏆';
  }

  // 🌟 ЕПІЧНА НАГОРОДА за 10 кліків!
  if (clickCount === 10) {
    document.getElementById('main-title').textContent =
      '🚀 НЕЙМОВІРНО! Ти майстер цифрової магії! 👑';
  }
}

document.getElementById('magic-btn').addEventListener('click', showMagic);
// Функція для ефекту кліку кнопки (вже готова)
function addClickEffect() {
  const button = document.getElementById('magic-btn');
  button.style.transform = 'scale(0.95)';
  setTimeout(() => {
    button.style.transform = 'scale(1)';
  }, 100);
}

// Інтерактивність тепер додана через onclick атрибути в HTML
