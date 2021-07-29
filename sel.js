const [sl, sla, sln, slf, sll, slfn, slln] = [
  // Select an element from DOM
  (selector, root = document) => root.querySelector(selector),
  
  // Select all elements with specific selector from DOM
  (selector, root = document) => root.querySelectorAll(selector),
  
  // Select n-th element with specific selector from DOM
  (selector, n, root = document) => sla(selector)[n],
  
  // Select first element with specific selector from DOM
  (selector, root = document) => sla(selector, root)[0],
  
  // Select last element with specific selector from DOM
  (selector, root = document) => sla(selector, root)[sla(selector, root).length - 1],
  
  // Select first n elements with specific selector from DOM
  (selector, n, root = document) => sla(selector, root).slice(0, n),
  
  // Select last n elements with a specific selector from DOM
  (selector, n, root = document) => sla(selector, root).slice(sla(selector, root).length - n, sla(selector, root).length)
]
