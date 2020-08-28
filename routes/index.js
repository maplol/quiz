const express = require("express"),
  fs = require("fs"),
  router = express.Router();

/////
let rawdata = fs.readFileSync("./public/data.json");
let quest = JSON.parse(rawdata);
let questi = [];

function makeRand(num) {
  var usedNumbers = [];
  function f() {
    if (usedNumbers.length == num) usedNumbers = [];
    var i = Math.floor(Math.random() * num);
    return usedNumbers.includes(i) ? f() : (usedNumbers.push(i), i);
  }
  return f;
}

var x = makeRand(quest.length);

for (let i = 0; i < 20; i++) {
  questi[i] = quest[x()];
}

// let checks = [];
// function ses() {
//   for (let i = 0; i < questi.length; i++) {
//     for (let j = 0; j < questi[i].answers.length; j++) {
//       if (questi[i].correct.length > 1) {
//         checks[j] = "checkbox";
//       } else if (questi[i].correct.length <= 1) {
//         checks[j] = "radio";
//       }
//     }
//   }
//   return checks;
// }
//////

router.get("/public/data.json", function (req, res) {
  res.writeHead(200, {
    "Content-type": "application/json",
  });

  res.end(JSON.stringify(questi));
});

router.get("/", function (req, res) {
  res.render("test", {
    times: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
    ],
    style: "main",
    quests: questi,
  });
});

module.exports = router;
