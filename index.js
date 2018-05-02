'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}

module.exports.each = each;


/**
 * identity: return the parameter;
 * @param {value}: the value that is going to be returned;
 */
function identity(value){
    return value;
}

module.exports.identity = identity;

/**
 * 
 * typeOf: designed to test a value to find out what type that value is;
 * 
 * 
 * @param {value}: the value is tested to see what type it is and returns that type;
 * 
 * 
 * 
 * 
 */
function typeOf(value){
    if (Array.isArray(value)) {
        return 'array';
    } else if (value === null) {
        return 'null';
    } else if (value === true || value === false) {
        return 'boolean';
    } else if (value instanceof Date) {
        return 'date';
    } else if (typeof value === 'object') {
        return 'object';
    } else if (typeof value === 'number') {
        return 'number';
    } else if (typeof value === 'string') {
        return 'string';
    } else if (typeof value === 'function') {
        return 'function';
    } else {
        return 'undefined';
    }
}

module.exports.typeof = typeOf;

/**
 * first: designed to return the first value of an array; if the array is not an array then it returns an empty array;
 * also designed to return a number;
 * @param {array}: the array in which to test; 
 * @param {num}: the number in which to test to see if the array will return the first;
 * 
 * 
 * 
 * 
 * 
 */
function first(array, num) {
    if (!Array.isArray(array) || num < 0) {
        return [];
    } else if (num > array.length) {
        return array;
    } else if (num === undefined) {
        return array[0];
    } else if (typeof num !== 'number') {
        num = num.length;
    } else {
        var newArr = [];
        for (var i = 0; i < num; i++) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}

module.exports.first = first;

/**
 * 
 * last: designed to return the last index of an array
 * 
 * @param {array}: the array in which to test; 
 * @param {num}: the number in which to test to see if the array will return the first;
 * 
 * 
 * 
 * 
 * 
 * 
 */
function last(array, num) {
    var newArr = [];
    if (!Array.isArray(array) || num < 0) {
        return [];
    } else if (typeof num !== 'number' || num === undefined) {
        return array[array.length-1];
    } else if (num > array.length) {
        return array;
    } else {
        for (var i = 0; i < array.length-1; i++) {
            newArr.push(array[i+1]);
        }
    } 
    return newArr;
}

module.exports.last = last;

/**
 * indexOf: designed to return the location of the first occurance of the given value
 * if the given value is not there, then the function return -1;
 * @param {array}: the array in which the values are stored in;
 * @param {value}: the value to test to locate where in the array it is;
 * 
 * 
 * 
 */
function indexOf(array, value){
     if (array.length > 0) {
        return array.indexOf(value);
    }
}

module.exports.indexOf = indexOf;

/**
 * filter: designed to filter out the values you want to filter out; uses each to run through the array;
 * and return an array;
 * @param {array}: the array to hold the values and to test with
 * @param {function}: the function that does the action to filter out the values you want;
 * 
 * 
 */
 function filter(array, func){
    var emptyArray = [];
    each(array, function(element, loc, collec){
        if(func(element, loc, collec)){
            emptyArray.push(element);
        }
    });
    return emptyArray;
}

module.exports.filter = filter;

/**
 * reject: designed to return an array of rejected values that don't pass a given test;
 * 
 * @param {array}: the array to hold the values and to test 
 * @param {func}: the function that does the action you want to test and pushes it to a new array
 * then returns the new array;
 * 
 * 
 * 
 * 
 */
 function reject(array, func){
    var arr = [];
    for(var i = 0; i < array.length; i++){
        var e = array[i];
        if(func(e, i, array)===false){
            arr.push(e);
        }
    }
    return arr;
}

module.exports.reject = reject;

/**
 * 
 * partition: desgined to return two arrays: one that has values that passed a test and one that didn't
 * 
 * @param {array}: the array holds the values to test
 * @param {function}: the function performs the action to test the values in the array to return true
 * or false and push them into their respective arrays;
 * 
 * 
 */
 function partition(array, func){
    var nonArr =[];
    var truth = [];
    var falsy = [];
    for(var i = 0; i < array.length; i++){
        var e = array[i];
        if(func(e, i, array)=== true){
            truth.push(e);
        }else{
            falsy.push(e);
            
        }
    } nonArr.push(truth, falsy);
    return nonArr;
    
}

module.exports.partition = partition;

/**
 * 
 * unique: desgined to return an array with all duplicates removed
 * 
 * @param {array}: the array is here to test the values within it to remove the duplicate;
 * 
 * 
 * 
 * 
 * 
 */
 function unique(array) {
  var newArr = [];
    for (var i = 0; i < array.length; i++) {
        var value = array[i];
        if (!newArr.includes(value)) {
            newArr.push(value);
        }
    }
    return newArr;
}

module.exports.unique = unique;

/**
 * 
 * map: designed to produce a new array which has the values tested to see if they pass
 * 
 * @param {collection}: here to hold the values to pass the test;
 * @param {function}: used to perform the test to see whether or not to push it into the new array;
 * 
 * 
 * 
 * 
 */
 function map(collection, func) {
    var newArr = [];
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            var element = collection[i];
            newArr.push(func(element, i, collection));
        } 
    } else {
        for (var key in collection) {
            var value = collection[key];
            newArr.push(func(value, key, collection));
        }
    }
    return newArr;
}

module.exports.map = map;

/**
 * 
 * pluck: designed to return an array containing the property of every element in the array;
 * 
 * @param{an array of objects}: the collection that holds the element and properties; 
 * also the collection that has the properties that are going to be returned;
 * @param{property}: the property that is goingto be returned;
 * 
 * 
 */
 function pluck(arrayObject, prop){
    var plucked = map(arrayObject, function(element, i, collection){
        return element[prop];
    });
    
    return plucked;
}

module.exports.pluck = pluck;

/**
 * 
 * contains: designed to return either true or false if the array includes the value
 * 
 * @param {array}: the array holds the value that will be tested if it includes the value
 * @param {value}: the value that's tested to see if it's in the array;
 * 
 * 
 * 
 */
 function contains(array, value){
    return (array.includes(value)) ? true : false;
}

module.exports.contains = contains;

/**
 * 
 * every: designed to return true if all the values are in the collection; if not false
 * 
 * NOT DONE YET
 * @param {collection}: the collection that is being tested with the values in it
 * @param {function}: the function that is actually performing the testing;
 * 
 */
 function every(collection, func){
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            var element = collection[i];
            if(func(element, i, collection) || i === collection.length-1) {
                return true;
            } else if (i !== collection.length-1) {
                return false;
            }
        }
        //objects
    } else if (typeof collection === 'object') {
        for (var key in collection) {
            var value = collection[key];
            if(func(value, key, collection) && key !== collection.length-1) {
                return true;
            } else if (key === collection.length-1) {
                return false;
            }
        }
    }
}

module.exports.every = every;

/**
 * 
 * some:designed to return true if at least one of the values are in the collection; if not false
 * 
 * @param {collection}: the collection that is being tested with the values in it
 * @param {function}:the function that is actually performing the testing;
 * NOT DONE YET
 * 
 * 
 * 
 */
 function some(collection, func){
  if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            var element = collection[i];
            if(func(element, i, collection) && i !== collection.length-1) {
                return true;
            } else if (i === collection.length-1) {
                return false;
            }
        }
        //objects
    } else if (typeof collection === 'object') {
        for (var key in collection) {
            var value = collection[key];
            if(func(value, key, collection) && key !== collection.length-1) {
                return true;
            } else if (key === collection.length-1) {
                return false;
            }
        }
    }
}

module.exports.some = some;

/**
 * 
 * reduce: designed to reduce a list of values into a single one
 * 
 * NOT DONE YET
 * @param {array}: the collection of values that will be reduced;
 * @param {function}: the function that actually performs the reducing;
 * @param {seed}: is used to test;
 * 
 */
 function reduce(array, func, seed) {

}

module.exports.reduce = reduce;

/**
 * 
 * extend: designed to copy objects from one to another;
 * 
 * @param {object}: the object that is being copied to create another;
 * 
 * 
 * 
 * 
 * 
 * 
 */
 function extend(object){
    each(arguments, function(extendObject){
        each(extendObject, function(value, key){
            object[key] = value;
        });
    });
    
    return object;
}

module.exports.extend = extend;