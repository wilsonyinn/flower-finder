document.getElementById('photo-upload').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData();
    const fileField = document.querySelector('input[type="file"]');

    formData.append('photo', fileField.files[0]);

    fetch('/api/uploads/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Photo uploaded successfully!');
        } else {
            alert('Upload failed: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while uploading the photo.');
    });
});