// Функции-экшн-криэйторы (создают объекты действий)
export const inc = () => ({ type: 'INC' }); // Функция для увеличения состояния
export const dec = () => ({ type: 'DEC' }); // Функция для уменьшения состояния
export const rnd = (value) => ({ type: 'RND', value }); // Функция для добавления случайного числа
export const rndm = (value) => ({ type: 'RNDM', value }); // Функция для добавления случайного числа