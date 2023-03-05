import { useState, useEffect } from "react";
import {
  useLocation,
  Route,
  Routes
} from "react-router-dom";
import Home from "./home";
import Almendra from "./songs/Almendra";
import Año_Viejo from "./songs/Anio-viejo";
import El_asteroide from "./songs/El-asteroide";
import Charlie_parker from "./songs/Charlie-Parker";
import El_hombre_cosmico from "./songs/El-hombre-cosmico";
import El_turismo_menguo from "./songs/El-turismo-menguo";
import Los_vidrios from "./songs/Los-vidrios";
import Vos_me_ayudas from "./songs/Vos-me-ayudas";
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
    },
    {
        path: '/canciones/año-viejo',
        id: 'año-viejo',
        animation: 'año-viejo',
        Component: Año_Viejo
    }
    ,
    {
        path: '/canciones/el-asteroide',
        id: 'el-asteroide',
        animation: 'almendra',
        Component: El_asteroide
    },
    {
        path: '/canciones/charlie-parker',
        id: 'charlie-parker',
        animation: 'almendra',
        Component: Charlie_parker
    }
    ,
    {
        path: '/canciones/el-hombre-cosmico',
        id: 'hombre-cosmico',
        animation: 'almendra',
        Component: El_hombre_cosmico
    }
    ,
    {
        path: '/canciones/el-turismo-menguo',
        id: 'el-turismo-menguo',
        animation: 'almendra',
        Component: El_turismo_menguo
    }
    ,
    {
        path: '/canciones/los-vidrios',
        id: 'los-vidrios',
        animation: 'almendra',
        Component: Los_vidrios
    }
    ,
    {
        path: '/canciones/vos-me-ayudas',
        id: 'vos-me-ayudas',
        animation: 'almendra',
        Component: Vos_me_ayudas
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

    const handleAnimationEnd = () => {
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
                    className={`${transitionStage}` } 
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