
function resetForm()
{ document.getElementById("form1").reset()}


function calcular() {

        const precioTotal = 200;
        const numero1 = document.getElementById("cantidad").value;
        let descuento = 0


        const categoria = document.getElementById("categoria").value;
    if (categoria === "Estudiante" ) 
    {descuento = 0.80;}
else if (categoria === "Trainee") {
    descuento = 0.50;
}
else if (categoria=== "Junior") {
    descuento = 0.15
}

    
     const multiplicacion = Math.ceil ( numero1 * precioTotal * (1 - descuento));
     
     const elementoHTML = document.getElementById("resultado");
     elementoHTML.innerHTML = " El precio total es " + multiplicacion;}

    