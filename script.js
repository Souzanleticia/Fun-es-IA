const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Os recursos naturais do seu planeta estão sob pressão. A extração e o consumo desenfreados estão esgotando minerais, florestas e a capacidade de renovação da natureza.",
        alternativas: [
            {
                texto: "Intensificar a mineração e o desmatamento, buscando novas reservas em regiões remotas e menos exploradas, para manter o ritmo de crescimento econômico atual.",
                afirmacao: "Você decidiu que a energia de fusão nuclear é o futuro. "
            },
            {
                texto: "Implementar um programa rigoroso de reciclagem e reuso, transformando resíduos em novos produtos e reduzindo a necessidade de extração de matéria-prima virgem.",
                afirmacao: "Você apostou na energia solar e eólica. "
            }
        ]
    },
    {
        enunciado: "Seu planeta está crescendo rapidamente, e a demanda por energia dispara. Cientistas descobriram novas fontes de energia, mas cada uma tem seus prós e contras.",
        alternativas: [
            {
                texto: " Investir massivamente em usinas de fusão nuclear, que oferecem energia limpa e abundante, mas com um alto custo inicial e risco de acidentes em caso de falha de segurança.",
                afirmacao: "Você decidiu intensificar a mineração e o desmatamento."
            },
            {
                texto: "Desenvolver uma rede global de painéis solares e turbinas eólicas, aproveitando a energia renovável do sol e do vento, mas que exige grandes áreas de terra e é intermitente.",
                afirmacao: "Você implementou um programa rigoroso de reciclagem e reuso."
            }
        ]
    },
    {
        enunciado: "A água potável está se tornando um luxo em muitas regiões do seu planeta. Poluição, desperdício e secas prolongadas ameaçam a vida e a agricultura.",
        alternativas: [
            {
                texto: "Construir grandes usinas de dessalinização em massa, transformando água do mar em potável, mas que demandam muita energia e podem gerar resíduos salinos.",
                afirmacao: "Você construiu grandes usinas de dessalinização."
            },
            {
                texto: "Investir em tecnologias de tratamento de efluentes e reuso da água em larga escala, transformando esgoto em água limpa para diversas finalidades.",
                afirmacao: "Você investiu em tratamento de efluentes e reuso da água."
            }
        ]
    },
    {
        enunciado: "A biodiversidade do seu planeta está em declínio. Espécies estão desaparecendo devido à perda de habitat, poluição e caça ilegal.",
        alternativas: [
            {
                texto: "Criar grandes parques e reservas isoladas onde a vida selvagem possa prosperar sem interferência humana, mas que podem fragmentar ainda mais os ecossistemas.",
                afirmacao: "Você criou grandes parques e reservas isoladas."
            },
            {
                texto: "Desenvolver programas de reprodução em cativeiro e reintrodução de espécies ameaçadas, utilizando tecnologia genética para aumentar suas chances de sobrevivência.",
                afirmacao: "Você investiu em programas de reprodução em cativeiro e reintrodução."
            }
        ]
    },
    {
        enunciado: "Seu planeta atingiu um ponto de inflexão. O consumo desenfreado e a busca por lucro estão gerando desigualdade e esgotando os recursos.",
        alternativas: [
            {
                texto: "Uma sociedade que prioriza o crescimento econômico a todo custo, acreditando que a riqueza gerada resolverá os problemas ambientais no futuro.",
                afirmacao: "Você priorizou o crescimento econômico a todo custo."
            },
            {
                texto: "Uma sociedade que adota o conceito de economia circular, onde produtos são projetados para serem reutilizados, reparados e reciclados, minimizando o desperdício.",
                afirmacao: "Você adotou a economia circular. A mentalidade de 'lixo zero' se tornou a norma."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "ESTADO DO PLANETA...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
