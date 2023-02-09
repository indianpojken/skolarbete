import './AddInsult.css'

function AddInsult({ setInsult }) {
  return (
    <article className="add-insult">
      <input type="text" name="quote" required />

      <input type="text" name="play" required />
    </article>
  )
}

export default AddInsult;
