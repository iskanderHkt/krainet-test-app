function nthFibo(n) {
  if (n <= 0) return "Введите число больше или равное 1";
  if (n === 1) return 0; // Первое число в последовательности Фибоначчи
  if (n === 2) return 1; // Второе число в последовательности Фибоначчи

  let prev1 = 0; // Первое число
  let prev2 = 1; // Второе число

  for (let i = 3; i <= n; i++) {
    let current = prev1 + prev2;
    prev1 = prev2;
    prev2 = current;
  }

  return prev2;
}
