// Test-Skript für die getVerbForms Funktion

const verbData = {
    a: { name: "vocāre", sPres: "vocā", sPerf: "vocāv", pPerf: "vocāt", type: "a" },
    e: { name: "monēre", sPres: "monē", sPerf: "monu", pPerf: "monit", type: "e" },
    i: { name: "audīre", sPres: "audi", sPerf: "audīv", pPerf: "audīt", type: "i" },
    cons: { name: "regere", sPres: "reg", sPerf: "rēx", pPerf: "rēct", type: "cons" },
    mixed: { name: "capere", sPres: "cap", sPerf: "cēp", pPerf: "capt", type: "mixed" }
};

function getVerbForms(verb, tense, voice = "Aktiv") {
    if (!verb) return Array(6).fill("-");
    const { sPres, sPerf, pPerf, type } = verb;
    
    if (tense === "Präsens") {
        if (voice === "Aktiv") {
            const ends = (type === "cons") ? ["ō", "is", "it", "imus", "itis", "unt"] : 
                         (type === "mixed") ? ["iō", "is", "it", "imus", "itis", "iunt"] :
                         (type === "i") ? ["ō", "s", "t", "mus", "tis", "unt"] : ["ō", "s", "t", "mus", "tis", "nt"];
            return ends.map((e, i) => (i === 0 && (type === "a" || type === "e")) ? sPres.slice(0,-1) + e : sPres + e);
        }
    }

    if (tense === "Imperfekt") {
        if (voice === "Aktiv") {
            if (type === "a" || type === "e") return ["bam", "bās", "bat", "bāmus", "bātis", "bant"].map(e => sPres + e);
            if (type === "i") return ["ēbam", "ēbās", "ēbat", "ēbāmus", "ēbātis", "ēbant"].map(e => sPres + e);
            if (type === "cons") return ["ēbam", "ēbās", "ēbat", "ēbāmus", "ēbātis", "ēbant"].map(e => sPres + e);
            if (type === "mixed") return ["iēbam", "iēbās", "iēbat", "iēbāmus", "iēbātis", "iēbant"].map(e => sPres + e);
        }
    }

    if (tense === "Futur I") {
        if (voice === "Aktiv") {
            if (type === "a" || type === "e") return ["bō", "bis", "bit", "bimus", "bitis", "bunt"].map(e => sPres + e);
            if (type === "mixed") return ["iam", "ies", "iet", "iēmus", "iētis", "ient"].map(e => sPres + e);
            if (type === "i") return ["am", "es", "et", "ēmus", "ētis", "ent"].map(e => sPres + e);
            if (type === "cons") return ["am", "ēs", "et", "ēmus", "ētis", "ent"].map(e => sPres + e);
        }
    }

    if (tense === "Perfekt") {
        if (voice === "Aktiv") return ["ī", "istī", "it", "imus", "istis", "ērunt"].map(e => sPerf + e);
    }

    if (tense === "Plusquamperfekt") {
        if (voice === "Aktiv") return ["eram", "erās", "erat", "erāmus", "erātis", "erant"].map(e => sPerf + e);
    }

    if (tense === "Futur II") {
        if (voice === "Aktiv") return ["erō", "eris", "erit", "erimus", "eritis", "erint"].map(e => sPerf + e);
    }

    return Array(6).fill("-");
}

// Test-Daten aus Benutzer-Tabelle
const expectedForms = {
    "Präsens": {
        "a": ["voco", "vocas", "vocat", "vocamus", "vocatis", "vocant"],
        "e": ["moneo", "mones", "monet", "monemus", "monetis", "monent"],
        "i": ["audio", "audis", "audit", "audimus", "auditis", "audiunt"],
        "cons": ["rego", "regis", "regit", "regimus", "regitis", "regunt"],
        "mixed": ["capio", "capis", "capit", "capimus", "capitis", "capiunt"]
    },
    "Imperfekt": {
        "a": ["vocabam", "vocabas", "vocabat", "vocabamus", "vocabatis", "vocabant"],
        "e": ["monebam", "monebas", "monebat", "monebamus", "monebatis", "monebant"],
        "i": ["audiebam", "audiebas", "audiebat", "audiebamus", "audiebatis", "audiebant"],
        "cons": ["regebam", "regebas", "regebat", "regebamus", "regebatis", "regebant"],
        "mixed": ["capiebam", "capiebas", "capiebat", "capiebamus", "capiebatis", "capiebant"]
    },
    "Futur I": {
        "a": ["vocabo", "vocabis", "vocabit", "vocabimus", "vocabitis", "vocabunt"],
        "e": ["monebo", "monebis", "monebit", "monebimus", "monebitis", "monebunt"],
        "i": ["audiam", "audies", "audiet", "audiemis", "audietus", "audient"],
        "cons": ["regam", "reges", "reget", "regemus", "regetis", "regent"],
        "mixed": ["capiam", "capes", "capiet", "capiemus", "capietus", "capient"]
    },
    "Perfekt": {
        "a": ["vocavi", "vocavisti", "vocavit", "vocavimus", "vocavistis", "vocaverunt"],
        "e": ["monui", "monuisti", "monuit", "monuimus", "monuistis", "monuerunt"],
        "i": ["audivi", "audivisti", "audivit", "audivimus", "audivistis", "audiverunt"],
        "cons": ["rexi", "rexisti", "rexit", "reximus", "rexistis", "rexerunt"],
        "mixed": ["cepi", "cepisti", "cepit", "cepimus", "cepistis", "ceperunt"]
    },
    "Plusquamperfekt": {
        "a": ["vocaveram", "vocaveras", "vocaverat", "vocaveramus", "vocaveratis", "vocaverant"],
        "e": ["monueram", "monueras", "monuerat", "monueramus", "monueratis", "monuerant"],
        "i": ["audiveram", "audiveras", "audiverat", "audiveram", "audiverat", "audiverant"],
        "cons": ["rexeram", "rexeras", "rexerat", "rexeramus", "rexeratis", "rexerant"],
        "mixed": ["ceperam", "ceperas", "ceperat", "ceperamus", "ceperatis", "ceperant"]
    },
    "Futur II": {
        "a": ["vocavero", "vocaveris", "vocaverit", "vocaverimus", "vocaveritis", "vocaverint"],
        "e": ["monuero", "monueris", "monuerit", "monuerimus", "monueritis", "monuerint"],
        "i": ["audivero", "audiveris", "audiverit", "audivero", "audiverit", "audiverint"],
        "cons": ["rexero", "rexeris", "rexerit", "rexero", "rexerit", "rexerint"],
        "mixed": ["cepero", "coperis", "ceperit", "ceperimus", "ceperitis", "ceperint"]
    }
};

// Teste die Funktionen
console.log("=== Test der getVerbForms Funktion ===\n");

for (const [tense, types] of Object.entries(expectedForms)) {
    console.log(`${tense}:`);
    for (const [typeKey, expected] of Object.entries(types)) {
        const result = getVerbForms(verbData[typeKey], tense, "Aktiv");
        const resultNorm = result.map(f => f.toLowerCase().replace(/[āēīōū]/g, c => ({ā:'a', ē:'e', ī:'i', ō:'o', ū:'u'}[c])));
        const expectedNorm = expected.map(f => f.toLowerCase());
        
        const match = resultNorm.every((val, idx) => val === expectedNorm[idx]);
        const status = match ? "✓" : "✗";
        
        console.log(`  ${status} ${typeKey}: ${result.join(", ")}`);
        if (!match) {
            console.log(`      Erwartet: ${expected.join(", ")}`);
        }
    }
    console.log();
}
