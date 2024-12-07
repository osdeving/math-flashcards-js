const DESVIRAR_APOS = 2000;

// Dados das propriedades
const properties = [
  {
    id: "P1",
    rule: "a^m \\cdot a^n = a^{m+n}",
    description: "Mesma base, soma os expoentes.",
  },
  {
    id: "P2",
    rule: "\\frac{a^m}{a^n} = a^{m-n}, \\; a \\neq 0",
    description: "Mesma base, subtração dos expoentes.",
  },
  {
    id: "P3",
    rule: "\\left(a^m\\right)^n = a^{m \\cdot n}",
    description: "Potência de uma potência.",
  },
  {
    id: "P4",
    rule: "\\left(a \\cdot b\\right)^m = a^m \\cdot b^m",
    description: "Potência do produto é o produto das potências.",
  },
  {
    id: "P5",
    rule: "\\left(\\frac{a}{b}\\right)^m = \\frac{a^m}{b^m}, \\; b \\neq 0",
    description: "Potência do quociente.",
  },
  {
    id: "P6",
    rule: "a^0 = 1, \\; a \\neq 0",
    description: "Qualquer número elevado a zero é 1.",
  },
  {
    id: "P7",
    rule: "a^1 = a",
    description: "Qualquer número elevado a 1 é ele mesmo.",
  },
  {
    id: "P8",
    rule: "1^m = 1",
    description: "A base 1 elevada a qualquer expoente é 1.",
  },
  {
    id: "P9",
    rule: "a^{-n} = \\frac{1}{a^n}, \\; a \\neq 0",
    description: "Expoente negativo inverte a base.",
  },
  {
    id: "P10",
    rule: "a^{m+n} = a^m \\cdot a^n",
    description: "Soma dos expoentes gera multiplicação.",
  },
  {
    id: "P11",
    rule: "a^{m-n} = \\frac{a^m}{a^n}",
    description: "Subtração dos expoentes gera divisão.",
  },
  {
    id: "P12",
    rule: "\\sqrt[n]{a} = a^{1/n}, \\; a \\geq 0",
    description: "Raiz como expoente fracionário.",
  },
  {
    id: "P13",
    rule: "a^{m/n} = \\sqrt[n]{a^m}, \\; a \\geq 0",
    description: "Potência com expoente racional.",
  },
  {
    id: "P14",
    rule: "0^m = 0, \\; m > 0",
    description: "Zero elevado a um número positivo é zero.",
  },
  { id: "P15", rule: "0^0", description: "Indeterminação matemática." },
  {
    id: "P16",
    rule: "\\left(-a\\right)^n = \\begin{cases} a^n, & \\text{se } n \\text{ par} \\\\ -a^n, & \\text{se } n \\text{ ímpar} \\end{cases}",
    description: "Base negativa depende da paridade do expoente.",
  },
  {
    id: "P17",
    rule: "a^{n+m} \\neq a^n + a^m",
    description: "Soma dos expoentes não é soma das potências.",
  },
  {
    id: "P18",
    rule: "\\left(a^m\\right)^n \\cdot \\left(a^p\\right)^q = a^{m \\cdot n + p \\cdot q}",
    description: "Combinação de potências compostas.",
  },
  {
    id: "P19",
    rule: "a^{m-n} \\neq a^m - a^n",
    description: "Subtração dos expoentes não é subtração das potências.",
  },
  {
    id: "P20",
    rule: "\\sqrt[n]{a \\cdot b} = \\sqrt[n]{a} \\cdot \\sqrt[n]{b}",
    description: "Raiz de um produto se distribui para os fatores.",
  },
  {
    id: "P21",
    rule: "\\sqrt[n]{\\frac{a}{b}} = \\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}}, \\; b \\neq 0",
    description:
      "Raiz de uma fração se distribui para numerador e denominador.",
  },
  {
    id: "P22",
    rule: "\\left(a^m \\cdot b^m\\right) = \\left(a \\cdot b\\right)^m",
    description: "Produto de bases diferentes com expoentes iguais.",
  },
  {
    id: "P23",
    rule: "\\frac{a^m}{b^m} = \\left(\\frac{a}{b}\\right)^m, \\; b \\neq 0",
    description: "Divisão de bases diferentes com expoentes iguais.",
  },
  {
    id: "P24",
    rule: "\\left(a^m \\cdot a^n\\right) \\neq a^{m+n}, \\text{ se bases diferentes}",
    description: "Bases diferentes não combinam expoentes.",
  },
  {
    id: "P25",
    rule: "\\left(a^{1/n}\\right)^m = a^{m/n}",
    description: "Raiz seguida de potência.",
  },
  {
    id: "P26",
    rule: "\\left(a^m\\right)^{1/n} = a^{m/n}",
    description: "Potência seguida de raiz.",
  },
  {
    id: "P27",
    rule: "a^{n \\cdot m} = \\left(a^n\\right)^m",
    description: "Multiplicação no expoente pode ser reordenada.",
  },
  {
    id: "P28",
    rule: "a^{-m} \\cdot b^{-n} = \\frac{1}{a^m \\cdot b^n}",
    description: "Combinação de expoentes negativos.",
  },
  {
    id: "P29",
    rule: "a^m \\cdot \\frac{1}{a^n} = a^{m-n}",
    description: "Multiplicação com fração usando potências.",
  },
  {
    id: "P30",
    rule: "\\sqrt[m]{a} \\cdot \\sqrt[m]{b} \\cdot \\sqrt[m]{c} = \\sqrt[m]{abc}",
    description:
      "A raiz de um produto de vários fatores é igual à raiz do produto de todos.",
  },
  {
    id: "P31",
    rule: "\\sqrt[m]{a^n} = \\left(a^n\\right)^{1/m} = a^{n/m}, \\; m > 0",
    description:
      "Raiz de potência é igual a potência com expoente fracionário.",
  },
  {
    id: "P32",
    rule: "\\sqrt[m]{\\sqrt[n]{a}} = \\sqrt[mn]{a}",
    description: "A raiz de uma raiz pode ser simplificada.",
  },
  {
    id: "P33",
    rule: "\\sqrt[m]{a} \\neq \\sqrt[n]{a}, \\; \\text{se } m \\neq n",
    description:
      "Raízes de índices diferentes não são iguais, exceto em casos especiais.",
  },
  {
    id: "P34",
    rule: "(-a)^n = \\begin{cases} a^n, & \\text{se } n \\text{ é par} \\\\ -a^n, & \\text{se } n \\text{ é ímpar} \\end{cases}",
    description:
      "Base negativa elevada a um expoente depende da paridade do expoente.",
  },
  {
    id: "P35",
    rule: "\\sqrt[n]{-a} \\text{ não existe em } \\mathbb{R}, \\; \\text{se } n \\text{ é par}",
    description:
      "Raiz de número negativo com índice par não é definida nos reais.",
  },
  {
    id: "P36",
    rule: "\\sqrt[m]{a+b} \\neq \\sqrt[m]{a} + \\sqrt[m]{b}",
    description: "A soma de raízes não é igual à raiz da soma.",
  },
  {
    id: "P37",
    rule: "\\sqrt[m]{a-b} \\neq \\sqrt[m]{a} - \\sqrt[m]{b}",
    description: "A subtração de raízes não é igual à raiz da diferença.",
  },
  {
    id: "P38",
    rule: "\\sqrt[m]{\\left(a+b\\right)^n} \\neq \\left(\\sqrt[m]{a} + \\sqrt[m]{b}\\right)^n",
    description: "Cuidado ao distribuir raízes e potências.",
  },
  {
    id: "P39",
    rule: "\\left(a+b\\right)^n = \\sum_{k=0}^n \\binom{n}{k} a^k b^{n-k}",
    description: "Expansão do binômio de Newton para potências de somas.",
  },
  {
    id: "P40",
    rule: "\\left(a-b\\right)^n = \\sum_{k=0}^n \\binom{n}{k} a^k (-b)^{n-k}",
    description: "Expansão do binômio de Newton para potências de diferenças.",
  },
];

properties.push({
  id: "P41",
  rule: "(a^n \\cdot b^n) = (a \\cdot b)^n",
  description: "Distribuição de potências para bases diferentes.",
});


// Dados das questões do quiz
const questions = [
  {
    question: "Quanto é \\((2^3) \\cdot (2^4)\\)?",
    options: ["\\(2^{12}\\)", "\\(2^7\\)", "16", "8"],
    answer: "\\(2^7\\)",
  },
  {
    question: "Qual é o valor de \\(10^0\\)?",
    options: ["10", "1", "0", "Infinito"],
    answer: "1",
  },
  {
    question: "Qual é o resultado de \\(3^{-2}\\)?",
    options: ["9", "\\(\\frac{1}{9}\\)", "3", "-9"],
    answer: "\\(\\frac{1}{9}\\)",
  },
  {
    question: "Quanto é \\((2 \\cdot 5)^2\\)?",
    options: ["\\(10^2\\)", "\\(2^2 \\cdot 5^2\\)", "50", "\\(20^2\\)"],
    answer: "\\(2^2 \\cdot 5^2\\)",
  },
  {
    question: "Quanto é \\(1^{10}\\)?",
    options: ["1", "10", "0", "\\(10^1\\)"],
    answer: "1",
  },
  {
    question: "Quanto é \\(0^3\\)?",
    options: ["0", "1", "Infinito", "Erro"],
    answer: "0",
  },
  {
    question: "Quanto é \\(2 + 2\\)?",
    options: ["0", "1", "Infinito", "4", "Pergunta pro Gepeto"],
    answer: "4",
  },
  {
    question: "Qual é o valor de \\( (-3)^4 \\)?",
    options: ["81", "-81", "12", "16"],
    answer: "81",
  },
  {
    question: "Simplifique a expressão \\( \\sqrt{49} \\).",
    options: ["6", "7", "8", "9"],
    answer: "7",
  },
  {
    question: "Calcule o valor de \\( 2^3 \\times 2^4 \\).",
    options: ["\\(2^7\\)", "\\(2^{12}\\)", "14", "16"],
    answer: "\\(2^7\\)",
  },
  {
    question: "Qual é o resultado de \\( \\frac{3^5}{3^2} \\)?",
    options: ["\\(3^3\\)", "\\(3^2\\)", "9", "27"],
    answer: "\\(3^3\\)",
  },
  {
    question: "Simplifique a expressão \\( \\sqrt[3]{8} \\).",
    options: ["1", "2", "3", "4"],
    answer: "2",
  },
  {
    question: "Calcule o valor de \\( (5^2)^3 \\).",
    options: ["\\(5^5\\)", "\\(5^6\\)", "\\(5^8\\)", "\\(5^9\\)"],
    answer: "\\(5^6\\)",
  },
  {
    question: "Qual é o valor de \\( 10^0 \\)?",
    options: ["0", "1", "10", "100"],
    answer: "1",
  },
  {
    question: "Simplifique a expressão \\( \\sqrt{16} \\times \\sqrt{25} \\).",
    options: ["20", "30", "40", "50"],
    answer: "20",
  },
  {
    question: "Calcule o valor de \\( 4^{-2} \\).",
    options: ["\\(\\frac{1}{16}\\)", "\\(\\frac{1}{8}\\)", "16", "8"],
    answer: "\\(\\frac{1}{16}\\)",
  },
  {
    question: "Qual é o resultado de \\( \\sqrt[4]{81} \\)?",
    options: ["2", "3", "4", "5"],
    answer: "3",
  },
  {
    question: "Calcule o valor de \\( (-2)^3 \\).",
    options: ["-8", "8", "-6", "6"],
    answer: "-8",
  },
  {
    question: "Simplifique a expressão \\( \\sqrt{64} \\).",
    options: ["6", "7", "8", "9"],
    answer: "8",
  },
  {
    question: "Qual é o resultado de \\( 5^3 \\times 5^2 \\)?",
    options: ["\\(5^5\\)", "\\(5^6\\)", "25", "125"],
    answer: "\\(5^5\\)",
  },
  {
    question: "Calcule \\( \\frac{2^6}{2^3} \\).",
    options: ["\\(2^3\\)", "\\(2^2\\)", "4", "8"],
    answer: "\\(2^3\\)",
  },
  {
    question: "Simplifique \\( \\sqrt[3]{27} \\).",
    options: ["2", "3", "4", "5"],
    answer: "3",
  },
  {
    question: "Calcule \\( (3^2)^2 \\).",
    options: ["\\(3^4\\)", "\\(3^6\\)", "81", "27"],
    answer: "\\(3^4\\)",
  },
  {
    question: "Qual é o valor de \\( 7^0 \\)?",
    options: ["0", "1", "7", "10"],
    answer: "1",
  },
  {
    question: "Simplifique \\( \\sqrt{36} \\times \\sqrt{49} \\).",
    options: ["42", "36", "49", "30"],
    answer: "42",
  },
  {
    question: "Calcule \\( 3^{-2} \\).",
    options: ["\\(\\frac{1}{9}\\)", "\\(\\frac{1}{3}\\)", "9", "3"],
    answer: "\\(\\frac{1}{9}\\)",
  },
  {
    question: "Qual é o resultado de \\( \\sqrt[4]{16} \\)?",
    options: ["2", "3", "4", "5"],
    answer: "2",
  },
  {
    question: "Calcule \\( (-5)^2 \\).",
    options: ["25", "-25", "10", "-10"],
    answer: "25",
  },
  {
    question: "Simplifique \\( \\sqrt{81} \\).",
    options: ["7", "8", "9", "10"],
    answer: "9",
  },
  {
    question: "Qual é o resultado de \\( 4^3 \\times 4 \\)?",
    options: ["\\(4^4\\)", "\\(4^3\\)", "16", "64"],
    answer: "\\(4^4\\)",
  },
  {
    question: "Calcule \\( \\frac{6^5}{6^2} \\).",
    options: ["\\(6^3\\)", "\\(6^2\\)", "36", "216"],
    answer: "\\(6^3\\)",
  },
  {
    question: "Simplifique \\( \\sqrt[3]{125} \\).",
    options: ["4", "5", "6", "7"],
    answer: "5",
  },
  {
    question: "Calcule \\( (2^4)^2 \\).",
    options: ["\\(2^6\\)", "\\(2^8\\)", "16", "64"],
    answer: "\\(2^8\\)",
  },
  {
    question: "Qual é o valor de \\( 9^0 \\)?",
    options: ["0", "1", "9", "81"],
    answer: "1",
  },
  {
    question: "Simplifique \\( \\sqrt{25} \\times \\sqrt{16} \\).",
    options: ["20", "25", "30", "35"],
    answer: "20",
  },
  {
    question: "Calcule \\( 4^{-1} \\).",
    options: ["\\(\\frac{1}{4}\\)", "\\(\\frac{1}{2}\\)", "4", "2"],
    answer: "\\(\\frac{1}{4}\\)",
  },
  {
    question: "Qual é o resultado de \\( \\sqrt[5]{32} \\)?",
    options: ["2", "3", "4", "5"],
    answer: "2",
  },
  {
    question: "Calcule \\( (-3)^4 \\).",
    options: ["81", "-81", "27", "-27"],
    answer: "81",
  },
  {
    question: "Simplifique \\( \\sqrt{100} \\).",
    options: ["8", "9", "10", "11"],
    answer: "10",
  },
  {
    question: "Qual é o resultado de \\( 7^2 \\times 7^3 \\)?",
    options: ["\\(7^5\\)", "\\(7^6\\)", "49", "343"],
    answer: "\\(7^5\\)",
  },
  {
    question: "Calcule \\( \\frac{5^4}{5^2} \\).",
    options: ["\\(5^2\\)", "\\(5^3\\)", "25", "125"],
    answer: "\\(5^2\\)",
  },
  {
    question: "Simplifique \\( \\sqrt[3]{64} \\).",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    question: "Calcule \\( (4^3)^2 \\).",
    options: ["\\(4^5\\)", "\\(4^6\\)", "64", "128"],
    answer: "\\(4^6\\)",
  },
  {
    question: "Qual é o valor de \\( 8^0 \\)?",
    options: ["0", "1", "8", "64"],
    answer: "1",
  },
  {
    question: "Simplifique \\( \\sqrt{49} \\times \\sqrt{9} \\).",
    options: ["54", "63", "42", "36"],
    answer: "63",
  },
  {
    question: "Calcule \\( 5^{-2} \\).",
    options: ["\\(\\frac{1}{25}\\)", "\\(\\frac{1}{5}\\)", "25", "5"],
    answer: "\\(\\frac{1}{25}\\)",
  },
  {
    question: "Simplifique a expressão \\( (x^2)^3 \\).",
    options: ["\\(x^5\\)", "\\(x^6\\)", "\\(x^8\\)", "\\(x^9\\)"],
    answer: "\\(x^6\\)",
  },
  {
    question: "Calcule o valor de \\( 2^{3/2} \\).",
    options: ["2", "2√2", "4", "4√2"],
    answer: "2√2",
  },
  {
    question: "Simplifique \\( \\sqrt[3]{8x^6} \\).",
    options: ["\\(2x^2\\)", "\\(2x^3\\)", "\\(2x^4\\)", "\\(2x^6\\)"],
    answer: "\\(2x^2\\)",
  },
  {
    question: "Expresse \\( 27^{1/3} \\) como uma potência de base 3.",
    options: ["\\(3^{1/3}\\)", "\\(3\\)", "\\(3^2\\)", "\\(3^3\\)"],
    answer: "\\(3\\)",
  },
  {
    question: "Simplifique a expressão \\( \\frac{a^{3/2}}{a^{1/2}} \\).",
    options: ["\\(a\\)", "\\(a^{1/2}\\)", "\\(a^2\\)", "\\(a^{3/2}\\)"],
    answer: "\\(a\\)",
  },
  {
    question: "Calcule o valor de \\( 16^{3/4} \\).",
    options: ["4", "8", "16", "32"],
    answer: "8",
  },
  {
    question: "Simplifique \\( (x^{1/2} y^{1/3})^6 \\).",
    options: [
      "\\(x^3 y^2\\)",
      "\\(x^6 y^3\\)",
      "\\(x^3 y^3\\)",
      "\\(x^6 y^2\\)",
    ],
    answer: "\\(x^3 y^2\\)",
  },
  {
    question: "Expresse \\( \\sqrt[4]{81} \\) como uma potência de base 3.",
    options: ["\\(3^{1/2}\\)", "\\(3\\)", "\\(3^2\\)", "\\(3^4\\)"],
    answer: "\\(3^{3/2}\\)",
  },
  {
    question: "Simplifique a expressão \\( (2x)^{-3} \\).",
    options: [
      "\\(\\frac{1}{8x^3}\\)",
      "\\(\\frac{1}{2x^3}\\)",
      "\\(\\frac{1}{8x}\\)",
      "\\(\\frac{1}{2x}\\)",
    ],
    answer: "\\(\\frac{1}{8x^3}\\)",
  },
  {
    question: "Calcule o valor de \\( 9^{-1/2} \\).",
    options: ["\\(\\frac{1}{3}\\)", "\\(\\frac{1}{9}\\)", "3", "9"],
    answer: "\\(\\frac{1}{3}\\)",
  },
];

questions.push({
  question: "Quanto é \\((3^2) \\cdot (3^3)\\)?",
  options: ["\\(3^6\\)", "\\(3^5\\)", "\\(9^3\\)", "243"],
  answer: "\\(3^5\\)",
});

questions.push({
  question: "Quanto é \\(\\sqrt[3]{8} \\cdot \\sqrt[3]{27}\\)?",
  options: ["15", "45", "\\(\\sqrt[3]{216}\\)", "36"],
  answer: "\\(\\sqrt[3]{216}\\)",
});

function loadFlashcards() {
  const container = document.getElementById("flashcards-container");
  properties.forEach(({ id, rule, description }) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4", "flashcard");
    card.innerHTML = `
      <div class="flashcard-inner">
        <div class="flashcard-front">
          <h5>${id}</h5>
          <p><strong>\\(${rule}\\)</strong></p>
        </div>
        <div class="flashcard-back">
          <p>${description}</p>
          <button class="btn btn-info proof-btn">Proof</button>
        </div>
      </div>
    `;

    card.style.display = "none";
    container.appendChild(card);

    // Adiciona funcionalidade de flip
    const innerCard = card.querySelector(".flashcard-inner");
    card.addEventListener("click", () => {
      innerCard.classList.add("flipped");
      setTimeout(() => innerCard.classList.remove("flipped"), DESVIRAR_APOS);
    });

    // Adiciona evento ao botão "Proof"
    const proofBtn = card.querySelector(".proof-btn");
      proofBtn.addEventListener("click", (e) => {
          e.stopPropagation();
      showProof(rule, description);
    });
  });

  // Renderiza MathJax
  MathJax.typesetPromise();
}

// Função para exibir a prova de uma propriedade
function showProof(rule, description) {
  if (document.querySelector(".proof-modal")) return; // Evita duplicação de modal
  const proofModal = document.createElement("div");
  proofModal.classList.add("proof-modal");
  proofModal.innerHTML = `
    <div class="proof-content">
      <h4>Prova da Propriedade</h4>
      <p><strong>${description}</strong></p>
      <p>Desenvolvimento:</p>
      <p class="animated-proof">\\(${rule}\\)</p>
      <button class="btn btn-secondary close-proof">Fechar</button>
    </div>
  `;
  document.body.appendChild(proofModal);

  // Adiciona animação ao desenvolvimento
  const animatedProof = proofModal.querySelector(".animated-proof");
  animatedProof.classList.add("animation-class"); // Use uma classe CSS para a animação

  // Fecha o modal
  proofModal.querySelector(".close-proof").addEventListener("click", () => {
    proofModal.remove();
  });

  // Renderiza MathJax novamente para o modal
  MathJax.typesetPromise();
}


function loadQuiz() {
  const container = document.getElementById("quiz-container");
  questions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("mb-4");
    questionDiv.innerHTML = `
      <p class="quiz-question">${index + 1}. ${q.question}</p>
      ${q.options
        .map(
          (option, i) =>
            `<div class="form-check">
              <input class="form-check-input" type="radio" name="q${index}" id="q${index}_${i}" value="${option}">
              <label class="form-check-label" for="q${index}_${i}">
                ${option}
              </label>
            </div>`
        )
        .join("")}
      <div id="feedback${index}" class="feedback"></div>
      <button class="btn btn-info explain-btn">Explain</button>
    `;
    container.appendChild(questionDiv);

    // Adiciona evento ao botão "Explain"
    const explainBtn = questionDiv.querySelector(".explain-btn");
    explainBtn.addEventListener("click", () => {
      showExplanation(q.question, q.answer);
    });
  });

  // Renderiza MathJax
  MathJax.typesetPromise();
}

// Função para exibir a explicação com animação
function showExplanation(question, answer) {
  const explanationModal = document.createElement("div");
  explanationModal.classList.add("explanation-modal");
  explanationModal.innerHTML = `
    <div class="explanation-content">
      <h4>Explicação</h4>
      <p>${question}</p>
      <p>Desenvolvimento:</p>
      <div class="animated-explanation">
        <p>Devido à propriedade \\(a^m \\cdot a^n = a^{m+n}\\)...</p>
        <p>Aplicamos a operação...</p>
        <p>O resultado final é: <strong>${answer}</strong></p>
      </div>
      <button class="btn btn-secondary close-explanation">Fechar</button>
    </div>
  `;
  document.body.appendChild(explanationModal);

  // Animação no desenvolvimento
  const explanationSteps = explanationModal.querySelectorAll(
    ".animated-explanation p"
  );
  explanationSteps.forEach((step, i) => {
    setTimeout(() => {
      step.style.opacity = "1";
    }, i * 1000);
  });

  // Fecha o modal
  explanationModal
    .querySelector(".close-explanation")
    .addEventListener("click", () => {
      explanationModal.remove();
    });

  // Renderiza MathJax novamente
  MathJax.typesetPromise();
}


let currentIndex = -1; // Índice do flashcard atual (inicializado como -1)

// Função para exibir um flashcard aleatório
let shownIndices = [];

function showRandomFlashcard() {
  const cards = document.querySelectorAll(".flashcard");

  // Cria um conjunto de índices aleatórios
  if (shownIndices.length === 0) {
    shownIndices = Array.from({ length: cards.length }, (_, i) => i);
    shownIndices = shownIndices.sort(() => Math.random() - 0.5); // Embaralha
  }

  const randomIndex = shownIndices.pop(); // Remove o próximo índice do conjunto

  // Atualiza a exibição dos flashcards
  cards.forEach((card, i) => {
    card.style.display = i === randomIndex ? "block" : "none";
  });
}



document.getElementById("next-btn").addEventListener("click", () => {
  showRandomFlashcard();
});




// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  loadFlashcards();
    showRandomFlashcard();
  loadQuiz();
});
