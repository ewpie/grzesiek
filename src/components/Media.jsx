
export default function Media({ medias }) {

    return (
        <div className="align-center">
            <div className="site-wrap border-top">
                <ul className="media-list">
                    {medias.map((media, index) => (
                        <li key={index} className="media-item">
                            <a href={media.href} target="_blank" rel="noopener noreferrer">
                                <img src={media.src} alt={`Media ${index + 1}`} className="media-img" />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}   