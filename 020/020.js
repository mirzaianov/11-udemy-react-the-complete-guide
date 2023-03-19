function transformToObjects(numberArray) {
    return numberArray.map((item) => ({ item }));
}

console.log(transformToObjects([1, 2, 3]));
