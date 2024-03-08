'use strict';

const prevBtn = document.querySelectorAll('.btn')[0];
const nextBtn = document.querySelectorAll('.btn')[1];

const paginationContainer = document.querySelector('.pagination');
const currentPage = document.querySelector('.curPage');

const data = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

let pageNumber = 1;
const itemsPerPage = 10;
const totalPages = Math.ceil(data.length / itemsPerPage);

function renderPage(pageNum) {
  const startIndex = (pageNum - 1) * itemsPerPage;
  const lastIndex = startIndex + itemsPerPage;
  const curPage = data.slice(startIndex, lastIndex);

  // paginationContainer.innerHTML = curPage.map(
  //   (item) => `<li class="list"> ${item}</li>`
  // );

  // OR below is optimized version, it only updates the content of the existing container

  paginationContainer.textContent = ''; // Clear previous content

  curPage.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.className = 'list';
    listItem.textContent = item;
    paginationContainer.appendChild(listItem);
  });

  currentPage.textContent = pageNum;
}

prevBtn.addEventListener('click', function () {
  if (pageNumber > 1) {
    pageNumber = pageNumber - 1;
    renderPage(pageNumber);
  }
});

nextBtn.addEventListener('click', function () {
  if (pageNumber < totalPages) {
    pageNumber = pageNumber + 1;
    renderPage(pageNumber);
  }
});

renderPage(1);
