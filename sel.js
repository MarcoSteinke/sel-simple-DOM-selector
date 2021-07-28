// Select an element from DOM
const sel = (selector) => document.querySelector(selector);
// Select all elements with specific selector from DOM
const selA = (selector) => document.querySelectorAll(selector);
// Select n-th element with specific selector from DOM
const selN = (selector, n) => document.querySelectorAll(selector)[n];
// Select first element with specific selector from DOM
const selF = (selector) => document.querySelectorAll(selector)[0];
// Select last element with specific selector from DOM
const selL = (selector) => document.querySelectorAll(selector)[document.querySelectorAll(selector).length - 1];
