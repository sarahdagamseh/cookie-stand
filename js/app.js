'use strict';
const Seattle = {
  city:'Seattle',
  maxCount:65,
  minCount:23,
  Customers:6.3,
  Arr1:[],
  Arr2:['6am' ,'7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  average:0,
  result:0,
  getavg: function(min,max){
    this.average = Math.floor(getRandomNumber(min,max)*this.Customers);
   
  },
  render: function(){
    const container = document.getElementById('Objects');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.city;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for(let i=0; i<this.Arr2.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      this.getavg(this.minCount,this.maxCount);
      this.Arr1.push(this.average);
      liEl.textContent = `${this.Arr2[i]}: ${this.Arr1[i]}  cookies `;
      this.result=this.result+this.Arr1[i];
    }
    const liE2 =document.createElement('li');
    ulEl.appendChild(liE2);
    liE2.textContent=`Total cookies : ${this.result}`;
  }
};
Seattle.getavg(Seattle.minCount,Seattle.maxCount);
Seattle.render();

const Tokyo = {
    city:'TOKYO',
    maxCount:24,
    minCount:3,
    Customers:1.2,
    Arr1:[],
    Arr2:['6am' ,'7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
    average:0,
    result:0,
    getavg: function(min,max){
        this.average = Math.floor(getRandomNumber(min,max)*this.Customers);
    },
    render: function(){
      const container = document.getElementById('Objects');
      const articleEl = document.createElement('article');
      container.appendChild(articleEl);
      const h2El = document.createElement('h2');
      articleEl.appendChild(h2El);
      h2El.textContent = this.city;
      const ulEl = document.createElement('ul');
      articleEl.appendChild(ulEl);
      for(let i=0; i<this.Arr2.length; i++)
      {
        const liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        this.getavg(this.minCount,this.maxCount);
        this.Arr1.push(this.average);
        liEl.textContent = `${this.Arr2[i]}: ${this.Arr1[i]}  cookies `;
        this.result=this.result+this.Arr1[i];
      }
      const liE2 =document.createElement('li');
      ulEl.appendChild(liE2);
      liE2.textContent=`Total cookies : ${this.result}`;
    }
  };

function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  Tokyo.getavg(Seattle.minCount,Seattle.maxCount);
  Tokyo.render();

  const Dubai = {
    city:'DUBAI',
    maxCount:38,
    minCount:11,
    Customers:3.7,
    Arr1:[],
    Arr2:['6am' ,'7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
    average:0,
    result:0,
    getavg: function(min,max){
        this.average = Math.floor(getRandomNumber(min,max)*this.Customers);
    },
    render: function(){
      const container = document.getElementById('Objects');
      const articleEl = document.createElement('article');
      container.appendChild(articleEl);
      const h2El = document.createElement('h2');
      articleEl.appendChild(h2El);
      h2El.textContent = this.city;
      const ulEl = document.createElement('ul');
      articleEl.appendChild(ulEl);
      for(let i=0; i<this.Arr2.length; i++)
      {
        const liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        this.getavg(this.minCount,this.maxCount);
        this.Arr1.push(this.average);
        liEl.textContent = `${this.Arr2[i]}: ${this.Arr1[i]}  cookies `;
        this.result=this.result+this.Arr1[i];
      }
      const liE2 =document.createElement('li');
      ulEl.appendChild(liE2);
      liE2.textContent=`Total cookies : ${this.result}`;
    }
  };

function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  Dubai.getavg(Seattle.minCount,Seattle.maxCount);
  Dubai.render();

  const Paris = {
    city:'PARIS',
    maxCount:38,
    minCount:20,
    Customers:2.3,
    Arr1:[],
    Arr2:['6am' ,'7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
    average:0,
    result:0,
    getavg: function(min,max){
      this.average = Math.floor(getRandomNumber(min,max)*this.Customers);
    },
    render: function(){
      const container = document.getElementById('Objects');
      const articleEl = document.createElement('article');
      container.appendChild(articleEl);
      const h2El = document.createElement('h2');
      articleEl.appendChild(h2El);
      h2El.textContent = this.city;
      const ulEl = document.createElement('ul');
      articleEl.appendChild(ulEl);
      for(let i=0; i<this.Arr2.length; i++)
      {
        const liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        this.getavg(this.minCount,this.maxCount);
        this.Arr1.push(this.average);
        liEl.textContent = `${this.Arr2[i]}: ${this.Arr1[i]}  cookies `;
        this.result=this.result+this.Arr1[i];
      }
      const liE2 =document.createElement('li');
      ulEl.appendChild(liE2);
      liE2.textContent=`Total cookies : ${this.result}`;
    }
  };

function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  Paris.getavg(Seattle.minCount,Seattle.maximum);
  Paris.render();

  const Lima = {
    city:'LIMA',
    maxCount:16,
    minCount:2,
    Customers:2.3,
    Arr1:[],
    Arr2:['6am' ,'7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
    average:0,
    result:0,
    getavg: function(min,max){
        this.average = Math.floor(getRandomNumber(min,max)*this.Customers);
    },
    render: function(){
      const container = document.getElementById('Objects');
      const articleEl = document.createElement('article');
      container.appendChild(articleEl);
      const h2El = document.createElement('h2');
      articleEl.appendChild(h2El);
      h2El.textContent = this.city;
      const ulEl = document.createElement('ul');
      articleEl.appendChild(ulEl);
      for(let i=0; i<this.Arr2.length; i++)
      {
        const liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        this.getavg(this.minimum,this.maxCount);
        this.Arr1.push(this.average);
        liEl.textContent = `${this.Arr2[i]}: ${this.Arr1[i]}  cookies `;
        this.result=this.result+this.Arr1[i];
      }
      const liE2 =document.createElement('li');
      ulEl.appendChild(liE2);
      liE2.textContent=`Total cookies : ${this.result}`;
    }
  };

function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  Lima.getavg(Seattle.minCount,Seattle.maxCount);
  Lima.render();