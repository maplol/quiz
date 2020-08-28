// var mydata = JSON.parse(JSON.stringify(data));
// //let ses = document.getElementById("1");
// let questi = []; // <------- это должно отправляться в index.js

// for (let i = 0; i <= 2; i++) {
//   questi[i] = mydata[Math.floor(Math.random() * mydata.length)];
// }
let inp;
let answered = document.getElementById("answered");
let allque = document.getElementById("allque");
answered.value = 0;
////взятие файла с сервера
function checkright() {
  fetch("http://localhost:3000/public/data.json")
    .then((response) => {
      return response.json();
    })
    ////сама проверка чекбоксов
    .then((data) => {
      const divs = document.querySelectorAll("div");
      inp = Array.from(divs, (div) =>
        Array.from(
          div.querySelectorAll('[type="checkbox"]'),
          ({ checked }, i) => (checked ? ++i : 0)
        ).filter((a) => a)
      );
      answered.value = data.filter(
        ({ correct }, i) =>
          JSON.stringify(correct) === JSON.stringify(inp[i]) ||
          divs[i].classList.add("red")
      ).length;
      allque.value = `из ${data.length}`;
      console.log(answered.value);
      document
        .querySelectorAll("div input")
        .forEach((elem) => elem.setAttribute("disabled", "disabled"));
    });
}

// как реализовать проверку -
// искать айди и если по этому айди чекается инпут и eсли второе число индекса+1 равно элементу массива, то это +1 балл
