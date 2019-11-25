const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
      },
    //creating getter and setter methods
    get appetizers() {
        return this._courses.appetizers;
    },
    get mains() {
        return this._courses.mains;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set appetizers(data) {
        this._courses.appetizers = data;
    },
    set mains(data) {
        this._courses.mains = data;
    },
    set desserts(data) {
        this._courses.desserts = data;
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    },
    //add a new dish to the specified course on the menu
    addDishToCourse(courseName, dishName, dishPrice) {
      let dish = {
        name: dishName,
        price: dishPrice
      }
       this._courses[courseName].push(dish);
    },
    //get random dish from a course on the menu
    getRandomDishFromCourse(courseName) {
      let dishes = this._courses[courseName];
      let randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
    //automatically generate a three-course meal 
    generateRandomMeal(courseName) {
      let appetizer = this.getRandomDishFromCourse('appetizers');
      let main = this.getRandomDishFromCourse('mains');
      let dessert = this.getRandomDishFromCourse('desserts');
      let total = appetizer.price + main.price + dessert.price;
      
      return (`Your meal is ${appetizer.name}, ${main.name},The price is ${total}.`)
    },
    };
    //adding dishes
    menu.addDishToCourse('appetizers', 'Cesar Salad', 4.25);
    menu.addDishToCourse('appetizers', 'Cheese Plate', 11.50);
    menu.addDishToCourse('appetizers', 'Shrimp Cocktail', 15.00);
    menu.addDishToCourse('mains', 'Steak', 4.25);
    menu.addDishToCourse('mains', 'Sea Bass', 11.50);
    menu.addDishToCourse('mains', 'Chicken', 15.00);
    menu.addDishToCourse('desserts', 'Ice Cream', 4.25);
    menu.addDishToCourse('desserts', 'Chocolate Cake', 11.50);
    menu.addDishToCourse('desserts', 'Cheesecake', 15.00);
    
  //generating a meal
  let meal = menu.generateRandomMeal();

  //printing result
  console.log(meal);
  