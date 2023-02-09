import { DisplayBooks } from '../components/DisplayBooks';

import Books from '../assets/childrensbooks.json';

function Index() {
  return (
    <main className="bg--light center">
      <DisplayBooks books={Books} />
    </main>
  );
}

export { Index };
