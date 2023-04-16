// selectors
const about_video = document.querySelector('.about_video');
const lightbox = document.querySelector('.lightbox');
const lightbox_content = document.querySelector('.lightbox_content');

about_video.addEventListener('click', (e) => {
	lightbox.classList.add('lightbox_show');
});

lightbox.addEventListener('click', (e) => {
	lightbox.classList.remove('lightbox_show');
});

lightbox_content.addEventListener('click', (e) => {
	e.stopPropagation();
});
