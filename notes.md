## DESIGN process

- gather requirements
- list of resources (nouns) [song, user, pet, exercises, routines, restaurantes]
- list of endpoints (URI)
## ENDPOINTS:

- Avoid using verbs, is not a URL, it's a URI. (instead of creating p.e. create-song => /api/songs)
- Actions are expressed with http methods
-What you wanna do with the nouns... p.e:

Songs:

- create
- find a song by (filters)
- update
- delete
- paginated list (filters)
- album art

|Action               | Methods             |  Enpoint               |
|:--------------------|---------------------|------------------------|
| List Songs          | GET                 | /api/songs             |
| Create song         | POST                | /api/songs             |
| Update Song         | PATCH/PU            | /api/songs/:id         |
| Remove Song         | DELETE              | /api/songs/:id         |
| Add Song's Album art| POST/PUT            | api/songs/:id/cover    |



## Common JS module system

- import a module using: require();
- export a module using: module.exports;