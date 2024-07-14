// scripts.js

let selectedClothing = '';
let selectedModel = '';

function selectClothing(image) {
    selectedClothing = image;
    alert(`Selected clothing: ${image}`);
}

function selectModel(image) {
    selectedModel = image;
    alert(`Selected model: ${image}`);
}

function wearOutfit() {
    if (selectedClothing && selectedModel) {
        // Hide canvas if you were using it previously
        const canvas = document.getElementById('tryOnCanvas');
        if (canvas) {
            canvas.style.display = 'none';
        }

        // Display the static result image
        const resultImage = document.getElementById('resultImage');
        resultImage.src = 'new-1.jpeg'; 
        resultImage.style.display = 'block'; // Make sure the image is visible

        alert('Displaying the static image after try-on.');
    } else {
        alert('Please select both a model and clothing item.');
    }
}

