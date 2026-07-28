const display = document.getElementById("display");
const botoes = document.querySelectorAll(".botoes button");


const operadores = ["+", "−", "×", "÷"];

display.value = "";

botoes.forEach(botao => {

    botao.addEventListener("click", () => {


        const valor = botao.innerText;

        if(valor === "C"){


            display.value = "";


        }

        else if(valor === "☠️"){


            display.value = display.value.slice(0,-1);


        }

        else if(valor === "±"){


            if(display.value !== ""){



                if(display.value.startsWith("-")){


                    display.value = display.value.substring(1);


                }


            
                else{


                    display.value = "-" + display.value;


                }


            }


        }


        else if(valor === "="){


            calcular();


        }

        else if(operadores.includes(valor)){



            if(display.value === "") return;



            const ultimo = display.value.slice(-1);



            if(operadores.includes(ultimo)) return;



            display.value += valor;



        }

        else if(valor === "."){



            const partes = display.value.split(/[+−×÷]/);

            const ultimoNumero = partes[partes.length - 1];



            if(!ultimoNumero.includes(".")){


                display.value += ".";


            }


        }

        else{


            display.value += valor;


        }



    });



});

function calcular(){


    try{


        let conta = display.value;

        conta = conta.replace(/×/g, "*");

        conta = conta.replace(/÷/g, "/");

        conta = conta.replace(/−/g, "-");



        let resultado = eval(conta);



        if(!isFinite(resultado)){


            display.value = "Erro";


            return;


        }



        display.value = resultado;



    }


    catch{


        display.value = "Erro";


    }



}