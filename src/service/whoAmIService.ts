const animais: string[] = [
    "cachorro", "gato", "elefante", "girafa", "leão", "tigre", "macaco", "baleia", "golfinho", "foca",
    "panda", "koala", "canguru", "hipopótamo", "rinoceronte", "rato", "esquilo", "coelho", "morcego", "ouriço", "porco", "javali",
    "veado", "antílope", "cervo", "alce", "carneiro", "cabra", "boi", "touro", "vaca", "bufalo", "bisão", "zebu", "antílope",
    "lobo", "raposa", "hiena", "pantera", "onça", "urso", "bisonte", "cavalo", "burro", "zebra",
    // Aves
    "pássaro", "águia", "coruja", "falcão", "gavião", "papagaio", "canário", "galinha", "galo", "pato",
    "pintinho", "peru", "cisne", "avestruz", "ema", "beija-flor", "colibri", "arara", "pombo", "corvo", "pingüim",
    "ganso", "cisne", "pombo", "corvo", "avestruz", "ema", "beija-flor", "colibri", "arara", 
    // Répteis
    "cobra", "jacaré", "lagarto", "tartaruga", "camaleão", "iguana", "crocodilo", "calango", "jiboia", "píton", "anaconda",
    // Anfíbios
    "sapo", "rã", "salamandra", "perereca", "axolote",  
    // Peixes
    "peixe", "tubarão", "atum", "salmão", "bacalhau", "piranha", "barracuda", "cavala", "dourado", "pescada", "garoupa",
    "merluza", "pargo", "sardinha", "tilápia", "truta", "anchova", "arenque", "bagre", "badejo", "carpa", "corvina", "enguia",
    "lambari", "linguado", "peixe-espada", "pescadinha", "robalo", "sargo", "tambaqui", "tucunaré", "xaréu", "peixe-boi",
    // Invertebrados
    "inseto", "aranha", "escorpião", "caranguejo", "lagosta", "polvo", "mexilhão", "ostra", "lula", "lesma", "caracol", "minhoca",
    "sanguessuga", "piolho", "pulga", "barata", "formiga", "vespa", "abelha", "marimbondo", "mosquito", "pernilongo", "borboleta",
    "mariposa", "besouro", "libélula", "grilo", "gafanhoto", "cigarra", "tênia", "lombriga", "planária", "formiga"
];

export const getRandomValue = (array: string[]): string => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

