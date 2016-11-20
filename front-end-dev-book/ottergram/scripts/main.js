'use strict';


const DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
const DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
const THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
const HIDDEN_DETAIL_CLASS = 'hidden-detail';
const ESC_KEY = 27;

function setDetails(imageUrl, titleText) {
  let detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  let detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);
  detailTitle.textContent = titleText;
};

function imageFromThumb(thumbnail) {
  return thumbnail.getAttribute('data-image-url');
};

function titleFromThumb(thumbnail) {
  return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
};

function addThumbClickHandler(thumb) {
  thumb.addEventListener('click', function(event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
    showDetails();
  });
}

function getThumbnailsArray() {
  let thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  let thumbnailsArr = [].slice.call(thumbnails);

  return thumbnailsArr;
}

function hideDetails() {
  document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetails() {
  document.body.classList.remove(HIDDEN_DETAIL_CLASS);
}

function addKeyPressHandler() {
  document.body.addEventListener('keyup', function(event) {
    event.preventDefault();
    if(event.keyCode === ESC_KEY) {
      hideDetails();
    }
  });
}

function initalizeEvents() {
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
  addKeyPressHandler();
}

initalizeEvents();
