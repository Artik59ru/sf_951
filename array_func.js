//Возвращает случайный элемент массива и удаляет его
Array.prototype.take = function() {
    var index = Math.floor(Math.random()*this.length);
    var result = this[index];
    this.splice(index, 1);
    return result;
  }