let temperature = 22;
let humidity = 65;
let isRaining = false;

if (temperature > 25) {
  document.write('<p>Жарко</p>');
} else if (temperature >= 15 && temperature <= 25) {
  document.write('<p>Комфортно</p>');

  if (humidity > 70) {
    document.write('<p>Вологість висока</p>');
  } else if (humidity < 30) {
    document.write('<p>Вологість низька</p>');
  } else {
    document.write('<p>Вологість нормальна</p>');
  }

  if (isRaining) {
    document.write('<p>Візьми парасольку</p>');
  } else {
    document.write('<p>Дощу немає</p>');
  }
} else {
  document.write('<p>Холодно</p>');
}
