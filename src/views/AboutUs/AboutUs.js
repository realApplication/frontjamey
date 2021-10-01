import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";


import styles from "../../assets/jss/material-kit-react/views/landingPage";
import './aboutus.css'
import image from "../../assets/img/landing-bg.jpg";

//assets/img/bg7.jpg src/assets/img/landing-bg.jpg
const useStyles = makeStyles(styles);

export default function LoginPage(props) {
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function () {
        setCardAnimation("");
    }, 700);
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <>
            <div className="bodyAboutus">
                <Header
                    absolute
                    color="transparent"
                    brand="Jam3y Website"
                    
                    rightLinks={<HeaderLinks />}
                    {...rest}
                />
                <div
                    className={classes.pageHeader}
                    style={{
                        backgroundImage: "url(" + image + ")",
                        backgroundSize: "cover",
                        backgroundPosition: "top center",
                    }}
                >

                </div>
                <div className={classes.container}>
                    <article class="flow">
                        <h1>Our Team</h1>
                        <p>Hover or focus over each card to see the person’s job title slide in and the colour treatment change.</p>
                        <div class="team">
                            <ul class="auto-grid" role="list">
                                <li>
                                    <a href="https://github.com/samahAbujwaied" target="_blank" class="profile">
                                        <h2 class="profile__name">Samah Abujwaied</h2>
                                        <p>Computer Scince</p>
                                        <img alt="Samah Abujwaied" src="https://avatars.githubusercontent.com/u/64910804?v=4" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/MayyadahShehadeh" target="_blank" class="profile">
                                        <h2 class="profile__name">Mayyadah Shehadeh</h2>
                                        <p>MIS</p>
                                        <img alt="Mayyadah Shehadeh" src="https://i.ibb.co/M2yNjVG/mayada.jpg" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/Qasem-moh" target="_blank" class="profile">
                                        <h2 class="profile__name">Qasem Mohammad </h2>
                                        <p>Technical Lead</p>
                                        <img alt="Qasem Mohammad" src="https://avatars.githubusercontent.com/u/75634309?v=4" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/thaerbraizat" target="_blank" class="profile">
                                        <h2 class="profile__name">Thaer Braizat</h2>
                                        <p>Designer</p>
                                        <img alt="Thaer Braizat" src="https://avatars.githubusercontent.com/u/81148935?v=4" />
                                    </a>
                                </li>

                                <li>
                                    <a href="https://github.com/Hasan-droid" target="_blank" class="profile">
                                        <h2 class="profile__name">Hasan Baydoun</h2>
                                        <p>Developer</p>
                                        <img alt="Hasan Baydoun" src="https://avatars.githubusercontent.com/u/54712715?v=4" />
                                    </a>
                                </li>

                            </ul >
                        </div >
                    </article >
                </div >
            </div >
        </>

    );
}
