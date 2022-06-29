const searchInput = document.getElementById("search");
const rows = document.querySelectorAll("#itemList li");
//ul의 li이 선택되는지 확인
//console.log(rows);
searchInput.addEventListener("keyup", function (event) {
  //input에 입력시 함수가 작동하는지 확인
  //console.log(event);
  const q = event.target.value;
  rows.forEach((row) => {
    //input에 입력시 tr값을 가져오는지 확인
    console.log(row);
    row.querySelector("li a.item-list").textContent.toLowerCase().includes(q)
      ? (row.style.display = "")
      : (row.style.display = "none");
    //console.log(q);
  });
});
