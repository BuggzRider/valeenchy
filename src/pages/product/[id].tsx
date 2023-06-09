import ProductImage from "components/ProductImage";
import ProductInfo from "components/ProductInfo";
import LayoutContext from "context/layoutContext/layout-context";
import Head from "next/head";
import { useContext } from "react";
import styles from "styles/pageStyles/product.styles.module.scss";
import { productData } from "./mockdata";

export default function Home() {
  const { homePageConfig } = useContext(LayoutContext);
  return (
    <div className={styles.productPageContainer}>
      <Head>
        <title>Valeenchy</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.productPageSectionContainer}>
        <div className={styles.productInfoWrapper}>
          <ProductImage imagesArray={productData.imageUrl} />
          <ProductInfo productInfoData={productData} />
        </div>
      </section>
    </div>
  );
}
