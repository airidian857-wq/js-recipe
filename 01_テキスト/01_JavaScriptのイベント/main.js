// button 要素と click イベント
const alertMessage = function () {
  alert("クリックしたね")
}

alertMessage() // アラートが表示される

const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const logValue = function (e) {
  console.log(e.key)
}

inputText.oninput = logValue
inputDate.oninput = logValue
