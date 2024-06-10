function formCreator(value) {
    console.log(value);
    const contentDiv = document.getElementById('create-Form');
    formID = {
        'TextBox' : 1,
        'IMG-Uploader' : 2
    }
    // formSpace=document.getElementById("create-Form");
    
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
                const fileInput = document.createElement('input');
                fileInput.type = 'file';
                fileInput.accept = 'image/*';

                // Create the preview image element
                const previewImage = document.createElement('img');
                previewImage.style.maxWidth = '100%';

                // Add event listener to update preview when a file is selected
                fileInput.addEventListener('change', function(event) {
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
                contentDiv.appendChild(fileInput);
                contentDiv.appendChild(previewImage);
              break;
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