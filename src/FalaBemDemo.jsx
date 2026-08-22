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
      { context: "Mwen ____ wè li yè swa.", correct: "te", options: ["te", "ap", "pral"], explanation: '"Te" mete devan vèb la pou montre bagay la te fèt deja.' },
      { context: "Li ____ vini pita jodi a.", correct: "pral", options: ["pral", "te", "ap"], explanation: '"Pral" montre yon bagay ki poko rive, men ki gen pou rive.' },
    ],
    nominal: [
      { context: "Liv ____ sou tab la.", correct: "yo", options: ["yo", "la", "an"], explanation: '"Yo" mete APRE mo a pou montre pliryèl (plizyè liv).' },
      { context: "Timoun ____ ap jwe deyò.", correct: "yo", options: ["yo", "a", "nan"], explanation: '"Yo" apre "timoun" montre gen plizyè timoun.' },
      { context: "Machin ____ nan lari a.", correct: "yo", options: ["yo", "la", "an"], explanation: '"Yo" montre gen plizyè machin, pa yon sèl.' },
      { context: "Liv ____ sou tab la enterese m anpil.", correct: "la", options: ["la", "yo", "an"], explanation: '"La" mete apre "liv" montre se yon SÈL liv.' },
      { context: "Timoun ____ ap jwe nan lakou a.", correct: "an", options: ["an", "yo", "nan"], explanation: '"An" mete apre "timoun" montre se yon SÈL timoun.' },
    ],
  },
  "pt-to-en": {
    flag: "🇺🇸",
    label: "Eu falo Português",
    sub: "Quero aprender Inglês",
    speakCode: "en-US",
    animals: [
      { emoji: "🐶", principal: "Dog", fon: "Dóg", secondary: "Cachorro" },
      { emoji: "🐱", principal: "Cat", fon: "Quét", secondary: "Gato" },
      { emoji: "🐘", principal: "Elephant", fon: "Élifant", secondary: "Elefante" },
    ],
    verbs: [
      { context: "Yesterday I ____ a great movie.", correct: "saw", options: ["saw", "see", "seen"], explanation: '"Saw" is the simple past of SEE.' },
      { context: "I have already ____ this movie.", correct: "seen", options: ["seen", "saw", "see"], explanation: '"Seen" is used with HAVE/HAS.' },
      { context: "I ____ to the store every day.", correct: "go", options: ["go", "went", "gone"], explanation: '"Go" is the simple present.' },
      { context: "Yesterday I ____ to the store.", correct: "went", options: ["went", "go", "gone"], explanation: '"Went" is the simple past of GO.' },
      { context: "I have already ____ there.", correct: "gone", options: ["gone", "went", "go"], explanation: '"Gone" is used with HAVE/HAS.' },
    ],
    nominal: [
      { context: "I have three ____.", correct: "books", options: ["books", "book", "bookes"], explanation: "Regular plural: just add -S." },
      { context: "She has two ____.", correct: "children", options: ["children", "childs", "childrens"], explanation: 'Irregular plural: children.' },
      { context: "There are five ____ in that field.", correct: "mice", options: ["mice", "mouses", "mices"], explanation: 'Irregular plural: mice.' },
      { context: "I saw three ____ at the meeting.", correct: "men", options: ["men", "mans", "mens"], explanation: 'Irregular plural: men.' },
      { context: "The ____ cars are very expensive.", correct: "red", options: ["red", "reds", "redder"], explanation: "Adjectives never change for plural in English." },
    ],
  },
  "en-to-pt": {
    flag: "🇧🇷",
    label: "I speak English",
    sub: "I want to learn Portuguese",
    speakCode: "pt-BR",
    animals: [
      { emoji: "🐶", principal: "Cachorro", fon: "Cachórru", secondary: "Dog" },
      { emoji: "🐱", principal: "Gato", fon: "Gátu", secondary: "Cat" },
      { emoji: "🐘", principal: "Elefante", fon: "Elefánchi", secondary: "Elephant" },
    ],
    verbs: [
      { context: "Amanhã eu ____ trabalhar.", correct: "vou", options: ["vou", "viu", "vai"], explanation: '"Vou" is from the verb IR. "Viu" is from the verb VER, in the past tense.' },
      { context: "Ontem ele ____ um filme muito bom.", correct: "viu", options: ["viu", "vou", "vai"], explanation: '"Viu" is from VER, past tense (he saw).' },
      { context: "Eu ____ médico, trabalho num hospital.", correct: "sou", options: ["sou", "ser", "estou"], explanation: '"Sou" is the conjugated form. "Ser" is the infinitive, uncongujated.' },
      { context: "Ele ____ dinheiro guardado.", correct: "tem", options: ["tem", "têm", "vem"], explanation: '"Tem" (no accent) is for one person. "Têm" (with accent) is for several.' },
      { context: "Eu ____ isso ontem à noite.", correct: "fiz", options: ["fiz", "fez", "faço"], explanation: '"Fiz" is FAZER in 1st person past tense.' },
    ],
    nominal: [
      { context: "A casa é muito ____.", correct: "bonita", options: ["bonita", "bonito", "bonitos"], explanation: '"Casa" is feminine, so the adjective is too: bonitA.' },
      { context: "O carro é muito ____.", correct: "bonito", options: ["bonito", "bonita", "bonitas"], explanation: '"Carro" is masculine: bonitO.' },
      { context: "____ mulher chegou agora.", correct: "A", options: ["A", "O", "Os"], explanation: '"Mulher" is feminine, so it uses the article A.' },
      { context: "Ele tem três ____.", correct: "animais", options: ["animais", "animals", "animales"], explanation: "Words ending in -AL form the plural in -AIS: animal → animais." },
      { context: "Lave as ____ antes de comer.", correct: "mãos", options: ["mãos", "mão", "mãoes"], explanation: '"Mão" in plural is MÃOS.' },
    ],
  },
};

function speak(text, langCode) {
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = langCode;
    u.rate = 0.9;
    setTimeout(() => window.speechSynthesis.speak(u), 60);
  } catch (e) {}
}

function ProgressDots({ total, current }) {
  return (
    <div className="flex justify-center gap-1.5 mb-4">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} style={{ width: i === current ? 20 : 8, height: 8, borderRadius: 4, background: i <= current ? GREEN : BORDER, transition: "all .2s" }} />
      ))}
    </div>
  );
}

function AnimalCard({ item, speakCode }) {
  const [revealed, setRevealed] = useState(false);
  return (
    <button
      onClick={() => setRevealed(true)}
      className="flex-1 flex flex-col items-center gap-2 p-5 rounded-3xl text-left"
      style={{ background: "#fff", border: `2px solid ${revealed ? GREEN : BORDER}` }}
    >
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: GREEN_SOFT, fontSize: 32 }}>
        {item.emoji}
      </div>
      {!revealed ? (
        <p className="text-xs font-bold text-center" style={{ color: INK_SOFT }}>Toque pra ver</p>
      ) : (
        <>
          <p className="font-extrabold text-base" style={{ color: INK }}>{item.principal}</p>
          <p className="text-xs italic" style={{ color: GREEN_DARK }}>{item.fon}</p>
          <p className="text-sm font-bold" style={{ color: INK_SOFT }}>{item.secondary}</p>
          <span role="button" onClick={(e) => { e.stopPropagation(); speak(item.principal, speakCode); }} className="mt-1">
            <Volume2 size={16} color={GREEN} />
          </span>
        </>
      )}
    </button>
  );
}

function QuizStep({ pool, accent, accentSoft, onAllDone, doneLabel }) {
  const [idx, setIdx] = useState(0);
  const [escolha, setEscolha] = useState(null);
  const [confirmado, setConfirmado] = useState(false);
  const [acertos, setAcertos] = useState(0);
  const round = pool[idx];
  const done = idx >= pool.length;

  function escolher(opt) {
    if (confirmado) return;
    setEscolha(opt);
    setConfirmado(true);
    if (opt === round.correct) setAcertos((a) => a + 1);
  }

  function proximo() {
    setEscolha(null);
    setConfirmado(false);
    setIdx((i) => i + 1);
  }

  if (done) {
    return (
      <div className="flex flex-col items-center gap-3 py-6">
        <span style={{ fontSize: 44 }}>🎉</span>
        <p className="font-extrabold text-lg text-center" style={{ color: INK }}>Você acertou {acertos} de {pool.length}!</p>
        <button onClick={onAllDone} className="mt-2 py-3 px-6 rounded-2xl font-extrabold text-sm text-white flex items-center gap-2" style={{ background: accent }}>
          {doneLabel} <ArrowRight size={16} />
        </button>
      </div>
    );
  }

  return (
    <div>
      <ProgressDots total={pool.length} current={idx} />
      <div className="rounded-3xl border-2 px-5 py-6 flex flex-col gap-3" style={{ borderColor: BORDER }}>
        <p className="text-lg font-bold text-center" style={{ color: INK }}>{round.context}</p>
        <div className="flex flex-col gap-2 mt-1">
          {round.options.map((opt) => {
            const correctShown = confirmado && opt === round.correct;
            const wrongShown = confirmado && escolha === opt && opt !== round.correct;
            const selected = escolha === opt;
            return (
              <button
                key={opt}
                disabled={confirmado}
                onClick={() => escolher(opt)}
                className="py-3 rounded-2xl font-bold text-sm"
                style={{
                  background: correctShown ? GREEN_SOFT : wrongShown ? PINK_SOFT : selected ? accentSoft : "#fff",
                  border: `2px solid ${correctShown ? GREEN : wrongShown ? PINK : selected ? accent : BORDER}`,
                  color: correctShown ? GREEN_DARK : wrongShown ? PINK : INK,
                }}
              >
                {opt}
              </button>
            );
          })}
        </div>
        {confirmado && (
          <p className="text-xs text-center mt-1" style={{ color: escolha === round.correct ? GREEN_DARK : PINK }}>{round.explanation}</p>
        )}
      </div>
      {confirmado && (
        <button onClick={proximo} className="w-full mt-4 py-3 rounded-2xl font-extrabold text-sm text-white" style={{ background: accent }}>
          {idx === pool.length - 1 ? "Ver resultado" : "Continuar"}
        </button>
      )}
    </div>
  );
}

export default function FalaBemDemo() {
  const [direction, setDirection] = useState(null);
  const [step, setStep] = useState("intro");

  const data = direction ? CONTENT_BY_DIRECTION[direction] : null;

  function reiniciar() {
    setDirection(null);
    setStep("intro");
  }

  const OPTIONS = [
    { key: "ht-to-pt", bg: GREEN_SOFT, border: GREEN },
    { key: "pt-to-ht", bg: BLUE_SOFT, border: BLUE },
    { key: "pt-to-en", bg: YELLOW_SOFT, border: YELLOW },
    { key: "en-to-pt", bg: PINK_SOFT, border: PINK },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: CREAM, fontFamily: "'Baloo 2','Nunito',system-ui,sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Nunito:wght@400;600;700&display=swap');`}</style>

      <div className="w-full flex flex-col" style={{ maxWidth: 420, background: "#fff", borderRadius: 32, border: `2px solid ${BORDER}`, minHeight: 560, padding: "28px 22px" }}>

        {!direction && (
          <div className="flex-1 flex flex-col">
            <div className="text-center mb-5">
              <span style={{ fontSize: 40 }}>👋</span>
              <h1 className="font-extrabold text-2xl mt-1" style={{ color: GREEN_DARK }}>FALA BEM</h1>
              <p className="text-sm mt-1" style={{ color: INK_SOFT }}>
                Testa de graça um pouquinho do app — 3 palavras, 5 exercícios de verbo e 5 de concordância
              </p>
            </div>
            <p className="font-extrabold text-sm text-center mb-3" style={{ color: INK }}>Como você deseja aprender?</p>
            <div className="flex flex-col gap-2.5">
              {OPTIONS.map((opt) => {
                const d = CONTENT_BY_DIRECTION[opt.key];
                return (
                  <button
                    key={opt.key}
                    onClick={() => setDirection(opt.key)}
                    className="flex items-center gap-3 p-3.5 rounded-2xl text-left"
                    style={{ background: opt.bg, border: `2px solid ${opt.border}` }}
                  >
                    <span style={{ fontSize: 26 }}>{d.flag}</span>
                    <div>
                      <p className="font-extrabold text-sm" style={{ color: INK }}>{d.label}</p>
                      <p className="text-xs" style={{ color: INK_SOFT }}>{d.sub}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {direction && step === "intro" && (
          <div className="flex-1 flex flex-col items-center justify-center text-center gap-3">
            <span style={{ fontSize: 40 }}>{data.flag}</span>
            <h2 className="font-extrabold text-xl" style={{ color: INK }}>{data.label} → {data.sub}</h2>
            <button onClick={() => setStep("animals")} className="mt-4 py-3 px-8 rounded-2xl font-extrabold text-sm text-white flex items-center gap-2" style={{ background: GREEN }}>
              Começar teste grátis <ArrowRight size={16} />
            </button>
            <button onClick={reiniciar} className="text-xs font-bold" style={{ color: INK_SOFT }}>← Trocar idioma</button>
          </div>
        )}

        {direction && step === "animals" && (
          <div className="flex-1 flex flex-col">
            <p className="font-extrabold text-sm text-center mb-1" style={{ color: INK }}>ANIMAIS</p>
            <p className="text-xs text-center mb-4" style={{ color: INK_SOFT }}>Toque em cada animal pra ouvir e ver a tradução</p>
            <div className="flex gap-3 mb-6">
              {data.animals.map((a) => <AnimalCard key={a.principal} item={a} speakCode={data.speakCode} />)}
            </div>
            <button onClick={() => setStep("verbs")} className="mt-auto py-3 rounded-2xl font-extrabold text-sm text-white flex items-center justify-center gap-2" style={{ background: BLUE }}>
              Ir pra Praticar Verbos <ArrowRight size={16} />
            </button>
          </div>
        )}

        {direction && step === "verbs" && (
          <div className="flex-1 flex flex-col">
            <p className="font-extrabold text-sm text-center mb-4" style={{ color: INK }}>PRATICAR VERBOS</p>
            <QuizStep pool={data.verbs} accent={BLUE} accentSoft={BLUE_SOFT} doneLabel="Ir pra Concordância" onAllDone={() => setStep("nominal")} />
          </div>
        )}

        {direction && step === "nominal" && (
          <div className="flex-1 flex flex-col">
            <p className="font-extrabold text-sm text-center mb-4" style={{ color: INK }}>PRATICAR CONCORDÂNCIA</p>
            <QuizStep pool={data.nominal} accent={PINK} accentSoft={PINK_SOFT} doneLabel="Ver oferta completa" onAllDone={() => setStep("cta")} />
          </div>
        )}

        {direction && step === "cta" && (
          <div className="flex-1 flex flex-col items-center justify-center text-center gap-3">
            <Sparkles size={40} color={YELLOW} />
            <h2 className="font-extrabold text-xl" style={{ color: INK }}>Isso foi só uma provinha!</h2>
            <p className="text-sm" style={{ color: INK_SOFT }}>
              O app completo tem <strong>+500 palavras</strong>, <strong>20 diálogos</strong>,
              músicas, e exercícios de verbo e concordância bem maiores — em
              Kreyòl e Inglês.
            </p>
            <div className="rounded-2xl p-4 mt-2 w-full" style={{ background: GREEN_SOFT }}>
              <p className="font-extrabold text-2xl" style={{ color: GREEN_DARK }}>R$ 10,00</p>
              <p className="text-xs" style={{ color: INK_SOFT }}>Pagamento único · 1 mês de acesso completo</p>
            </div>
            <a href="https://pay.kiwify.com.br/e55KfCj" target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-2xl font-extrabold text-sm text-white mt-2" style={{ background: GREEN }}>
              DESBLOQUEAR AGORA
            </a>
            <button onClick={reiniciar} className="text-xs font-bold mt-2" style={{ color: INK_SOFT }}>Testar outro idioma</button>
          </div>
        )}
      </div>
    </div>
  );
}
