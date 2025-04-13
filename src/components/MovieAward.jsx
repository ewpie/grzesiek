export default function MovieAward({ awardTitle, awardSubtitle, awardImg }) {
    return (
        <div className="award-icon">
            <img src={awardImg} className="award-icon-img" alt="" />
            <p className="award-title">{awardTitle}</p>
            <p className="award-subtitle">{awardSubtitle}</p>
        </div>
    )
}