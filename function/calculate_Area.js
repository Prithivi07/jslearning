function calculateArea() {
    let l,w;
    l = parseFloat(document.getElementById('length').value);
    w = parseFloat(document.getElementById('width').value);
    let area = l*w;
    document.getElementById('result').innerText = `The rectangle area is: ${area}`;
}



