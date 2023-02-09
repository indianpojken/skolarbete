import './Insults.css';

function Insults({ insults }) {
  return (
      <article className="insults">
        <section className="insults__list">
          <ol>
            {insults.reverse().map((insult, i) =>
              <li key={i}>
                <p>{insult.quote}</p>
                <p>- {insult.play}</p>
              </li>
            )}
          </ol>
        </section>
      </article>
  )
}

export default Insults;
