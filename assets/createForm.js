function formCreator(value) {
    console.log(value);
    const contentDiv = document.getElementById('create-Form');
    const contentIMGDiv = document.getElementById('create-IMG-Form');
    const contentPDFDiv = document.getElementById('create-PDF-Form');
    formID = {
        'TextBox' : 1,
        'IMG-Uploader' : 2,
        'PDF-Uploader' : 3
    }
    // formSpace=document.getElementById("create-Form");
    const fileInput = {};
    for (i in value) {
        switch(formID[value[i]['Type']]) {
            case 1:
                const nameLabel = document.createElement('label');
                nameLabel.textContent = `${value[i]['Label']}`;
                contentDiv.appendChild(nameLabel);
        
                const nameInput = document.createElement('input');
                nameInput.type = 'text';
                nameInput.name = 'name';
                nameInput.id = i;
                contentDiv.appendChild(nameInput);
                contentDiv.appendChild(document.createElement('br'));
              break;
            case 2:
                // Create the file input element
                fileInput[i] = document.createElement('input');
                fileInput[i].type = 'file';
                fileInput[i].accept = 'image/*';

                // Create the preview image element
                const previewImage = document.createElement('img');
                previewImage.style.maxWidth = '100%';

                // Add event listener to update preview when a file is selected
                fileInput[i].addEventListener('change', function(event) {
                    const file = event.target.files[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = function(e) {
                            previewImage.src = e.target.result;
                        };
                        reader.readAsDataURL(file);
                    }
                });

                // Append elements to the container
                contentIMGDiv.appendChild(fileInput[i]);
                contentIMGDiv.appendChild(previewImage);
              break;
            case 3:
                // Create the file input element
                fileInput[i] = document.createElement('input');
                fileInput[i].type = 'file';
                fileInput[i].accept = 'application/pdf';

                // Create a link for downloading the PDF (initially hidden)
                const downloadLink = document.createElement('a');
                downloadLink.style.display = 'none';

                // Add event listener to update link when a file is selected
                fileInput[i].addEventListener('change', function(event) {
                    const file = event.target.files[0];
                    if (file) {
                        downloadLink.href = URL.createObjectURL(file);
                        downloadLink.download = file.name;
                        downloadLink.textContent = 'Download PDF';
                        downloadLink.style.display = 'block';
                    } else {
                        downloadLink.style.display = 'none';
                    }
                });

                // Append elements to the container
                contentPDFDiv.appendChild(fileInput[i]);
                contentPDFDiv.appendChild(downloadLink);
            default:
              // code block
          }
        console.log(`${i} : ${value[i]['Label']}`);
        console.log(`${i} : ${value[i]['Type']}`);
    }
    // formSpace.textContent = value;
    // // Display the entered value in the span
    // entry.textContent = `value`;
}

// module.exports = { formCreator };