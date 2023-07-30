document.addEventListener("DOMContentLoaded", function () {
  const data = [
    {
      id: 1,
      nameOnAccount: "John Doe",
      phonenumber: "08123456789",
      email: "personsname@gmail.com",
      dob: "DD/MM/YYYY",
      type: "Agent",
    },
    {
      id: 2,
      nameOnAccount: "Jane Doe",
      phonenumber: "08123456789",
      email: "personsname@gmail.com",
      dob: "DD/MM/YYYY",
      type: "Agent",
    },
    {
      id: 3,
      nameOnAccount: "Smith Doe",
      phonenumber: "08123456789",
      email: "personsname@gmail.com",
      dob: "DD/MM/YYYY",
      type: "Individual",
    },
    {
      id: 4,
      nameOnAccount: "Lambert Doe",
      phonenumber: "08123456789",
      email: "personsname@gmail.com",
      dob: "DD/MM/YYYY",
      type: "Agent",
    },
    {
      id: 5,
      nameOnAccount: "Peter Doe",
      phonenumber: "08123456789",
      email: "personsname@gmail.com",
      dob: "DD/MM/YYYY",
      type: "Individual",
    },
    {
      id: 6,
      nameOnAccount: "John Doe",
      phonenumber: "08123456789",
      email: "personsname@gmail.com",
      dob: "DD/MM/YYYY",
      type: "Agent",
    },
    {
      id: 7,
      nameOnAccount: "John Doe",
      phonenumber: "08123456789",
      email: "personsname@gmail.com",
      dob: "DD/MM/YYYY",
      type: "Individual",
    },
    {
      id: 8,
      nameOnAccount: "John Doe",
      phonenumber: "08123456789",
      email: "personsname@gmail.com",
      dob: "DD/MM/YYYY",
      type: "Agent",
    },
  ];

  const tableBody = document.querySelector("#tbody");
  const searchInput = document.querySelector("#searchInput");

  // Function to filter the data based on the search query
  function filterData(query) {
    return data.filter((item) => {
      const nameOnAccount = item.nameOnAccount.toLowerCase();
      const phonenumber = item.phonenumber.toLowerCase();
      const email = item.email.toLowerCase();
      const type = item.type.toLowerCase();

      return (
        nameOnAccount.includes(query) ||
        phonenumber.includes(query) ||
        email.includes(query) ||
        type.includes(query)
      );
    });
  }

  // Function to render the filtered data
  function renderFilteredData(filteredData) {
    tableBody.innerHTML = "";

    const rows = filteredData.map(
      (item) =>
        `<tr class="table-row">
            <td class="nameonaccount"><h3>${item.nameOnAccount}</h3></td>
            <td>${item.phonenumber}</td>
            <td>${item.email}</td>
            <td>${item.dob}</td>
            <td>${item.type}</td>
            <td><span class="material-icons-outlined more-vert">more_vert</span></td>
        </tr>`
    );

    tableBody.innerHTML = rows.join("");
  }

  // Function to handle the search event
  function handleSearch() {
    const query = searchInput.value.toLowerCase();
    const filteredDataResult = filterData(query);
    renderFilteredData(filteredDataResult);
  }

  // Attach an event listener to the search input
  searchInput.addEventListener("input", handleSearch);

  // Function to render the table data
  function renderData() {
    tableBody.innerHTML = "";

    const rows = data.map(
      (item) =>
        `<tr class="table-row">
            <td class="nameonaccount"><h3>${item.nameOnAccount}</h3></td>
            <td>${item.phonenumber}</td>
            <td>${item.email}</td>
            <td>${item.dob}</td>
            <td>${item.type}</td>
            <td><span class="material-icons-outlined more-vert">more_vert</span></td>
        </tr>`
    );

    return (tableBody.innerHTML = rows.join(""));
  }

  renderData();
});
