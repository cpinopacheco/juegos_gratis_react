import Card from "../components/Card";
import styles from "../styles/pages/Home.module.css";
import useApp from "../hooks/useApp";
import Loader from "../components/Loader";
import Search from "../components/Search";
import Filter from "../components/Filter";
import Alert from "../components/Alert";

const Home = () => {
  const { games, loader, alerta } = useApp();

  return (
    <>
      <div
        className={`${styles.filters_container} animate__animated animate__fadeIn`}
      >
        <Search />
        <Filter />
      </div>

      <div style={{ minHeight: "100vh" }}>
        {loader ? (
          <Loader />
        ) : (
          <>
            {alerta.err && <Alert msg={alerta.msg} />}

            <div
              className={`${styles.card_container} animate__animated animate__fadeIn`}
            >
              {games &&
                games.map((game) => <Card key={game.id} game={game}></Card>)}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
