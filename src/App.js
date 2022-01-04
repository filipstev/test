import { useEffect, useState } from 'react';
import './App.css';
import ClanTima from './components/ClanTima/ClanTima';

function App() {
  const [ime, setIme] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [tim, setTim] = useState(['Filip', 'Luka', 'Kosta', 'Djordje']);

  const prikaziInput = () => {
    setShowInput(!showInput);
  };

  const povecajTim = () => {
    setIme('');
    setTim([...tim, ime]);
  };

  const onDelete = (id) => {
    const newTim = [...tim];
    newTim.splice(
      tim.findIndex((clan) => clan === id),
      1
    );
    setTim(newTim);
  };

  return (
    <div
      className="App"
      style={{
        width: '90%',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>IT tim</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: '1.2rem',
        }}
      >
        {tim.map((clan) => {
          return <ClanTima ime={clan} key={clan} onDelete={onDelete} />;
        })}
      </div>
      <div
        style={{
          fontSize: '40px',
          cursor: 'pointer',
        }}
        onClick={prikaziInput}
      >
        +
      </div>

      <div style={{ display: showInput === true ? 'flex' : 'none' }}>
        <input value={ime} onChange={(e) => setIme(e.target.value)} />
        <button onClick={povecajTim}>Submit</button>
      </div>
    </div>
  );
}

export default App;
