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
                <h3>With tensorflow, we create a cnn of two images (one at time T, and one at time T + n). We enter this
                    model using our videos, the aim being to make our algorithm understand when we should turn or move
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
                <h2>3D Modelisation</h2>
                <h3>By mixing our different techniques, we're going to continue training our model with a 3D simulation,
                    so as to generate more data.</h3><h3>We're still working on it, we'll share the results here in a
                few
                moments. </h3> <h3>This 3D work is on another <span></span>
                <span
                    onClick={() => {
                        window.open("https://github.com/victordalet/video_game-_autonomous_driving.git", "_blank");
                    }}
                    style={{cursor: "pointer"}}
                >GITHUB</span></h3>
            </div>
            <Footer/>
        </div>)
            ;
    }
}
