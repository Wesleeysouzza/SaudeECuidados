function calculateIMC() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    // Converter altura de centímetros para metros se o valor for maior que 3 metros
    if (height > 3) {
        height = height / 100; // Transforma centímetros em metros
    }

    if (weight > 0 && height > 0) {
        var imc = weight / (height * height);
        var resultText = "Seu IMC é: " + imc.toFixed(2) + ". Categoria: ";

        if (imc < 18.5) {
            resultText += "Abaixo do peso.";
        } else if (imc >= 18.5 && imc <= 24.9) {
            resultText += "Peso normal.";
        } else if (imc >= 25 && imc <= 29.9) {
            resultText += "Sobrepeso.";
        } else {
            resultText += "Obesidade.";
        }

        document.getElementById('result').innerText = resultText;
    } else {
        document.getElementById('result').innerText = "Por favor, insira valores válidos para peso e altura.";
    }
}
