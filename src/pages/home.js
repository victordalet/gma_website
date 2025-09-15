import React from "react";
import {button_click__dataLayer, init_page__dataLayer} from "../module/dataLayer";
import {Mouse} from "../component/mouse";
import {Footer} from "../component/footer";

export class Home extends React.Component {

    constructor(props) {
        super(props);
        init_page__dataLayer("HOME");
        setTimeout(() => {
            //this.animation_scroll();
        }, 200);
    }

    animation_scroll() {
        const nb_slide_total = 5
        let sliding_list = [];
        for (let nb_slide = 1; nb_slide <= nb_slide_total; nb_slide++) {
            sliding_list.push(document.querySelector('.slide' + nb_slide.toString()));
        }
        const multiplicative = 0.6;
        window.addEventListener('scroll', () => {
            const {scrollTop, clientHeight} = document.documentElement;
            let topElementToTopViewport = [];
            for (let nb_slide = 0; nb_slide < nb_slide_total; nb_slide++) {
                topElementToTopViewport.push(sliding_list[nb_slide].getBoundingClientRect().top);
            }

            for (let nb_slide = 0; nb_slide < nb_slide_total; nb_slide++) {
                if (scrollTop > (scrollTop + topElementToTopViewport[nb_slide]).toFixed() - clientHeight * multiplicative) {
                    sliding_list[nb_slide].classList.add('active' + (nb_slide + 1).toString());
                }
            }

        })
    }


    render() {
        return (<div>
                <Mouse/>
                <div className={"container-home container-home-page"}>
                    <h1><img alt={"logo"}
                             src={process.env.PUBLIC_URL + "/logo.png"}/>
                    </h1>
                    <h2
                        style={{
                            marginTop: "100px",
                        }}
                    >LABO IABD- Project GMA</h2>
                    <h2
                        onClick={() => {
                            window.open("https://github.com/victordalet/ai_to_old_car.git", "_blank");
                        }}
                        style={{marginTop: "5%", cursor: "pointer"}}
                    >GITHUB</h2>
                </div>
                <div className={"container-home-page container-description"}>
                    <h2>Example of result</h2>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/O62c3HY-GK4?si=Q3RYDvPm_lzIVaEE"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                </div>
                <div className={"container-home-page container-description"}>
                    <h2>Robotic Arm</h2>
                    <h3>Our first idea was to raise or lower a stick on the steering wheel to move it, but the
                        Servo-motor does not have enough power.<br/> Finally, we use a system of pulleys connected to
                        strings on either side of the steering wheel, which
                        allows the arm to pull the string and turn the car to one side (so there are 2 for the left
                        and right).</h3>
                    <div className={"short-video"}>
                        <video width="560" height="315" controls>
                            <source src="arm_test_1.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <video width="560" height="315" controls>
                            <source src="arm_test_2.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className={"container-home-page container-description"}>
                    <h2>Warning Buzzer</h2>
                    <h3>In order to make the project more useful and easier to install, we decided to install a Jetson
                        equipped with a buzzer designed to sound different alerts.
                        This idea also came to us from this short documentary: <a
                            href={"https://www.youtube.com/watch?v=pj9NStn1q3w"}>https://www.youtube.com/watch?v=pj9NStn1q3w</a>
                    </h3>
                    <div className={"short-video"}>
                        <video width="560" height="315" controls>
                            <source src="buzzer.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>


                </div>
                <div className={"container-home-page container-description"}>
                    <h2>Obstacle Alerting</h2>
                    <h3>Sends an alert in case of an obstacle on the road, using a depth estimation algorithm + speed
                        estimation to avoid triggering the alert at any time.
                    </h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/yXdid9wDtj8?si=BuMJWLM9dLATsOKT"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>

                </div>
                <div className={"container-home-page container-description"}>
                    <h2>Red light Alerting</h2>
                    <h3>We also send an alert in the event of a red light that is not detected. To do this, we look at
                        the speed of the vehicle and detect a red light and its color in order to decide whether or not
                        the alert should be detected.
                    </h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/39ARogDaVtA?si=rvbqZRZ3_CqLcEN2"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>

                </div>
                <div className={"container-home-page container-description"}>
                    <h2>Road detection model</h2>
                    <h3>The objective is on a layer of the detection of a person to have our vehicle replaced
                        On the road if we will go outside.</h3>
                    <h3>The original video (without detection) was found on the internet, it is not our production</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/IISaaSYAYP8?si=g8JvP2119KjIYX-w"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                </div>
                <div className={"container-home-page container-description"}>
                    <h2>Yolo - Object Detection.</h2>
                    <h3>The objective is detection of potential obstacles and to turn in their direction to overturn the
                        road</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/KFJhVgYn6l4?si=7hEHcuQ3yuWehx6m"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                </div>
                <div className={"container-home-page container-description"}>
                    <h2>CNN - Smart Driving</h2>
                    <h3>With tensorflow, we create a cnn of two images (one at time T, and one at time T + n). We enter
                        this
                        model using our videos, the aim being to make our algorithm understand when we should turn or
                        move
                        forward without direct information (without knowing where an obstacle is, for example).</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/6-26u5P5S_c?si=6I3hj8C02tQNYvHJ"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                </div>
                <div className={"container-home-page container-description"}
                     style={{
                         height: "100vh",
                     }}
                >
                    <h2>MIDAS - Depth Estimation</h2>
                    <h3>The integration of midas allows us to detect the distance of objects on the road.</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/EEfUyPQKcl4?si=sTYJ_Tt4ds4jSeAY"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                </div>
                <Footer/>
            </div>
        )
            ;
    }
}
