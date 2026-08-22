import { useState } from "react";
import { Volume2, ArrowRight, Sparkles } from "lucide-react";

const GREEN = "#3BA55C", GREEN_DARK = "#2E7D46", GREEN_SOFT = "#EAF7EE";
const BLUE = "#2F80ED", BLUE_SOFT = "#EAF2FE";
const PINK = "#FF6B8A", PINK_SOFT = "#FFE9EE";
const YELLOW = "#FFC531", YELLOW_SOFT = "#FFF6DF";
const INK = "#1F2A24", INK_SOFT = "#6B776E", BORDER = "#E4EAE2", CREAM = "#FBFAF6";

const CONTENT_BY_DIRECTION = {
  "ht-to-pt": {
    flag: "🇭🇹",
    label: "Mwen pale Kreyòl",
    sub: "Quero aprender Português",
    speakCode: "pt-BR",
    animals: [
      { emoji: "🐶", principal: "Cachorro", fon: "Cachórru", secondary: "Chen" },
      { emoji: "🐱", principal: "Gato", fon: "Gátu", secondary: "Chat" },
      { emoji: "🐘", principal: "Elefante", fon: "Elefánchi", secondary: "Elefan" },
    ],
    verbs: [
      { context: "Amanhã eu ____ trabalhar.", correct: "vou", options: ["vou", "viu", "vai"], explanation: '"Vou" é do verbo IR (eu vou). "Viu" é do verbo VER, no passado.' },
      { context: "Ontem ele ____ um filme muito bom.", correct: "viu", options: ["viu", "vou", "vai"], explanation: '"Viu" é do verbo VER, no passado (ele viu).' },
      { context: "Eu ____ médico, trabalho num hospital.", correct: "sou", options: ["sou", "ser", "estou"], explanation: '"Sou" é a forma certa (eu sou). "Ser" é o infinitivo, sem conjugar.' },
      { context: "Ele ____ dinheiro guardado.", correct: "tem", options: ["tem", "têm", "vem"], explanation: '"Tem" (sem acento) é pra uma pessoa. "Têm" (com acento) é pra várias.' },
      { context: "Eu ____ isso ontem à noite.", correct: "fiz", options: ["fiz", "fez", "faço"], explanation: '"Fiz" é do verbo FAZER na 1ª pessoa do passado.' },
    ],
    nominal: [
      { context: "A casa é muito ____.", correct: "bonita", options: ["bonita", "bonito", "bonitos"], explanation: '"Casa" é feminina, então o adjetivo também: bonitA.' },
      { context: "O carro é muito ____.", correct: "bonito", options: ["bonito", "bonita", "bonitas"], explanation: '"Carro" é masculino: bonitO.' },
      { context: "____ mulher chegou agora.", correct: "A", options: ["A", "O", "Os"], explanation: '"Mulher" é feminina, então usa o artigo A.' },
      { context: "Ele tem três ____.", correct: "animais", options: ["animais", "animals", "animales"], explanation: "Palavras em -AL formam plural em -AIS: animal → animais." },
      { context: "Lave as ____ antes de comer.", correct: "mãos", options: ["mãos", "mão", "mãoes"], explanation: '"Mão" no plural é MÃOS.' },
    ],
  },
  "pt-to-ht": {
    flag: "🇧🇷",
    label: "Eu falo Português",
    sub: "Mwen vle aprann Kreyòl Ayisyen",
    speakCode: "ht",
    animals: [
      { emoji: "🐶", principal: "Chen", fon: "Chén", secondary: "Cachorro" },
      { emoji: "🐱", principal: "Chat", fon: "Tchá", secondary: "Gato" },
      { emoji: "🐘", principal: "Elefan", fon: "Elefã", secondary: "Elefante" },
    ],
    verbs: [
      { context: "Demen mwen ____ travay.", correct: "pral", options: ["pral", "te", "ap"], explanation: '"Pral" endike yon bagay ki pral rive nan avni (fiti). "Te" endike tan pase a.' },
      { context: "Yè mwen ____ travay anpil.", correct: "te", options: ["te", "pral", "ap"], explanation: '"Te" endike tan pase a (yon bagay ki deja rive).' },
      { context: "Kounye a mwen ____ travay.", correct: "ap", options: ["ap", "te", "pral"], explanation: '"Ap" endike yon bagay k ap fèt kounye a.' },
      { context: "Mwen ____ wè li yè swa.", correct: "te", options: ["te", "ap", "pral"], explanation:
