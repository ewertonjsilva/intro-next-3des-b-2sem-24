import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="containerGlobal">
      <h1 className={styles.tituloHomePage}>Aula Next JS</h1>
      <h2>Exemplo h2</h2>
      <h3>Exemplo h3</h3>
      <p>Texto parágrafo</p>

      <div className={styles.containerImagem}>
        <Image
          src="/pikachu.jpg"
          width={500}
          height={500}
          alt="Pokémon Pikachu"
          className={styles.imagemHomePage}
        />

        <Image
          src="/pikachu.jpg"
          width={50}
          height={50}
          alt="Pokémon Pikachu"
          className={styles.imagemHomePage}
        />
      </div>

    </div>
  );
}
