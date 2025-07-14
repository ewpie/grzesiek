import awardIcon from '../assets/awardIcon.png'

export default function MovieAward({ awardTitle }) {
    return (
        <li className="movie-award">
            <img src={awardIcon} className="movie-award-icon" alt="" />
            <p className="movie-award-title">{awardTitle}</p>
        </li>
    )
}