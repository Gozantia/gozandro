import { useState, useEffect } from "react";
import {
  useLocation,
  Route,
  Routes
} from "react-router-dom";
import Home from "./home";
import Almendra from "./songs/Almendra";


const roads = [
    {
        path: '/',
        id: 'presentation',
        animation: 'presentation',
        Component: Home,
        text: <p>Acerca del disco 
        Este disco reúne algunas canciones que escribí del 2017 al 2022 y superaron todos mis cambios de ánimo y mi perdida de memoria constante. Hacerlo fue una especie de reto- experimento – exorcismo y también un golpe a la realidad y a entender que las cosas nunca serán fáciles y que esa es la mejor parte. 
        Hacerlo surgió de la idea de liberarse de las cosas viejas para encontrar las nuevas, una nuevo avatar con el que me despido de mis veintes para estar más presente en lo de ahora, que es esta búsqueda de mi mismo en un laberinto difuso.         
        ¡Gracias por leerlo y escucharlo!
        </p> 
    },
    {
        path: '/canciones/almendra',
        id: 'almendra',
        animation: 'almendra',
        Component: Almendra
    }
]

const Content= () => {
    // use location hook
    const location = useLocation();

    // location local state
    const [displayLocation, setDisplayLocation] = useState(location);

    // transitions state
    const [transitionStage, setTransistionStage] = useState("fadeIn");

    useEffect(() => {
        if (location !== displayLocation) setTransistionStage("fadeOut");
    }, [location, displayLocation]);

    const handleAnimationEnd = (event) => {
        if (transitionStage === "fadeOut") {
            setTransistionStage("fadeIn");
            setDisplayLocation(location);
        }
    }

    return(    
        <> 
        {
            roads.map((Road, index) => (
                <div
                    key={index}
                    id={Road.id}
                    className={`${transitionStage}`}
                    onAnimationEnd={handleAnimationEnd}
                >
                    <Routes location={displayLocation}>
                        <Route exact path={Road.path} element={<Road.Component />} />
                    </Routes>
                </div>
            ))
        }
        </>
    );
};

export default Content;