function calculateIMC() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    if (weight > 0 && height > 0) {
        var imc = weight / (height * height);
        var resultText = "Seu IMC é: " + imc.toFixed(2);
        document.getElementById('result').innerText = resultText;
    } else {
        document.getElementById('result').innerText = "Por favor, insira valores válidos para peso e altura.";
    }
}
