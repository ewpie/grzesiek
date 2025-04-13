import MovieAward from './MovieAward';
import MovieSlider from './MovieSlider';

export default function Movie({ movieData, photos }) {
    const awards = movieData.awards
    return (
        <div className="movie-wrap">
            <MovieSlider photos={photos}></MovieSlider>
            <div className="movie-bottom align-center">
                <div className="movie-text-wrap site-wrap">
                    <div className="movie-text">
                        <h2 className="movie-title">{movieData.movieTitle}</h2>
                        <p className="movie-subtitle">{movieData.movieSubtitle}</p>
                        <p className="movie-subtitle">{movieData.production}</p>
                        <p className="movie-subtitle">{movieData.duration}</p>
                    </div>
                    <div className="movie-description">
                        <p>{movieData.description}</p>
                    </div>
                </div>
                <div className="movie-icons site-wrap">
                    {awards.map((award, index) => (
                        <MovieAward key={index} awardTitle={award.title} awardSubtitle={award.subtitle} awardImg={award.src}></MovieAward>
                    ))}
                </div>
            </div>
        </div>
    )
}