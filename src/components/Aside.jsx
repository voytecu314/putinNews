const Aside = ({data, range}) => {
    return (
        <aside>
            <p><a href={data.results && data.results.articles[range].url} target="blank">{data.results && data.results.articles[range].title}</a></p>
            <p><a href={data.results && data.results.articles[range+1].url} target="blank">{data.results && data.results.articles[range+1].title}</a></p>
            <p><a href={data.results && data.results.articles[range+2].url} target="blank">{data.results && data.results.articles[range+2].title}</a></p>
            <p><a href={data.results && data.results.articles[range+3].url} target="blank">{data.results && data.results.articles[range+3].title}</a></p>
            <p><a href={data.results && data.results.articles[range+4].url} target="blank">{data.results && data.results.articles[range+4].title}</a></p>
        </aside>
    );
}

export default Aside;