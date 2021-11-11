# Personal Website

This is my personal website. The source code contains mainly plain HTML. Maybe I'll switch it up in the future.

## Development
- Run `docker-compose up`
- Visit https://localhost:8000

## Production
- Make changes
- Run `docker exec -it personal_website_client bash`
- Run `npm run generate && cp CNAME ./dist`
- Run `exit`
- Commit and push everything
- Run `git subtree push --prefix dist origin gh-pages`
- Visit https://thijs-schalk.com
