# gatsby-monorepo

This is 2 gatsby sites sharing 1 yarn workspace. This means there is only 1 `.yarn/cache` folder and they can share things like tsconfig, babel, prettier, eslint, jenkins pipelines, etc...

Each folder has it's own build and development steps, and there is a shared folder that both sites can access.

The 2 sites link to each other (you can use an environment variable to set the base path). Links across apps are not in app navigation and will do a full reload of the page.
