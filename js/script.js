document.getElementById('calculate-area').addEventListener('click', function () {
    var sideLength = document.getElementById('side-length').value;
    var area = sideLength * sideLength;
    document.getElementById('area-result').textContent = 'Luas: ' + area;
});

document.getElementById('calculate-perimeter').addEventListener('click', function () {
    var sideLength = document.getElementById('side-length').value;
    var perimeter = 4 * sideLength;
    document.getElementById('perimeter-result').textContent = 'Keliling: ' + perimeter;
});
document.getElementById('clear').addEventListener('click', function () {
    document.getElementById('side-length').value = '';
    document.getElementById('area-result').textContent = '';
    document.getElementById('perimeter-result').textContent = '';
});