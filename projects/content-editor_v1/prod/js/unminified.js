'use strict';

// Toggle selection menus open and closed

const togglers = document.querySelectorAll('.toggler');
function toggleActive(e){
  if (e.target.classList.contains('toggler')){
    e.target.parentNode.classList.toggle('active');
  };
}
togglers.forEach(toggler => toggler.addEventListener('click', toggleActive));

// automatically place text into the teaser field
const bodyField = document.querySelector('#story-body');
const teaserField = document.querySelector('#teaser-field');
let updateFlag = true;

function copyTextToField(fromField, toField, charTotal){
  let val = fromField.value;
  if (val === undefined){
    val = fromField.textContent;
  };
  toField.value = val.substring(0,charTotal);
}
function updateTeaser(e){
  if (!updateFlag) return;
  // if the teaser hasn't been messed with:
  copyTextToField(this, teaserField, 150);
}
bodyField.addEventListener('keyup', updateTeaser);

if (teaserField){
  teaserField.addEventListener('change', function(){
    if (this.value != '') {
      updateFlag = false;
    } else {
      updateFlag = true;
      copyTextToField(bodyField, teaserField, 150);
    }
  });
}



// inline help

function closeModal(e){
  const modal = document.querySelector('.modal');
  modal.removeEventListener('click', closeModal);
  document.body.removeChild(modal);
}
function createModal(title, text){
  const header = document.getElementById('header');

  // create some html elements
  const modal = document.createElement('div');
  const modalWindow = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  // add content and style to the elements
  h2.textContent = title;
  p.textContent = text;
  modal.classList.add('modal');
  modalWindow.classList.add('modal__window');

  // add the elements to the document
  modalWindow.appendChild(h2);
  modalWindow.appendChild(p);
  modal.appendChild(modalWindow);
  document.body.insertBefore(modal, header);

  modal.addEventListener('click', closeModal);
}
function handleHelp(e){
  const title = this.dataset.title;
  const text = this.dataset.text;
  createModal(title, text);
}

const helpButtons = document.querySelectorAll('.help, .explainer');
helpButtons.forEach(helper => helper.addEventListener('click', handleHelp));

// Add Media
function showMediaNavigator(){
  const addMedia = document.querySelector('#media-tools');
  addMedia.classList.add('active');
  document.querySelector('#close-media').addEventListener('click', function closeMedia(e){
    addMedia.classList.remove('active');
    this.removeEventListener('click', closeMedia);
  })
}

const mediaButton = document.querySelector('#add-media');
if (mediaButton){
  mediaButton.addEventListener('click', handleHelp);
}

// const wysiwyg = document.querySelector('.wysiwyg');
// let headlineUpdated = false;
// let bodyUpdated = false;
// const prevHeadline = document.getElementById('story-title').textContent;
// const prevBody = document.getElementById('story-body').textContent;
//
// function checkContentEditable(e){
//   if(e.target.classList.contains('wysiwyg__headline') || e.target.classList.contains('wysiwyg__body')){
//     if (!headlineUpdated){
//       e.target.textContent = '';
//       headlineUpdated = true;
//     }
//   };
// }
//
// wysiwyg.addEventListener('click', checkContentEditable);
