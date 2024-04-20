import { Data } from "./data.js";
const tvshowsTbody = document.getElementById('tvTbody');
let seasonsAvarage = 0;
function renderTable(tvshows) {
    //add tvshows
    tvshows.forEach(s => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td><b>${s.index}</b></td>
                             <td>${s.name}</td>
                             <td>${s.channel}</td>
                             <td>${s.seasons}</td>`;
        tvshowsTbody.appendChild(trElement);
    });
    //add seasons average
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td colspan="4">${"Seasons Avarage: " + seasonsAvarage}</td>`;
    tvshowsTbody.appendChild(trElement);
}
function getSeasonsAvarage() {
    let sum = 0;
    Data.forEach(s => {
        sum += s.seasons;
    });
    seasonsAvarage = sum / Data.length;
}
function fillTable() {
    getSeasonsAvarage();
    renderTable(Data);
}
window.onload = fillTable;
