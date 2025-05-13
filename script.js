// Change the text content dynamically
document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('dynamicText').textContent = 'The text has been changed dynamically!';
});

// Modify CSS styles via JavaScript
document.getElementById('toggleStyleBtn').addEventListener('click', function() {
    const element = document.getElementById('dynamicText');
    // Toggle color and font size for style change
    if (element.style.color === 'blue') {
        element.style.color = 'red';
        element.style.fontSize = '25px';
    } else {
        element.style.color = 'blue';
        element.style.fontSize = '20px';
    }
});

// Add a new element dynamically
document.getElementById('addElementBtn').addEventListener('click', function() {
    const newElement = document.createElement('div');
    newElement.innerHTML = '<p>This is a newly added dynamic element!</p>';
    newElement.style.padding = '10px';
    newElement.style.backgroundColor = '#f0f0f0';
    newElement.style.border = '1px solid #ccc';
    document.body.appendChild(newElement);
});

// Remove an existing element dynamically
document.getElementById('removeElementBtn').addEventListener('click', function() {
    const element = document.getElementById('addedElement');
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
});
