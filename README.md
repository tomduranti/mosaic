# Mosaic

### Project

Web application where users explore movies and TV shows, get detailed information about them, and bookmark them. Built with React and the TMDB API.
  
### Built with

- RESTful API
- React 18 & Vite
- React Router v6
- Storybook
- Semantic HTML5
- Modular Sass, BEM, and responsive & adaptive design
- Mobile-first workflow
- WCAG/ARIA compliant, keyboard navigable
- Cross-browser compatibility (Chrome, Edge, Safari, Opera, Firefox, IE)

### Screenshot (live site: [mosaic](https://tomduranti.github.io/mosaic/))

![](./_resources/mosaic_demo.gif)

### Code highlights

- [single token system, one source of truth](https://github.com/tomduranti/mosaic/blob/cdac8fb834651e6600f63251615810069b0677bc/src/sass/abstract/_variables.scss#L52-L54) to make styles reusable, consistent, and scalable.  Named variables enhance code readibility, and possibly reduce the need of magic numbers
```
$gap_inline_control--xsm: map.get($spacing, 8);
$gap_inline_control--sm: map.get($spacing, 16);
$gap_inline_control--md: map.get($spacing, 24);
```

- [defensive fetch API call](https://github.com/tomduranti/mosaic/blob/cdac8fb834651e6600f63251615810069b0677bc/src/utils/getDataFromApi.js#L52-L55) with an early return to handle latency or 404, gracefully. The nullish coalescing operator hanldes both arrays or objects
```
  return await fetch(url, options)
    .then(res => res.json())
    .then(res => functionWrapper(res.results ?? res))
    .catch(err => console.error(err));
```

- [Single-Page Application + URL parameter fetching](https://github.com/tomduranti/mosaic/blob/cdac8fb834651e6600f63251615810069b0677bc/src/App.jsx#L44), with React Router offers a seamless page change. Parameters are always and easily retrievable. Use of nested routes and Outlets 
```
<Route path=':type/:id' element={<Details />} />
```

- fully navigabile page with a [screen reader](https://github.com/tomduranti/mosaic/blob/cdac8fb834651e6600f63251615810069b0677bc/src/components/organisms/ContentGrid/ContentGrid.jsx#L57-L63), with visually hidden links to jump between internal sections of the page so users can past jump items they're not interested in
```
{idSkipToSection && idJumpBackToSection ? (
    <a
    className="display_contents"
    href={`#${idSkipToSection}`}
    aria-label="skip to the next section"
    ></a>
) : null}
```

- file organisation with atomic-style structure, Storybook stories to visualize each component in isolation, and modularized sass to restrict scope to the component
```
src/
├── components/
│   ├── atoms/
│   │   └── MediaCard/
│   │       ├── atom.jsx
│   │       ├── _atom.module.scss
│   │       └── atom.stories.jsx
│   ├── molecules/
│   └── organisms/
│
...
```

- use of [responsive grid](https://github.com/tomduranti/mosaic/blob/cdac8fb834651e6600f63251615810069b0677bc/src/sass/base/_App.module.scss#L93-L95) to adjust to any screen size, avoiding rigid media querie jumps
```
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(130px, 200px), 1fr));
  gap: $gap_inline_control--sm;
}
```

- use of [semantic visually hidden h1](https://github.com/tomduranti/mosaic/blob/cdac8fb834651e6600f63251615810069b0677bc/src/pages/Home/Home.jsx#L39-L41) but available to screen readers hence providing document structure without affecting the layout
```
<h1 className='hidden' aria-label='Home page'>Home page</h1>
```

- [aria-label](https://github.com/tomduranti/mosaic/blob/cdac8fb834651e6600f63251615810069b0677bc/src/components/organisms/ContentGrid/ContentGrid.jsx#L66-L72) on each item give all relevant info instantly so that users using Assistive technology can choose whether to click or pass
```
<li
    className={stylesHome.carousel__item}
    key={item.id}
    role="group"
    aria-roledescription="Movie or TV show card"
    aria-label={item.title || item.name}
>
```
---
## Changelog
All notable changes to this project will be documented in this file. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/).

#### [v1.0.0] — 23-05-2026
- Browse trending/upcoming, and popular movies and TV shows via TMDB API
- View details, ratings, genre, and trailers for any title
- Bookmark items, persisted in localStorage (no account required)
- Fully keyboard-navigable and screen-reader compliant (WCAG/ARIA)

## Roadmap

#### [v1.1.0] — Unreleased
![ADDED](https://img.shields.io/badge/ADDED-green)
- more pagination results, replacing the current single-page fetch
- unit and integration tests via Jest; E2E via Playwright; these tests will be expanded in future releases

#### [v1.2.0] — Unreleased
![ADDED](https://img.shields.io/badge/ADDED-green)
- streaming providers like Prime Video or Netflix to redirect users and watch the full content on external platforms
- genre- and actor-targeted suggestions related to the selected media

#### [v2.0.0] — Unreleased
![ADDED](https://img.shields.io/badge/ADDED-green)
- authentication workflow to create user accounts and allow for cross-device usage

![CHANGED](https://img.shields.io/badge/CHANGED-blue)
- the bookmark page will continue to work seamlessly, but under the hood it's pulling bookmarked items from the TMDB account created in [v2.0.0]
