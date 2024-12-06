const DESVIRAR_APOS = 1000;

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
    description: "Potência do produto.",
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
];


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
    question: "Quanto é \\(a^m \\cdot a^n\\)?",
    options: [
      "\\(a^{m \\cdot n}\\)",
      "\\(a^{m+n}\\)",
      "\\(a^{m-n}\\)",
      "\\(a^{m/n}\\)",
    ],
    answer: "\\(a^{m+n}\\)",
  },
  {
    question: "Quanto é \\(a^0\\) (a ≠ 0)?",
    options: ["1", "0", "Infinito", "\\(a\\)"],
    answer: "1",
  },
  {
    question: "Quanto é \\(a^{-1}\\)?",
    options: ["\\(a\\)", "\\(\\frac{1}{a}\\)", "\\(-a\\)", "\\(a^1\\)"],
    answer: "\\(\\frac{1}{a}\\)",
  },
  {
    question: "Quanto é \\(\\sqrt[3]{27}\\)?",
    options: ["9", "3", "\\(\\frac{1}{9}\\)", "\\(\\frac{1}{3}\\)"],
    answer: "3",
  },
  {
    question: "Quanto é \\((10^2) \\cdot (10^{-3})\\)?",
    options: ["\\(10^{-5}\\)", "\\(10^1\\)", "\\(10^0\\)", "100"],
    answer: "\\(10^{-1}\\)",
  },
  {
    question: "Qual é o valor de \\((4 \\cdot 3)^2\\)?",
    options: ["\\(4^2 \\cdot 3^2\\)", "49", "144", "36"],
    answer: "\\(4^2 \\cdot 3^2\\)",
  },
  {
    question: "Quanto é \\(2^{-2}\\)?",
    options: ["4", "\\(\\frac{1}{4}\\)", "2", "-2"],
    answer: "\\(\\frac{1}{4}\\)",
  },
  {
    question: "Quanto é \\(0^0\\)?",
    options: ["Indeterminado", "0", "1", "Infinito"],
    answer: "Indeterminado",
  },
  {
    question: "Quanto é \\(a^1\\)?",
    options: ["a", "1", "\\(a^0\\)", "\\(\\frac{1}{a}\\)"],
    answer: "a",
  },
  {
    question: "Qual é o valor de \\(2^3 \\cdot 2^{-3}\\)?",
    options: ["\\(2^0\\)", "1", "0", "\\(\\frac{1}{8}\\)"],
    answer: "1",
  },
  {
    question: "Quanto é \\(\\frac{3^2}{3^5}\\)?",
    options: ["\\(3^{-3}\\)", "\\(\\frac{1}{27}\\)", "\\(3^3\\)", "\\(27\\)"],
    answer: "\\(\\frac{1}{27}\\)",
  },
  {
    question: "Quanto é \\((5^2)^3\\)?",
    options: ["\\(5^{5}\\)", "\\(5^6\\)", "\\(5^{15}\\)", "\\(25^3\\)"],
    answer: "\\(5^6\\)",
  },
  {
    question: "Quanto é \\((4 \\cdot 9)^{1/2}\\)?",
    options: ["\\(6\\)", "\\(36\\)", "\\(4 \\cdot 3\\)", "\\(\\sqrt{36}\\)"],
    answer: "6",
  },
  {
    question: "Quanto é \\(a^{-m} \\cdot a^m\\)?",
    options: ["\\(a^{0}\\)", "1", "\\(0\\)", "\\(a^{2m}\\)"],
    answer: "1",
  },
  {
    question: "Qual é o resultado de \\((3^3)^2\\)?",
    options: ["\\(3^{9}\\)", "\\(3^5\\)", "\\(3^{6}\\)", "9"],
    answer: "\\(3^{6}\\)",
  },
  {
    question: "Quanto é \\(\\frac{5^2}{5}\\)?",
    options: ["\\(5\\)", "\\(5^2\\)", "\\(5^{1}\\)", "\\(5^{0}\\)"],
    answer: "\\(5\\)",
  },
  {
    question: "Quanto é \\(\\sqrt[3]{8}\\)?",
    options: ["\\(4\\)", "\\(2\\)", "\\(3\\)", "\\(8^{1/3}\\)"],
    answer: "\\(2\\)",
  },
  {
    question: "Qual é o valor de \\((2 \\cdot 3)^2\\)?",
    options: ["\\(2^2 \\cdot 3^2\\)", "36", "12", "\\(6^2\\)"],
    answer: "\\(2^2 \\cdot 3^2\\)",
  },
  {
    question: "Quanto é \\((10^2) \\cdot (10^{-2})\\)?",
    options: ["\\(10^{4}\\)", "\\(10^0\\)", "1", "\\(10\\)"],
    answer: "\\(10^0\\)",
  },
  {
    question: "Quanto é \\((2^3)^0\\)?",
    options: ["1", "0", "\\(2^3\\)", "8"],
    answer: "1",
  },
  {
    question: "Quanto é \\((2^{-3})\\)?",
    options: ["\\(\\frac{1}{8}\\)", "8", "2", "-2"],
    answer: "\\(\\frac{1}{8}\\)",
  },
  {
    question: "Quanto é \\((2 \\cdot 5)^{0}\\)?",
    options: ["1", "0", "10", "\\(2^0 \\cdot 5^0\\)"],
    answer: "1",
  },
  {
    question: "Quanto é \\(a^0 \\cdot a^n\\)?",
    options: ["\\(a^n\\)", "\\(a\\)", "\\(0\\)", "1"],
    answer: "\\(a^n\\)",
  },
  {
    question: "Quanto é \\(\\frac{2^3}{2^4}\\)?",
    options: ["\\(2^{7}\\)", "\\(\\frac{1}{2}\\)", "\\(2^{-1}\\)", "\\(8\\)"],
    answer: "\\(2^{-1}\\)",
  },
  {
    question: "Quanto é \\(a^m / a^m\\)?",
    options: ["\\(1\\)", "\\(a^0\\)", "\\(a\\)", "\\(a^{-m}\\)"],
    answer: "1",
  },
  {
    question: "Quanto é \\(\\left(\\frac{2}{3}\\right)^2\\)?",
    options: [
      "\\(\\frac{4}{9}\\)",
      "\\(\\frac{2}{3}\\)",
      "\\(\\frac{1}{9}\\)",
      "\\(\\frac{4}{3}\\)",
    ],
    answer: "\\(\\frac{4}{9}\\)",
  },
  {
    question: "Quanto é \\(\\sqrt[2]{16}\\)?",
    options: ["4", "16", "2", "8"],
    answer: "4",
  },
  {
    question: "Quanto é \\((2^3)^{1/2}\\)?",
    options: ["\\(2^{3/2}\\)", "\\(\\sqrt{8}\\)", "\\(\\frac{8}{2}\\)", "8"],
    answer: "\\(2^{3/2}\\)",
  },
  {
    question: "Quanto é \\(0^{5}\\)?",
    options: ["0", "1", "\\(\\infty\\)", "Erro"],
    answer: "0",
  },
  {
    question: "Quanto é \\(1^{0}\\)?",
    options: ["1", "0", "\\(\\infty\\)", "Indeterminado"],
    answer: "1",
  },
  {
    question: "BONUS!!! Quanto é \\(2+2\\)?",
    options: ["1", "0", "\\(\\infty\\)", "Indeterminado", "Pergunta pro gepeto", "2"],
    answer: "Pergunta pro gepeto",
  },
];


// Função para carregar flashcards
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
        </div>
      </div>
    `;
    container.appendChild(card);

    // Adiciona funcionalidade de flip
    const innerCard = card.querySelector(".flashcard-inner");
    card.addEventListener("click", () => {
      innerCard.classList.add("flipped");
      setTimeout(() => innerCard.classList.remove("flipped"), DESVIRAR_APOS);
    });
  });

  // Renderiza MathJax
  MathJax.typeset();
}

// Função para carregar o quiz
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
    `;
    container.appendChild(questionDiv);

    // Adiciona evento para verificar a resposta
    const inputs = questionDiv.querySelectorAll("input");
    inputs.forEach((input) => {
      input.addEventListener("change", () => {
        const feedback = document.getElementById(`feedback${index}`);
        if (input.value === q.answer) {
          feedback.textContent = "✔️ Correto!";
          feedback.classList.add("text-success");
          feedback.classList.remove("text-danger");
        } else {
          feedback.textContent = "❌ Errado! Tente novamente.";
          feedback.classList.add("text-danger");
          feedback.classList.remove("text-success");
        }
      });
    });
  });

  // Renderiza MathJax
  MathJax.typeset();
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  loadFlashcards();
  loadQuiz();
});
