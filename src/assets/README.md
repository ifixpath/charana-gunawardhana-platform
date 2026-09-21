# Assets

Reserved locations for local, bundled assets. Real files are added in later checkpoints.

- `images/charana/` — photography of Charana Gunawardhana
- `images/` — general site imagery
- `logos/` — brand marks and wordmarks
- `icons/` — custom SVG icons

Import assets through the `@` alias so paths stay stable when files move:

```ts
import portrait from '@/assets/images/charana/portrait.jpg'
```
