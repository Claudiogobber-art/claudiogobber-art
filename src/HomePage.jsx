import React from "react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black font-sans">
      <section className="p-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Claudio Gobber Art</h1>
        <p className="text-xl italic">L'Arte di Distillare il nostro Tempo</p>
      </section>

      <section className="p-10 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Progetti in Evidenza</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>RIVER</strong> – Sculture e dipinti da legno di fiume</li>
            <li><strong>DIGNITY</strong> – Ritratti sulla dignità umana</li>
            <li><strong>FADING LOVE</strong> – Il viaggio emozionale dopo una separazione</li>
            <li><strong>ADAPTATION</strong> – Ritratti delle qualità per il futuro</li>
            <li><strong>SESSO SBAGLIATO</strong> – Triptych cubista sulla sessualità moderna</li>
          </ul>
        </div>
        <div>
          <img src="/CGA-100.jpg" alt="Opera di Claudio Gobber" className="rounded-2xl" />
        </div>
      </section>

      <section className="p-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">Biografia</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <img src="/Ritratto con dito.webp" alt="Claudio Gobber ritratto" className="rounded-xl w-full h-auto" />
          <div className="space-y-4 text-sm">
            <p>Born in Trentino, Italy in 1979, Claudio Gobber grew up in the magnificent valleys of Primiero and Vanoi. Inspired by the work of Trentino and South Tyrolean artists from a young age, including Riccardo Schweizer, Simone Turra, and Giuliano Orsingher, he recognises himself as a sculptor, painter, photographer, and designer with a passion for new technologies.</p>
            <p>While art has always been his Yin, business was his Yang. After studying in Milan, earning a bachelor’s and master’s degree in Advertising, he moved to London for 10 years, immersing himself in photography—practicing techniques taught by his grandfather. Balancing city life with retreats in the mountain studio, he continued to paint and sculpt.</p>
            <p>Following time in Switzerland and Spain, Claudio returned to Trentino where his practice evolved with new acrylic works and an interest in clay sculpture. His work is now heavily influenced by digital movements, particularly generative art and NFTs, exploring how physical works can be reinterpreted digitally.</p>
            <p>Claudio’s practice blends traditional and digital methods, exploring themes that capture the essential aspects of contemporary human experience. His mission, “The Art of Distilling Time,” seeks to inspire personal reflection and dialogue, offering his work as an anthropological time capsule.</p>
          </div>
        </div>
      </section>

      <section className="p-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">Esposizioni</h2>
        <ul className="list-disc pl-10 space-y-1 text-sm">
          <li>2024 – Artexpo New York: "Old Man" (Project River)</li>
          <li>2024 – LA Art Show: "Embracing the harsh truth..." (Fading Love)</li>
          <li>2023 – Spectrum Miami: "Resourcefulness" (Adaptation)</li>
          <li>2023 – Washington Biennale: "The bull is not happy"</li>
          <li>2023 – Sesso Sbagliato pubblicato in Annuario Artisti '23</li>
          <li>2023 – Critica e quotazione di Vittorio Sgarbi su Sesso Sbagliato</li>
          <li>2022 – Bienal de Arte Barcelona, MEAM: "Onorificenza a Renato Guttuso"</li>
          <li>2021 – "Purple Lady" e sei opere al Premio Vittorio Sgarbi, Ferrara</li>
        </ul>
      </section>

      <section className="p-10 text-center">
        <h2 className="text-xl font-semibold">Contatti</h2>
        <p className="mt-2">claudio.x.gobber@gmail.com</p>
        <p className="mt-1">Instagram: <a href="https://www.instagram.com/claudio_gobber_" target="_blank" rel="noopener noreferrer">@claudio_gobber_</a></p>
        <p className=\"mt-1\">Twitter/X: <a href=\"https://x.com/ClaudioxGobber?s=03\" target=\"_blank\" rel=\"noopener noreferrer\">@ClaudioxGobber</a></p>
        <p className=\"mt-4\">Scarica le brochure:</p>
        <ul className="mt-2 space-y-1 underline">
          <li><a href="/RIVER.pdf" download>RIVER</a></li>
          <li><a href="/DIGNITY.pdf" download>DIGNITY</a></li>
          <li><a href="/FADING LOVE.pdf" download>FADING LOVE</a></li>
          <li><a href="/ADAPTATION.pdf" download>ADAPTATION</a></li>
          <li><a href="/SESSO SBAGLIATO.pdf" download>SESSO SBAGLIATO</a></li>
        </ul>
      </section>
    </main>
  );
}
