// Select an element from DOM
const sl = (selector, root = document) => root.querySelector(selector);
// Select all elements with specific selector from DOM
const sla = (selector, root = document) => root.querySelectorAll(selector);
// Select n-th element with specific selector from DOM
const sln = (selector, n, root = document) => root.querySelectorAll(selector)[n];
// Select first element with specific selector from DOM
const slf = (selector, root = document) => root.querySelectorAll(selector)[0];
// Select last element with specific selector from DOM
const sll = (selector, root = document) => root.querySelectorAll(selector)[root.querySelectorAll(selector).length - 1];
