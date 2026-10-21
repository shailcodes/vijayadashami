export default function DivineVeil({ fabric, verse, translit, meaning }: { 
  fabric: 'agni' | 'vijay' | 'pushp'; 
  verse: string; 
  translit: string; 
  meaning: string 
}) {
  return (
    <div className="fabric-transition" data-fabric={fabric} aria-hidden="true">
      <div className="fabric-verse-layer">
        <div className="fabric-verse">
          <svg viewBox="0 0 64 64" fill="none">
            <path d="M32 8C15 24 23 41 32 49C41 41 49 24 32 8ZM32 49C16 49 7 36 9 23C22 25 31 36 32 49ZM32 49C48 49 57 36 55 23C42 25 33 36 32 49ZM13 51Q32 62 51 51" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          <p className="fabric-sanskrit" lang="sa">{verse}</p>
          <p className="fabric-translit">{translit}</p>
          <p className="fabric-meaning">{meaning}</p>
        </div>
      </div>
    </div>
  );
}