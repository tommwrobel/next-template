import styles from "./page.module.css";
import useTranslation from "next-translate/useTranslation";

const Home = () => {
  const { t } = useTranslation("home");

  return (
    <main className={styles.main}>
      <h1>{t("PAGE_TITLE")}</h1>
      <p>{t("PAGE_DESCRIPTION")}</p>
    </main>
  );
};

export default Home;
