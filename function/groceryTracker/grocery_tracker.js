function calculateTotal() {
    let g1,g2,g3;
    g1 = parseFloat(document.getElementById('grocery1').value);
    g2 = parseFloat(document.getElementById('grocery2').value);
    g3 = parseFloat(document.getElementById('grocery3').value);

    document.getElementById('result').innerText = `total amt : ${g1+g2+g3}`;
}