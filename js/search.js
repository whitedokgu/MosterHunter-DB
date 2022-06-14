const searchInput = document.getElementById("search");
const rows = document.querySelectorAll("tbody tr");
//tbody의 tr이 선택되는지 확인
//console.log(rows);
searchInput.addEventListener("keyup", function (event) {
  //input에 입력시 함수가 작동하는지 확인
  //console.log(event);
  const q = event.target.value;
  rows.forEach((row) => {
    //input에 입력시 tr값을 가져오는지 확인
    console.log(row);
    row.querySelector("td.td-name").textContent.toLowerCase().includes(q)
      ? (row.style.display = "")
      : (row.style.display = "none");
    //console.log(q);
  });
});
