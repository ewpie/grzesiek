export default function PhotoSlider({ id, src, place }) {

    const classList = "slide " + { place }
    return (
        <div className={classList} data-id={id}>
            <div className="slide-image" style={{ backgroundImage: { src } }}></div>
        </div>
    )
}