const country = document.getElementById('paises');
const state = document.getElementById('state');
const city = document.getElementById('city');

country.addEventListener('change', (e) => {
  e.preventDefault();
  state.innerHTML = '';
  fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
    .then((response) => response.json())
    .then((data) => {
      data.forEach((estado) => {
        const option = document.createElement('option');
        option.value = estado.sigla;
        option.innerHTML = estado.nome;
        state.appendChild(option);
      });
    });
});

state.addEventListener('change', (e) => {
  e.preventDefault();
  city.innerHTML = '';
  const UF = state.value;
  fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/distritos`)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((municipio) => {
        const option = document.createElement('option');
        option.value = municipio.id;
        option.innerHTML = municipio.nome;
        city.appendChild(option);
      });
    });
});