const bmi = (w, h, bmi = w / h / h) =>
  bmi <= 18.5
    ? `your bmi is ${bmi} = Underweight`
    : bmi <= 25
    ? `your bmi is ${bmi} = Normal`
    : bmi <= 30
    ? `your bmi is ${bmi} = Overweight`
    : `your bmi is ${bmi} = Obese`;

console.log(bmi(80, 1.6));

const luasPersegi = (s, luasPersegi = s * s) =>
  console.log(`Luas Persegi dari sisi ${s} adalah ${luasPersegi}`);
luasPersegi(20);

const luasLingkaran = (r, phi = 3.14, luasLingkaran = r ** 2 * phi) =>
  console.log(
    `Luas Persegi dari sisi ${r} adalah ${luasLingkaran} dan menggunakan phi ${phi}`
  );

luasLingkaran(14, 22 / 7);
