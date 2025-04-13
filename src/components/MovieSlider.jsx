import { useState, useEffect } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function MovieSlider({ photos }) {

    const [mainPhotoId, setMainPhotoId] = useState(0);
    const [sliderTransitionTime, setSliderTransitionTime] = useState(2);


    const [toggleDirection, setToggleDirection] = useState(null);

    const lastSlide = photos.length - 2;


    const [slideWidth, setSlideWidth] = useState(1024);

    useEffect(() => {
        function updateSlideWidth() {
            const screenWidth = window.innerWidth;
            setSlideWidth(screenWidth > 680 ? 1024 : 680);
        }

        updateSlideWidth();

        window.addEventListener("resize", updateSlideWidth);
        return () => window.removeEventListener("resize", updateSlideWidth);
    }, []);


    useEffect(() => {
        if (toggleDirection === null) return;

        setSliderTransitionTime(0);
        setMainPhotoId(toggleDirection === "right" ? -2 : lastSlide);

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {

                setSliderTransitionTime(2);
                setMainPhotoId(toggleDirection === "right" ? -1 : lastSlide - 1);
                setToggleDirection(null);
            });
        });
    }, [toggleDirection]);

    function leftClickHandler() {
        if (mainPhotoId === -2) {
            setToggleDirection("left")
        }
        else {
            setSliderTransitionTime(2);
            setMainPhotoId((old) => {
                return (old - 1);
            })
        }
    }


    function rightClickHandler() {
        if (mainPhotoId === lastSlide) {
            setToggleDirection("right")
        }
        else {
            setSliderTransitionTime(2);
            setMainPhotoId((old) => {
                return old + 1
            })
        }


    }


    return (
        <div className="movie-slider">
            <div className="slides" style={{ transform: `translateX(${mainPhotoId * (-slideWidth)}px)`, transition: `transform ${sliderTransitionTime}s` }}>
                <div className={(mainPhotoId === -3) ? `slide current` : `slide`} data-id={-3}>
                    <div className="slide-image" style={{ backgroundImage: `url(${photos[photos.length - 3].src})` }}></div>
                </div>
                <div className={(mainPhotoId === -2) ? `slide current` : `slide`} data-id={-2}>
                    <div className="slide-image" style={{ backgroundImage: `url(${photos[photos.length - 2].src})` }}></div>
                </div>
                <div className={(mainPhotoId === -1) ? `slide current` : `slide`} data-id={-1}>
                    <div className="slide-image" style={{ backgroundImage: `url(${photos[photos.length - 1].src})` }}></div>
                </div>
                {photos.map((photo, index) => {
                    let classList = "slide"
                    if (mainPhotoId === photo.id) {
                        classList += " current"
                    }


                    return (
                        <div className={classList} data-id={photo.id} key={index}>
                            <div className="slide-image" style={{ backgroundImage: `url(${photo.src})` }}></div>
                        </div>
                    )
                })
                }
            </div>
            <button className="btn-left" id="btn-left" onClick={leftClickHandler}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className="btn-right" id="btn-right" onClick={rightClickHandler}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>

        </div>
    )
}