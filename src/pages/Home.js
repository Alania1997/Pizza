import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="main-title">СЫТЫЙ ДЖОННИ</h1>
        <div className="info-section">
          <p className="work-hours">Режим работы: 10:00 - 24:00</p>
          <p className="address">Адрес: ул. Чертановская, 9А, Москва</p>
        </div>
      </div>
      <div className="scroll-down-arrow">
        ↓
      </div>
    </div>
  );
}

export default Home;