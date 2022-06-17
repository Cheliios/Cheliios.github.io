let figuras  = prompt("Escribe correctamente la figura que deseas ejecutar: ")

let base;
let altura;
let radio;
let lado;
let D;
let d;
let Bma;
let bme;
let perimetro;
let apotema;

switch(figuras){
    case "RECTANGULO":
    case "rectangulo":
    case "rectángulo":
    case "Rectangulo":
        base = prompt("Ingrese la base")
        altura = prompt("Ingrese la altura")
        console.log(`El area del rectangulo es ${base*altura}`)
        document.write(`El area del rectangulo es ${base*altura}`)
        break

    case "TRIANGULO":
    case "triangulo":
    case "Triangulo":
        base = prompt("Ingrese la base")
        altura = prompt("Ingrese la altura")
        console.log(`El area del triangulo es ${base*altura/2}`)
        document.write(`El area del triangulo es ${base*altura/2}`)
        break

    case "CIRCULO":
    case "circulo":
        radio= prompt("Ingrese el radio")
        console.log(`El area del circulo es ${Math.PI* Math.pow(radio,2)}`)
        document.write(`El area del circulo es ${Math.PI* Math.pow(radio,2)}`)
        break

    case "CUADRADO":
    case "cuadrado":
    case "Cuadrado":
        lado= prompt("Ingrese el lado")
        console.log(`El area del cuadrado es ${lado*lado}`)
        document.write(`El area del cuadrado es ${lado*lado}`)
        break
    
    case "ROMBO":
    case "Rombo":
    case "rombo":
        D= prompt("Ingrese la diagonal mayor")
        d= prompt("Ingrese la diagonal menor")
        console.log(`El area del rombo es ${D*d/2}`)
        document.write(`El area del rombo es ${D*d/2}`)
        break

    case "ROMBOIDE":
    case "romboide":
    case "Romboide":
        base = prompt("Ingrese la base")
        altura = prompt("Ingrese la altura")
        console.log(`El area del romboide es ${base*altura}`)
        document.write(`El area del romboide es ${base*altura}`)
        break
        
    case "TRAPECIO":
    case "trapecio":
    case "Trapecio":
        Bma= prompt("Ingrese la base mayor")
        bme= prompt("Ingrese la base menor")
        altura= prompt("Ingrese la altura")
        console.log(`El area del trapecio es ${altura*bme+Bma/2}`)
        document.write(`El area del trapecio es ${altura*bme+Bma/2}`)
        break
    case "Poligono":
    case "POLIGONO":
    case "poligono":
        perimetro=prompt("Ingrese el perimetro")
        apotema=prompt("Ingrese el apotema")
        console.log(`El area del poligono de 5 lados es ${perimetro*apotema/2}`)
        document.write(`El area del poligono de 5 lados es ${perimetro*apotema/2}`)
        break

    default: console.log("Esta figura no existe, escriba bien");
        document.write("Esta figura no existe, escriba bien")
}