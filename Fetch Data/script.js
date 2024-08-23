function addProduct() {
  let p = fetch("https://fakestoreapi.com/products");
  p.then((res) => res.json()).then((info) => {
    console.log(info);
    let table = document.getElementById("myTable");
    for (product of info) {
      let newRow = document.createElement("tr");
      newRow.innerHTML = `<tr>
            <td>${product.id}</td>
            <td>${product.title}</td>
            <td>${product.price}</td>
          </tr>`;
      table.appendChild(newRow);
    }
  });
}
function showProduct() {
  let table = document.getElementById("myTable");
  table.innerHTML = ` 
    <table id="myTable">
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Price</th>
        </tr>
    </table>`;
}
