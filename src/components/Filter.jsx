import styles from "../styles/Filter.module.css";
import useApp from "../hooks/useApp";

const Filter = () => {
  const { filterByCategory } = useApp();

  const categorys = [
    "mmorpg",
    "shooter",
    "strategy",
    "moba",
    "racing",
    "sports",
    "social",
    "sandbox",
    "open-world",
    "survival",
    "pvp",
    "pve",
    "pixel",
    "voxel",
    "zombie",
    "turn-based",
    "first-person",
    "third-Person",
    "top-down",
    "tank",
    "space",
    "sailing",
    "side-scroller",
    "superhero",
    "permadeath",
    "card",
    "battle-royale",
    "mmo",
    "mmofps",
    "mmotps",
    "3d",
    "2d",
    "anime",
    "fantasy",
    "sci-fi",
    "fighting",
    "action-rpg",
    "action",
    "military",
    "martial - arts",
    "flight",
    "low-spec",
    "tower-defense",
    "horror",
    "mmorts",
  ];

  return (
    <div className={styles.container_select}>
      <select
        name="select-platform"
        id="select-platform"
        className={styles.select}
        defaultValue="Seleccione Categoría"
        onChange={(e) => filterByCategory(e.target.value)}
      >
        <option value="Seleccione Categoría" disabled>
          Seleccione Categoría
        </option>
        <option value="all-games">ALL GAMES</option>
        {categorys.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
