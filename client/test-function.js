export function orderFibo(n) {
    if (n <= 0) return "Введите число больше или равное 1";

    let fibo = [0, 1];

    for (let i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }

    return fibo[n];
}
