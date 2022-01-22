// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var counts = 0;
  _.each(numbers, function(number) {
    if (number % 5 === 0) {
      counts ++;
    }
  });
  return counts;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  return _.filter(fruits, function(element) {
    return element === targetFruit;
  });
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  return _.filter(fruits, function(element) {
    return element[0] === letter;
  });
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  return _.filter(desserts, function(element) {
    return element['type'] === 'cookie';
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  var totalPrice = _.reduce(products, function(sum, element) {
    return sum + parseFloat(element['price'].substring(1, element['price'].length));
  }, 0);
  return totalPrice;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  var output = {};
  var desertTypeCount = _.reduce(desserts, function(sum, element) {
    if (output[element['type']] === undefined) {
      output[element['type']] = 1;
    } else {
      output[element['type']] ++;
    }
  }, 0);
  return output;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  var output = _.reduce(movies, function(sum, element) {
    if (element['releaseYear'] >= 1990 && element['releaseYear'] <= 2000) {
      sum.push(element['title']);
    }
    return sum;
  }, []);
  return output;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  return _.reduce(movies, function(sum, element) {
    if (element['runtime'] < timeLimit) {
      sum = true;
    }
    return sum;
  }, false);
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  return _.map(fruits, function(element) {
    return element.toUpperCase();
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  _.map(desserts, function(element) {
    if (element['ingredients'].indexOf('flour') === -1) {
      element['glutenFree'] = true;
    }
    return element;
  });
  return _.filter(desserts, function(x) {
    return x['glutenFree'] === true;
  });
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.61'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  return _.map(groceries, function(element) {
    element['salePrice'] = '$' + ((parseFloat(element['price']
    .substring(1, element['price'].length)) * (1 - coupon)).toFixed(2));
    return element;
  });
};
