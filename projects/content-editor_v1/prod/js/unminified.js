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
  if (!fromField.value) return;
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
if (bodyField){
  bodyField.addEventListener('keyup', updateTeaser);
}

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

function toggleDropdown(){
  this.classList.toggle('closed');
}
const dropdownMenus = document.querySelectorAll('.block__heading--dropdown');
dropdownMenus.forEach(el => el.addEventListener('click', toggleDropdown));

const showMetaBtn = document.querySelector('.super-clean__options > .super-clean__btn');
const meta = document.querySelector('.meta--clean');
const metaBtnText = showMetaBtn.textContent;
showMetaBtn.addEventListener('click', function(){
  meta.classList.toggle('show');
  this.textContent = meta.classList.contains('show') ? 'Hide Story Settings' : metaBtnText;
})

function togglePublishV4Workflow(){
  const part1 = document.getElementById('publish1').classList.toggle('active');
}
const publishV4 = document.getElementById('publish-on-v4');
publishV4.addEventListener('click', togglePublishV4Workflow);
document.getElementById('publish-cancel').addEventListener('click', togglePublishV4Workflow);

function toggleShareV4Workflow(){
  const part1 = document.getElementById('share1').classList.toggle('active');
}
const shareV4 = document.getElementById('share-on-v4');
shareV4.addEventListener('click', toggleShareV4Workflow);
document.getElementById('share-cancel').addEventListener('click', toggleShareV4Workflow)

// const cleanBodyContent = document.querySelector('.super-clean__body');
// cleanBodyContent.addEventListener('keydown', function emptyBodyContent(e){
//   cleanBodyContent.style.color = '#333';
//   cleanBodyContent.removeEventListener('keydown', emptyBodyContent);
// })
//
// const cleanHeadlineContent = document.querySelector('.super-clean__headline');
// cleanHeadlineContent.addEventListener('keydown', function emptyHeadlineContent(e){
//   cleanHeadlineContent.style.color = '#333';
//   cleanHeadlineContent.removeEventListener('keydown', emptyHeadlineContent);
// })

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
