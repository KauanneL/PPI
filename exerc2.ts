function calcularNotaFinal(mediaParcial: number): number {
    return (60*2) - mediaParcial;
  }
  
  let mediaParcial: number = 40;
  let notaqPrecisa: number = calcularNotaFinal(mediaParcial);
  
  console.log(`A nota que precisa tirar é: ${notaqPrecisa}`);