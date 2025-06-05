import React from "react";
import './App.css';
import logo from './logo.svg'; // Replace with your actual logo file if different

function HomePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8 text-center text-neutral-900 font-sans">
      <img src={logo} alt="Claudio Gobber Logo" className="w-24 h-24 mb-6" />
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Claudio Gobber Art</h1>
      <p className="text-xl md:text-2xl italic mb-8 text-neutral-700">The Art of Distilling Our Time</p>

      <div className="max-w-3xl text-left space-y-4 mb-10">
        <p>
          Claudio Gobber, born in Trentino, Italy, is a sculptor, painter, photographer, and designer blending traditional techniques with digital experimentation. After a career spanning Milan, London, Switzerland, and Spain, he returned to Trentino where his practice deepened with clay, driftwood, and generative art.
        </p>
        <p>
          Inspired by artists like Riccardo Schweizer and Simone Turra, Claudio’s mission is to create time capsules—works that challenge, move, and enlighten. His art explores humanity’s deepest questions and themes such as dignity, adaptation, love, and legacy.
        </p>
        <p>
          Exhibitions include Artexpo New York, LA Art Show, Spectrum Miami, and the Washington Biennale. His installations integrate sculpture, sound, light, and scent to offer multisensory experiences.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Projects</h2>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li><strong>RIVER</strong>: Driftwood-based sculptures capturing nature’s transformation.</li>
          <li><strong>DIGNITY</strong>: Portraits affirming the right to dignity amidst hardship.</li>
          <li><strong>FADING LOVE</strong>: A 12-part emotional narrative through heartbreak and change.</li>
          <li><strong>ADAPTATION</strong>: Faces of resilience, creativity, and courage in modern times.</li>
          <li><strong>SESSO SBAGLIATO</strong>: A bold Cubist triptych on sexuality’s distorted portrayals.</li>
        </ul>
      </div>

      <div className="flex flex-wrap justify-center gap-6 text-blue-600 text-lg">
        <a href="https://www.instagram.com/claudio_gobber_" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
        <a href="https://x.com/ClaudioxGobber?s=03" target="_blank" rel="noopener noreferrer" className="hover:underline">X (Twitter)</a>
        <a href="mailto:claudio.x.gobber@gmail.com" className="hover:underline">Email</a>
      </div>
    </div>
  );
}

function App() {
  return <HomePage />;
}

export default App;
