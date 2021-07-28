const [sl, sla, sln, slf, sll] = [
  // Select an element from DOM
  (selector, root = document) => root.querySelector(selector),
  
  // Select all elements with specific selector from DOM
  (selector, root = document) => root.querySelectorAll(selector),
  
  // Select n-th element with specific selector from DOM
  (selector, n, root = document) => sla(selector)[n],
  
  // Select first element with specific selector from DOM
  (selector, root = document) => sla(selector, root)[0],
  
  // Select last element with specific selector from DOM
  (selector, root = document) => sla(selector, root)[sla(selector, root).length - 1]
]
