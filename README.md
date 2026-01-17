# LateinMaster Pro - Ultimate Edition

Eine moderne interaktive Lernapplikation zum Trainieren lateinischer Verbformen mit Gamification-Elementen.

## 🎯 Features

- **20 Trainings-Level** mit progressiver Schwierigkeit
- **Zwei Trainingsmodi**:
  - Multiple Choice (schnelles Erkennen)
  - Texteingabe (aktives Abrufen)
- **Dunkelmodus** für entspanntes Lernen
- **XP-System** mit Level-Progression
- **Bibliotheks-Funktion** mit allen Verbformen
- **Persistente Fortschrittspeicherung** via Firebase
- **Responsives Design** für alle Geräte

## 🚀 Schnellstart

### 1. Lokal testen
Öffne einfach `index.html` in deinem Browser oder nutze einen lokalen Server:
```bash
python -m http.server 8000
```

### 2. Firebase konfigurieren

Die App benötigt Firebase:

1. Gehe zu [Firebase Console](https://console.firebase.google.com)
2. Erstelle ein neues Projekt
3. Aktiviere **Authentication** (Anonymous)
4. Erstelle eine **Firestore Database**
5. Kopiere deine Firebase-Konfiguration
6. Ersetze die `firebaseConfig` in `index.html`:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

### 3. Auf GitHub Pages deployen

1. Push zu GitHub (sollte bereits gemacht sein)
2. Gehe zu **Repository Settings** → **Pages**
3. Wähle **Deploy from a branch** → **main**
4. Speichern

Deine App ist unter `https://YOUR_USERNAME.github.io/LateinMaster/` verfügbar!

## 📚 Verbparadigmen

- A-Konjugation: vocāre
- E-Konjugation: monēre
- I-Konjugation: audīre
- Konsonantische Konjugation: regere
- Gemischte Konjugation: capere

## 🎮 Spielmechanik

1. Wähle ein Level
2. Entscheide dich für Multiple Choice oder Texteingabe
3. Fülle die Lücke im Paradigma
4. Verdiene XP und schalte Level frei

## 🔧 Stack

- HTML5, Tailwind CSS, Vanilla JavaScript
- Firebase für Benutzerdaten
- ES6 Modules

---

**Labor omnia vincit.** - Fleiss besiegt alles!