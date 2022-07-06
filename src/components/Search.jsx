import styles from "../styles/Search.module.css";
import useApp from "../hooks/useApp";

const Search = () => {
  const { searchValue, setSearchValue, searchGameByName } = useApp();

  const searchGame = (e, searchValue) => {
    e.preventDefault();
    searchGameByName(searchValue);
  };

  //seguir con esto

  return (
    <div className={styles.container_form}>
      <form className={styles.form}>
        <input
          className={styles.input}
          placeholder="Busca tú juego favorito"
          required=""
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className={styles.reset} type="reset">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            onClick={() => setSearchValue("")}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <button onClick={(e) => searchGame(e, searchValue)}>
          <svg
            width="20"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="search"
          >
            <path
              d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Search;
