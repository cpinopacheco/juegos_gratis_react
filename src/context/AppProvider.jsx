import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [games, setGames] = useState(null);
  const [alerta, setAlerta] = useState({});
  const [loader, setLoader] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  //Obtiene todos los juegos
  const getAllGames = async () => {
    const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1527438979msheaa627273e55619p1afc46jsn35e70e1042f9",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      const res = await fetch(url, options);
      const data = await res.json();

      if (res.status !== 200) {
        throw new Error("Hubo un problema para obtener los juegos");
      }

      setGames(data);
      setAlerta({ err: false, msg: null });
    } catch (error) {
      setAlerta({ err: true, msg: error.message });
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  //filtra los juegos por categoria
  const filterByCategory = async (category) => {
    setLoader(true);

    try {
      let url;

      category === "all-games"
        ? (url = "https://free-to-play-games-database.p.rapidapi.com/api/games")
        : (url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`);

      if (!category) throw new Error("Ingrese la categoria del videojuego");

      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "1527438979msheaa627273e55619p1afc46jsn35e70e1042f9",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      };

      const res = await fetch(url, options);
      const data = await res.json();

      if (res.status !== 200) {
        throw new Error("Juego no encontrado");
      }

      setGames(data);
      setAlerta({ err: false, msg: null });
    } catch (error) {
      setAlerta({ err: true, msg: error.message });
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  //Buscar juego por title
  const searchGameByName = async (searchValue) => {
    setAlerta({ err: false, msg: null });
    setLoader(true);

    const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1527438979msheaa627273e55619p1afc46jsn35e70e1042f9",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      const res = await fetch(url, options);
      const data = await res.json();

      //Validaciones
      if (res.status !== 200) {
        throw new Error("Hubo un problema para obtener los juegos");
      }

      const result = data.filter(
        /* Busca por una coincidencia */
        (game) =>
          game.title.toLowerCase().includes(`${searchValue.toLowerCase()}`)
      );

      //si no se ingresa un valor de búsqueda
      if (searchValue === "") {
        setAlerta({
          err: true,
          msg: "Ingrese nombre del juego que desea buscar",
        });

        setGames(data);
        setLoader(false);

        setTimeout(() => {
          setAlerta({
            err: false,
            msg: null,
          });
        }, 4000);
        return;
      }

      //si no encuentra resultados
      if (result.length === 0) {
        setAlerta({
          err: true,
          msg: "No encontramos el juego que buscas",
        });

        setGames(data);
        setLoader(false);

        setTimeout(() => {
          setAlerta({
            err: false,
            msg: null,
          });
        }, 4000);
      } else {
        setGames(result);
        setLoader(false);
      }
    } catch (error) {
      setAlerta({ err: true, msg: error.message });
      console.log(error);
    }
  };

  useEffect(() => {
    getAllGames();
  }, []);

  return (
    <AppContext.Provider
      value={{
        games,
        loader,
        filterByCategory,
        alerta,
        searchValue,
        setSearchValue,
        searchGameByName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };

export default AppContext;
