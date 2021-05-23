const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],
    get appetizers() {
      return this._appetizers;
    },
    set appetizers(appetizersIn) {
      this._appetizers = appetizersIn;
    },
    get mains() {
      return this._mains;
    },
    set mains(mainsIn) {
      this._mains = mainsIn;
    },
    get desserts() {
      return this._desserts;
    },
    set desserts(dessertsIn) {
      this._desserts = dessertsIn;
    },
  },
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts,
    };
	},
  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
  },

getRandomDishFromCourse(courseName) {
  const dishes = this._courses[courseName];
  const randomIndex = Math.floor(Math.random() * dishes.length);
  return dishes[randomIndex];
},
 generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    
    return `You're having ${appetizer.name} as an appetizer, ${main.name} for your main meal, and ${dessert.name} for dessert. Your total will be $${totalPrice.toFixed(2)}.`;
  }
}


menu.addDishToCourse('appetizers', ' Chicken Ceasar Salad', 4.00);
menu.addDishToCourse('appetizers', 'Lentil and Garden Pea Soup', 4.00);
menu.addDishToCourse('appetizers', 'Bruschetta with Olives', 4.00);

menu.addDishToCourse('mains', 'Rib Eye Steak with Roast Potatos', 23.00);
menu.addDishToCourse('mains', 'Confit Duck, Parsnips with  Red Wine Reduction', 20.00);
menu.addDishToCourse('mains', 'Smoked Salmon With Grilled Apsaragus', 28.00);


menu.addDishToCourse('desserts', 'Creme Brulee', 5.00);
menu.addDishToCourse('desserts', 'Panacotta', 8.00);
menu.addDishToCourse('desserts', 'Cake and coffee', 3.00);


const meal = menu.generateRandomMeal();
console.log(meal);
