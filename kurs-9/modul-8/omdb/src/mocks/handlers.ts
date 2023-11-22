import { http, HttpResponse } from 'msw';

import { data as movies } from './data.ts';

export const handlers = [
  http.get('http://www.omdbapi.com/', ({ request }) => {
    const url = new URL(request.url);
    const query = url.searchParams.get('s');

    const movie = movies.find((movie) => movie.Title === query);

    if (!movie) {
      return HttpResponse.json({ Response: 'False' }, { status: 404 });
    }

    return HttpResponse.json({
      Response: 'True',
      Search: [movie],
      totalResults: '1',
    });
  }),
];
