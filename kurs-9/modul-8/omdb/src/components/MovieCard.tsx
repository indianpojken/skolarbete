interface Props {
  title: string;
  year: string;
  imdb: string;
  poster: string;
}

export default function MovieCard({ title, year, imdb, poster }: Props) {
  return (
    <li>
      <section>
        {poster === 'N/A' ? <p>N/A</p> : <img alt="Poster" src={poster} />}
        <a href={'https://www.imdb.com/title/' + imdb}>IMDb</a>
      </section>

      <section>
        <h2>
          {title} <span>({year})</span>
        </h2>
      </section>
    </li>
  );
}
