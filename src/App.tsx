import './App.css'
import carro1 from './assets/car1.jpg';
import carro2 from './assets/car2.jpg';
import carro3 from './assets/car3.jpg';
import carro4 from './assets/car4.jpg';
import carro5 from './assets/car5.jpg';


function App() {
    return (
        <>
            <main className="gallery__page">
                <section className="gallery__list">
                    <figure className="gallery__item">
                        <img className="gallery__item-image" loading="lazy" src={carro1} alt="car"/>
                    </figure>
                    <figure className="gallery__item">
                        <img className="gallery__item-image" loading="lazy" src={carro2} alt="car"/>
                    </figure>
                    <figure className="gallery__item">
                        <img className="gallery__item-image" loading="lazy" src={carro3} alt="car"/>
                    </figure>
                    <figure className="gallery__item">
                        <img className="gallery__item-image" loading="lazy" src={carro4} alt="car"/>
                    </figure>
                    <figure className="gallery__item">
                        <img className="gallery__item-image" loading="lazy" src={carro5} alt="car"/>
                    </figure>
                </section>
            </main>
        </>
    )
}

export default App
