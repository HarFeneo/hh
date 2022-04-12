const fileUploader = document.getElementById('file-uploader');

fileUploader.addEventListener('change', (event) => {
  const files = event.target.files;
  console.log('files', files);
  
  // show the upload feedback
  const feedback = document.getElementById('feedback');
  const msg = `${files.length} file(s) uploaded successfully!`;
            feedback.innerHTML = msg;
});