function calcularVolume(r: number, h: number): number {
    return 3.14 * (r ** 2) * h;
  }
  
  let volume = calcularVolume(8, 25);
  
  console.log(`O volume do cilindro é: ${volume.toFixed(2)} cm³`);