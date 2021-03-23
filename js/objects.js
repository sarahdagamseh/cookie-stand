'use strict';
let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

const seattle = {
    this.city: 'Seattle',
    this.minCust: minCust,
    this.maxCust: maxCust,
    this.avg: avg,
    this.custHour: [],
    this.amnt: amnt,
    this.total: 0,
    city.prototype.CustNumber= function () {


        for (let i = 0; i < workingHours.length; i++) {
            let randomFinal = getRandomCus(this.minCust, this.maxCust);
            this.custHour.push(randomFinal);
        }
    },
    calculate function () {
        for (let i = 0; i < workingHours.length; i++) {
            const perHour = Math.ceil(this.custHour[i] * this.avg);
            this.amnt.push(perHour);
            this.total = perHour + this.total + perHour;
        }
    },
    city.prototype.CustNumber= function() {
        const container = document.getElementById('coc');
        const divEl = document.createElement('div');
        container.appendChild(divEl);
        const h1El = document.createElement('h1');
        divEl.appendChild(h1El);
        h1El.textContent = 'pats Salmon Cookies Sales Data';
        const h2El = document.createElement('h2');
        divEl.appendChild(h2El);
        h2El.textContent = this.city;
        const ulEl = document.createElement('ul');
        divEl.appendChild(ulEl);
        for (let i = 0; i < workingHours.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${workingHours[i]} : ${this.amnt[i]} cookies`;
        }
        const liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `${hour[i]}: ${this.amnt[i]} cookies`;
    }
  _const: liEl = document.createElement('li'),
    get const() {
        return this._const;
    },
    set const(value) {
        this.const = value;
    },
;
ulEl.appendcRandomCus(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
seattle.CustNumber();
seattle.calculate();
seattle.render();

'use strict';
let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

const tokyo = {
    city: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avg: 1.2,
    custHour: [],
    amnt: [],
    total: 0,
    CustNumber: function () {


        for (let i = 0; i < workingHours.length; i++) {
            let randomFinal = getRandomCus(this.minCust, this.maxCust);
            this.custHour.push(randomFinal);
        }
    },
        calculate: function () {
        for (let i = 0; i < workingHours.length; i++) {
            const perHour = Math.ceil(this.custHour[i] * this.avg);
            this.amnt.push(perHour);
            this.total = this.total + perHour;
        }
    },
    render: function () {
        const container = document.getElementById('coc');
        const divEl = document.createElement('div');
        container.appendChild(divEl);
        const h1El = document.createElement('h1');
        divEl.appendChild(h1El);
        h1El.textContent = 'pats Salmon Cookies Sales Data';
        const h2El = document.createElement('h2');
        divEl.appendChild(h2El);
        h2El.textContent = this.city;
        const ulEl = document.createElement('ul');
        divEl.appendChild(ulEl);
        for (let i = 0; i < workingHours.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${workingHours[i]} : ${this.amnt[i]} cookies`;
        }
        const liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `${hour[i]}: ${this.amnt[i]} cookies`;
    }
  const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = ` Total: ${this.total}:cookies`;
}

};

function getRandomCus(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
tokyo.CustNumber();
tokyo.calculate();
tokyo.render();



const dubai = {
    city: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avg: 3.7,
    custHour: [],
    amnt: [],
    total: 0,
    CustNumber: function () {


        for (let i = 0; i < workingHours.length; i++) {
            let randomFinal = getRandomCus(this.minCust, this.maxCust);
            this.custHour.push(randomFinal);
        }
    },
    calculate: function () {
        for (let i = 0; i < workingHours.length; i++) {
            const perHour = Math.ceil(this.custHour[i] * this.avg);
            this.amnt.push(perHour);
            this.total = this.total + perHour;
        }
    },
    render: function () {
        const container = document.getElementById('salesSection');
        const articlEl = document.createElement('article');
        container.appendChild(articlEl);
        const h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        const pEl = document.createElement('p');
        articlEl.appendChild(pEl);
        pEl.textContent = this.city;
        const ulEl = document.createElement('ul');
        articlEl.appendChild(ulEl);
        for (let i = 0; i < workingHours.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${workingHours[i]} : ${this.amnt[i]} cookies`;
        }
        const p2El = document.createElement('p');
        articlEl.appendChild(p2El);
        p2El.textContent = `Total : ${this.total}`;
    }
};

function getRandomCus(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
dubai.CustNumber();
dubai.calculate();
dubai.render();

const tokyo = {
    paris: 'Tokyo',
    minCust: 20,
    maxCust: 38,
    avg: 2.3,
    custHour: [],
    amnt: [],
    total: 0,
    CustNumber: function () {


        for (let i = 0; i < workingHours.length; i++) {
            let randomFinal = getRandomCus(this.minCust, this.maxCust);
            this.custHour.push(randomFinal);
        }
    },
    calculate: function () {
        for (let i = 0; i < workingHours.length; i++) {
            const perHour = Math.ceil(this.custHour[i] * this.avg);
            this.amnt.push(perHour);
            this.total = this.total + perHour;
        }
    },
    render: function () {
        const container = document.getElementById('salesSection');
        const articlEl = document.createElement('article');
        container.appendChild(articlEl);
        const h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        const pEl = document.createElement('p');
        articlEl.appendChild(pEl);
        pEl.textContent = this.city;
        const ulEl = document.createElement('ul');
        articlEl.appendChild(ulEl);
        for (let i = 0; i < workingHours.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${workingHours[i]} : ${this.amnt[i]} cookies`;
        }
        const p2El = document.createElement('p');
        articlEl.appendChild(p2El);
        p2El.textContent = `Total : ${this.total}`;
    }
};

function getRandomCus(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
paris.CustNumber();
paris.calculate();
paris.render();

const lima = {
    city: 'Lima',
    minCust: 3,
    maxCust: 24,
    avg: 1.2,
    custHour: [],
    amnt: [],
    total: 0,
    CustNumber: function () {


        for (let i = 0; i < workingHours.length; i++) {
            let randomFinal = getRandomCus(this.minCust, this.maxCust);
            this.custHour.push(randomFinal);
        }
    },
    calculate: function () {
        for (let i = 0; i < workingHours.length; i++) {
            const perHour = Math.ceil(this.custHour[i] * this.avg);
            this.amnt.push(perHour);
            this.total = this.total + perHour;
        }
    },
    render: function () {
        const container = document.getElementById('salesSection');
        const articlEl = document.createElement('article');
        container.appendChild(articlEl);
        const h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        const pEl = document.createElement('p');
        articlEl.appendChild(pEl);
        pEl.textContent = this.city;
        const ulEl = document.createElement('ul');
        articlEl.appendChild(ulEl);
        for (let i = 0; i < workingHours.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${workingHours[i]} : ${this.amnt[i]} cookies`;
        }
        const p2El = document.createElement('p');
        articlEl.appendChild(p2El);
        p2El.textContent = `Total : ${this.total}`;
    }
};

function getRandomCus(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
lima.CustNumber();
lima.calculate();
lima.render();