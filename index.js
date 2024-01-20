const imagina = document.querySelector("#lista");
let usersData = [];

const getName = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const dataJson = await response.json();

    console.log(dataJson);

    usersData = dataJson;

    const datis = dataJson.map((user) => {
      return `
      <li>
        <h5>${user.name}</h5>
        <h5>${user.username}</h5>
        <h5>${user.website}</h5>
        <h5>${user.email}</h5>
      </li>
      `;
    });

    imagina.innerHTML = datis.join("");
  } catch (error) {
    console.error("Errore", error);
  }
};

//nome

const ricerca = () => {
  const searchUsers = document.querySelector(".scrivi").value.toLowerCase();
  if (searchUsers === "") {
    alert("inserisci un nome");
    return;
  }
  const filtraUtenti = usersData.filter((user) =>
    user.name.toLowerCase().includes(searchUsers)
  );
  mostraNome(filtraUtenti);
  document.getElementById("trovaNome").value = "";
};

const mostraNome = (users) => {
  let datis = users.map((user) => {
    return `
    <li>
      <h5>${user.name}</h5>
    </li>
    `;
  });

  imagina.innerHTML = datis.join("");
};

//cognome

const ricercac = () => {
  const cercaUsers = document.querySelector(".schreib").value.toLowerCase();
  if (cercaUsers === "") {
    alert("inserisci un cognome");
    return;
  }
  const filterUtenti = usersData.filter((user) =>
    user.username.toLowerCase().includes(cercaUsers)
  );
  mostraCognome(filterUtenti);
  document.getElementById("trovaCognome").value = "";
};

const mostraCognome = (users) => {
  let datis = users.map((user) => {
    return `
      <li>
        <h5>${user.username}</h5>
      </li>
      `;
  });

  imagina.innerHTML = datis.join("");
};

//website

const ric = () => {
  const cerWebb = document.querySelector(".ecrit").value.toLowerCase();
  if (cerWebb === "") {
    alert("inserisci un sito web");
    return;
  }
  const filterUt = usersData.filter((user) =>
    user.website.toLowerCase().includes(cerWebb)
  );
  mostraWebb(filterUt);
  document.getElementById("trovaCognome").value = "";
};

const mostraWebb = (users) => {
  let datis = users.map((user) => {
    return `
      <li>
        <h5>${user.website}</h5>
      </li>
      `;
  });

  imagina.innerHTML = datis.join("");
};

//email

const finden = document.querySelector(".boton");
finden.addEventListener("click", ricerca);

const busca = document.querySelector(".busca");
busca.addEventListener("click", ricercac);

const trov = document.querySelector(".boto");
trov.addEventListener("click", ric);

getName();
