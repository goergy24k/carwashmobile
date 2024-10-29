const element = document.querySelector("wrapper");
 
element.addEventListener('wheel', (event) => {
  event.preventDefault();
 
  element.scrollBy({
    bottom: event.deltaY < 0 ? -200 : 200, //es un operador condicionl(ternario)- condition ? val1 : val2
    behavior: 'smooth'
    
  });
});