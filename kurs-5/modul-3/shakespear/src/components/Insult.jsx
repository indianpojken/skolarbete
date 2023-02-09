import './Insult.css'

function Insult({ quote, play, onClick }) {
  return (
    <article className="insult">
      <blockquote>
        <p className="insult__quote">
          {quote}
        </p>
      </blockquote>
      <cite className="insult__play">
        {play}
      </cite>
      <button className="insult__get-insult" onClick={onClick}>
        Insult me!
      </button>
    </article>
  )
}

export default Insult;
