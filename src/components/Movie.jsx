import MovieAward from './MovieAward';
import MovieSlider from './MovieSlider';

export default function Movie({ movieData, photos }) {
    const awards = movieData.awards
    return (
        <div className="movie-wrap">
            <MovieSlider photos={photos}></MovieSlider>
            <div className="movie-bottom align-center">
                <div className="site-wrap">
                    <div className="movie-left">
                        <h2 className="movie-title">{movieData.movieTitle}</h2>
                    </div>
                    <div className="movie-right movie-subtitles">
                        <p className="movie-subtitle">{movieData.movieSubtitle}</p>
                        <p className="movie-subtitle">{movieData.production}</p>
                        <p className="movie-subtitle">{movieData.duration}</p>
                    </div>
                </div>
                <div className="site-wrap">
                    <div className="movie-left">
                        <ul className="movie-awards">
                            {awards.map((award, index) => (
                                <MovieAward key={index} awardTitle={award}></MovieAward>
                            ))}
                        </ul>

                    </div>
                    <div className="movie-right">
                        <p className="movie-description">{movieData.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}