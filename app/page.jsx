import styles from "../styles/Home.module.css"
import Header from "../components/Header"
import Card from "../components/Card"
import Footer from "../components/Footer"

export default function Home() {
return (
    <div className={styles.container}>
        <Header />
    <main className={styles.main}>
    <div className={styles.article}>
        <Card className={styles.card} title="Presenteie quem você ama com nossas belas flores na caixa" content="Nada expressa melhor o seu carinho do que um presente cuidadosamente elaborado. Nossas flores na caixa são arranjadas com amor e atenção aos detalhes, proporcionando uma experiência única e memorável para quem as recebe."/>
        <Card className={styles.card} title="Presenteie quem você ama com nossa cesta de flores" content="Surpreenda e encante quem você ama com nossa exclusiva cesta de flores. Cada cesta é cuidadosamente arrumada, contendo não apenas flores deslumbrantes, mas também um hidratante corporal de qualidade, um vinho selecionado e deliciosos biscoitos." />
        <Card className={styles.card} title="Presenteie quem você ama com nosso buquê de flores e caixa de chocolates" content="Surpreenda e encante com a combinação perfeita de um buquê de flores deslumbrantes e uma deliciosa caixa de chocolates. Cada buquê é cuidadosamente arranjado para capturar a beleza e a essência das flores, enquanto a caixa de chocolates premium oferece uma experiência saborosa."/>
        </div>
        <aside className={styles.aside}>
            <div className={styles.flower}>
                <img src="https://i.pinimg.com/736x/f6/ee/10/f6ee105825faa80820ab48daa40af9a7.jpg" alt="flower" />
            </div>
        </aside>
        </main>
        <Footer />
    </div>
    )
}