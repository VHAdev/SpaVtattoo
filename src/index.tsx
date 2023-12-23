import { Animator, Fade, FadeIn, Move, MoveIn, MoveOut, ScrollContainer, ScrollPage, Sticky, StickyIn, ZoomIn, batch } from "react-scroll-motion";
import Gallery from "./components/Gallery";
import './App.css';
import './scrolldown.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/Contact";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn())


function Homepage() {
    return (
        <>
            <ScrollContainer>
                <ScrollPage className="page1">
                    <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
                        <div className="icon-scroll">
                            <p>
                                scroll down
                            </p>
                        </div>
                    </Animator>
                </ScrollPage>
                <ScrollPage className="page2">
                    <Animator animation={ZoomInScrollOut}>
                        <div>
                            <img className="sigil" src="assets/sigil.png" alt="" srcset="" />
                        </div>
                        <div>
                            <h2>V Tattoo Studio</h2>
                        </div>
                    </Animator>
                </ScrollPage>

                <div className="gallery">
                    <Gallery />
                </div>

                <ScrollPage>
                    <div className="contact">
                        <h2>
                            <Animator animation={batch(Fade(), Sticky(50, 70))}>
                                <Contact />
                            </Animator>
                        </h2>
                    </div>
                </ScrollPage>
            </ScrollContainer>
        </>
    )
}

export default Homepage