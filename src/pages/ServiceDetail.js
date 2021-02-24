import React from "react";
import Image1 from "../images/Serveis/fitxa-servei-img.jpg";
import styles from "./ServiceDetail.module.scss";
import ServeiDetall from "../components/ServeiDetall.js";
import userImg from "../images/FitxaServei/profile-pic.jpg";

const ServiceDetail = () => {
    return (
        <>
        <div className={styles.containerFlex}>
        <ServeiDetall
        userImage={userImg}
        userImageAlt="Descripció imatge 2"
        name="Joanp9"
        about="Ofereixo classes d'alemany..."
        numValoracions="3"
        title="Professor particular"
        categoria="classes particulars"
        tags= "classes"
        description="Sed vehicula ex nec enim mattis, condimentum ullamcorper nibh interdum. Maecenas ultricies urna sed purus interdum, eget semper ante ultricies. Fusce fermentum vel purus sed finibus. Nunc varius posuere sodales. Vestibulum fringilla dolor ut vulputate condimentum. Aenean tincidunt magna sed libero condimentum, eu faucibus ex finibus. Mauris ultrices iaculis massa sit amet scelerisque. Sed consectetur iaculis pellentesque. Nam ut felis ut massa vulputate condimentum at quis arcu. Vivamus scelerisque elit et nunc blandit, vel cursus sem venenatis. Nullam vehicula odio at ex malesuada, quis vestibulum odio imperdiet."
        image={Image1}
        imageAlt="Descripció imatge 1"
        barri="Poblenou"
        ciutat="Barcelona"
        data ="01/01/2021"
        />
        </div>
        </>
        );
    };
    
    export default ServiceDetail;