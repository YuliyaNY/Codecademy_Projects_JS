class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    set title(val) {
      return this._title = val;
    }
    set isCheckedOut(val) {
    return this._isCheckedOut = val;
    }
    set ratings(val) {
      return this._ratings = val;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }
    
    getAverageRating() {
      let length = this._ratings.length;
      let summary = this._ratings.reduce((sum,rating) => sum + rating);
      let final = summary / length;
      return final;
    }
    
    addRating(param) {
      this._ratings.push(param);
    }
  }
  
  //Book Class
  class Book extends Media {
    constructor(title, author, pages) {
      super(title),
      this._author = author;
      this._pages = pages;
    }
    get author() {
      return this._author;
    }
    get pages() {
      return this._pages;
    }
  }
  
  //Movie Class
  class Movie extends Media {
    constructor(title, director, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    get director() {
      return this._director;
    } 
    get runTime() {
      return this._runTime;
    } 
  }
  
  //creating a Book instance with the following properties
  let historyOfEverything = new Book('A Short History of Nearly Everything','Bill Bryson',544);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());
  
  
//creating a Movie instance with the following properties
  let speed = new Movie('Speed','Jan de Bont',116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  
  speed.addRating(1);
  speed.addRating(2);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  
  
  
  
  
  
  
  