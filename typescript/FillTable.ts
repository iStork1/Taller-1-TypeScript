
import { Data } from "./data.js";
import { Serie } from "./Serie.js";

const tvshowsTbody: HTMLElement = document.getElementById('tvTbody')!;
let seasonsAvarage = 0;

function renderTable(tvshows: Serie[]): void {

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

function getSeasonsAvarage(): void {
    let sum = 0;
    Data.forEach(s => {
        sum += s.seasons;
    });
    seasonsAvarage = sum / Data.length;

}

function fillTable(): void {
    getSeasonsAvarage();
    renderTable(Data);
}

window.onload = fillTable;