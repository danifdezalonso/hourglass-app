import React from "react";
import Image1 from "../images/Serveis/personal-teacher.jpg";
import styles from "./ServiceDetail.module.scss";
import ServeiDetall from "../components/ServeiDetall.js";
import user from "../images/Icon/user.svg";

const ServiceDetail = () => {
    return (
        <>
        <h1>Sobre el Servei</h1>
        <div className={styles.containerFlex}>
        <ServeiDetall
        userImage={user}
        userImageAlt="Descripció imatge 2"
        name="Joanp9"
        about="Ofereixo classes d'alemany..."
        numValoracions="3"
        title="Professor particular"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, doloremque nobis, quae necessitatibus dolorem quas illo non minima possimus quibusdam repellendus deserunt odit explicabo."
        image={Image1}
        imageAlt="Descripció imatge 1"
        barri="Poblenou"
        ciutat="Barcelona"
        />
        </div>
        </>
        );
    };
    
    export default ServiceDetail;