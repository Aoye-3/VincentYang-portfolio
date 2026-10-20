# Chroma Current

Source: the licensed React Bits Pro component pasted by the user on 2026-10-15.
The component is used with `<ChromaCurrent />`, without prop overrides.
The supplied implementation is unchanged except its `cn` import points to the
small local class-name helper. Its six layout utilities are scoped in
`hero-atmosphere.css`; the static site does not load a global Tailwind reset.

`src/hero-background.tsx` mounts React only inside the decorative background.
It passively forwards pointer events to that layer so the default stirring and
plume interactions work while the layer remains pointer-transparent. Original
links/buttons keep their own events and do not release dye.

Build: `npm ci` then `npm run build:background`. The build writes a local browser
bundle and dependency license notices into `assets/generated/`, then updates
the two background asset hashes in `index.html`. The existing Python static
server can continue serving the site without an additional runtime server.

React Bits component code remains subject to its original license. Dependency
license text is included in `assets/generated/THIRD-PARTY-LICENSES.txt`.
