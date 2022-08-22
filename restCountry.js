fetch('https://restcountries.com/v3.1/all')
    .then(Response => Response.json())
    .then(data => countrys(data))

const countrys = datas => {
    const container = document.getElementById('container');
    datas.forEach(country => {
        console.log(country)
        const div = document.createElement('div');
        div
        div.style.backgroundColor = 'gray';
        div.style.margin = '10px';
        div.style.padding = '10px';
        div.style.borderRadius = '5px';
        div.innerHTML = `
        <img src="${country.flags.svg}" width="300px"/>
            <h3>Name : ${country.name.common}</h3>
            <p>capital : ${country.capital}</p>
            <button>detail</button>
        `
        container.appendChild(div);
    });
}