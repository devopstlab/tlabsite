'use client'

import ReactWordcloud from "react-wordcloud";


function generateWords(): { text: string; value: number }[] {
  const WORDS = [
    "IoT",
    "edge computing",
    "cloud computing",
    "inteligencia artificial",
    "blockchain",
    "bigData",
    "machine learning",
"gemelos digitales",
"analítica predictiva",
"data mining",

    
  ];

  return WORDS.map(word => ({
    text: word,
    value: Math.floor(Math.random() * 5) + 1,
  }));
}



// Función para generar la nube de palabras.
export function WordCloud() {
  return (
    <ReactWordcloud
          words={generateWords()}
          options={{
            enableTooltip: false,
            colors: ["#0AF2D155", "#0AF2D188", "#0AF2D1FF"],
            fontFamily: `Trebuchet MS`,
            fontSizes: [12, 60],
            fontStyle: "normal",
            fontWeight: "normal",
            padding: 2,
            rotations: 13,
            rotationAngles: [0, 0],
            scale: "sqrt",
            spiral: "archimedean",
          }}
        />
  );
}