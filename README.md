# MIT AI Morning Briefing Dashboard

Static, accessible dashboard for the MIT AI Morning Briefing.

## Local Use

Open `index.html` in a browser. The dashboard is self-contained and does not require a dev server.

## GitHub Pages

This folder is ready to publish as a standalone GitHub Pages repository.

1. Create an empty GitHub repository.
2. From this folder, initialize Git and push to the new repo:

   ```bash
   git init
   git branch -M main
   git add .
   git commit -m "Publish MIT AI morning briefing dashboard"
   git remote add origin https://github.com/YOUR-USER/YOUR-REPO.git
   git push -u origin main
   ```

3. In GitHub, open `Settings -> Pages`.
4. Set `Build and deployment -> Source` to `GitHub Actions`.
5. Open the `Actions` tab and run or wait for `Deploy GitHub Pages`.

Your live dashboard URL will usually be:

```text
https://YOUR-USER.github.io/YOUR-REPO/
```

If this folder is placed inside a larger repository instead, change the `path` value in `.github/workflows/deploy-pages.yml` to this folder path.
