window.addEventListener("DOMContentLoaded", () => {
  Table("sidebar-table");
  Table("main-table");
  Loading();
});

const Table = (input) => {
  let h = document.querySelectorAll(".article-main h2, .article-main h3");
  let h2 = document.querySelectorAll(".article-main h2");
  let table = document.getElementById(input);
  let h2_number = 0;
  let h3_number = 0;
  for (let i1 = 0; i1 < h.length; i1++) {
    if (h[i1].tagName == "H2") {
      h2[h2_number].id = h2_number;
      table.innerHTML += `<li class="table_h2">
        <a href="#${h2_number}">${h2[h2_number].innerHTML}</a>
        </li>`;
      h2_number += 1;
      h3_number = 0;
    } else {
      h[i1].id = `${h2_number - 1}.${h3_number}`;
      table.innerHTML += `<li class="table_h3">
        <a href="#${h[i1].id}">${h[i1].innerHTML}</a>
        </li>`;
      h3_number += 1;
    }
  }
};
