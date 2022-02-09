const abaixoPeso = document.getElementById("abaixoPeso");
const pesoNormal = document.getElementById("pesoNormal");
const sobrePeso = document.getElementById("sobrePeso");
const obesidadeI = document.getElementById("obesidadeI");
const obesidadeII = document.getElementById("obesidadeII");
const obesidadeIII = document.getElementById("obesidadeIII");
const altura = document.getElementById("altura");
const peso = document.getElementById("peso");
let resultado = document.getElementById("resultado");
const calcular = document.getElementById("calcular");

calcular.addEventListener("click", (e)=>{
    e.preventDefault();
    if(altura.value !== "" && peso.value !== ""){
        const imc = peso.value / (altura.value * altura.value).toFixed(1);
        
        if(imc < 18.5){
            resultado.innerHTML = `O seu IMC é <span>${imc.toFixed(1)}</span>`;
            abaixoPeso.classList.add("active");
            pesoNormal.classList.remove("active");
            sobrePeso.classList.remove("active");
            obesidadeI.classList.remove("active");
            obesidadeII.classList.remove("active");
            obesidadeIII.classList.remove("active");
            return
        }
        if(imc < 24.9){
            resultado.innerHTML = `O seu IMC é <span>${imc.toFixed(1)}</span>`;
            abaixoPeso.classList.remove("active");
            pesoNormal.classList.add("active");
            sobrePeso.classList.remove("active");
            obesidadeI.classList.remove("active");
            obesidadeII.classList.remove("active");
            obesidadeIII.classList.remove("active");
            return
        }
        
        if(imc < 29.9){
            resultado.innerHTML = `O seu IMC é <span>${imc.toFixed(1)}</span>`;
            abaixoPeso.classList.remove("active");
            pesoNormal.classList.remove("active");
            sobrePeso.classList.add("active");
            obesidadeI.classList.remove("active");
            obesidadeII.classList.remove("active");
            obesidadeIII.classList.remove("active");
            return
        }
        if(imc < 34.9){
            resultado.innerHTML = `O seu IMC é <span>${imc.toFixed(1)}</span>`;
            abaixoPeso.classList.remove("active");
            pesoNormal.classList.remove("active");
            sobrePeso.classList.remove("active");
            obesidadeI.classList.add("active");
            obesidadeII.classList.remove("active");
            obesidadeIII.classList.remove("active");
            return

        }
        if(imc < 39.9){
            resultado.innerHTML = `O seu IMC é <span>${imc.toFixed(1)}</span>`;
            abaixoPeso.classList.remove("active");
            pesoNormal.classList.remove("active");
            sobrePeso.classList.remove("active");
            obesidadeI.classList.remove("active");
            obesidadeII.classList.add("active");
            obesidadeIII.classList.remove("active");
            return
        }
        if(imc > 40){
            resultado.innerHTML = `O seu IMC é <span>${imc.toFixed(1)}</span>`;
            abaixoPeso.classList.remove("active");
            pesoNormal.classList.remove("active");
            sobrePeso.classList.remove("active");
            obesidadeI.classList.remove("active");
            obesidadeII.classList.remove("active");
            obesidadeIII.classList.add("active");
            return
        }
    }
    
});