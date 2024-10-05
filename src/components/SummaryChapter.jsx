const SummaryChapter = ({ title, actionsSummary }) => {
    return (
        <section className="summary">
            <h2>{title}</h2>
            <ul>
                {actionsSummary.map((action, index) => (
                    <li key={index}>{action}</li>
                ))}
            </ul>
        </section>
    );
};

export default SummaryChapter;
