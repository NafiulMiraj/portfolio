// Download PDF resume
document.getElementById('downloadBtn').addEventListener('click', function(){
  const url = 'assets/NafiulAlamMirajResume.pdf';
  const a = document.createElement('a');
  a.href = url;
  a.download = 'NafiulAlamMirajResume.pdf';
  document.body.appendChild(a);
  a.click();
  a.remove();
});

// Contact button
const hireBtn = document.getElementById('hireBtn');
if(hireBtn){
  hireBtn.addEventListener('click', () => {
    window.location.href = 'mailto:nafiulmiraj@gmail.com?subject=Opportunity%20to%20work%20with%20you';
  });
}

// Simple thumbnail click to open image in new tab
const thumbs = document.querySelectorAll('.thumbs img');
thumbs.forEach(t => t.addEventListener('click', e => {
  window.open(e.target.src, '_blank');
}));