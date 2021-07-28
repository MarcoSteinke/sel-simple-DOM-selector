// Select an element from DOM
const sl = (selector) => document.querySelector(selector);
// Select all elements with specific selector from DOM
const sla = (selector) => document.querySelectorAll(selector);
// Select n-th element with specific selector from DOM
const sln = (selector, n) => document.querySelectorAll(selector)[n];
// Select first element with specific selector from DOM
const slf = (selector) => document.querySelectorAll(selector)[0];
// Select last element with specific selector from DOM
const sll = (selector) => document.querySelectorAll(selector)[document.querySelectorAll(selector).length - 1];
