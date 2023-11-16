// Kravspecifikation: När användaren klickar på en knapp ska en Shakespeare
// förelämpning slumpas och visas. När användaren klickar på knappen ska en
// ny förelämpning slumpas. Innan användaren har klickat för första gången på
// knappen så ska ingen förelämpning visas utan det ska stå "insult me!"

import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import InsultGenerator from './InsultGenerator.tsx';

describe('Component > InsultGenerator', () => {
  it(`By default the insult should display nothing`, async () => {
    render(<InsultGenerator />);

    const insult = screen.getByText((content, element) => {
      return element!.tagName.toLowerCase() === 'p' && content === '';
    });

    expect(insult).toHaveTextContent('');
  });

  it(`Randomize insult`, async () => {
    render(<InsultGenerator />);

    const insult = screen.getByText((content, element) => {
      return element!.tagName.toLowerCase() === 'p' && content === '';
    });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(insult).not.toHaveTextContent('');
  });
});
