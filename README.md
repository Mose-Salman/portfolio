# Mostafa Salman — professional portfolio

Responsive English/German engineering portfolio, built as a small static website for GitHub Pages.

## Content

- NXP experience since February 2022, including the September 2026 move to eSE Development Operations.
- Jenkins CI/CD, Ansible, Grafana/Prometheus, PostgreSQL KPI work, and earlier PKI/HSM experience.
- Selected firmware-security, production-operations and embedded/IoT projects.
- Education, training, language skills and professional contact links.
- Public English and German résumé views, printable through the browser.

The portfolio uses the current CV and master profile for professional evidence. The ongoing Microelectronic Systems master's program comes from Mostafa's confirmed study history. Current NXP employment is accurately described as a working-student role; KPI work is described as collaborative. No employer source code, private address, family information or application records are included. The public résumés include the professional contact details present in the source CVs.

## Publish with GitHub Pages

Open **Settings → Pages** in this repository. Under **Build and deployment**, choose **Deploy from a branch**, select **main** and **/(root)**, then **Save**. No build step or dependencies are needed. GitHub will create its Pages deployment workflow.

Once GitHub reports successful deployment, the site will be available at:

https://mose-salman.github.io/portfolio/

German entry point: https://mose-salman.github.io/portfolio/?lang=de

The expected URL above is not confirmation that Pages has been enabled. The existing account homepage is a separate repository and is not changed by this project.

## Preview locally

```sh
python -m http.server 8000
```

Open http://localhost:8000/. Language switching uses `?lang=de` so that German links can be shared; it uses no cookies or local storage. Without JavaScript the complete English page and both public résumé views remain available. Fonts, portrait, scripts and styles are served locally.

## Validate

```sh
python scripts/validate.py
node --check script.js
```

GitHub Actions performs these checks on pushes and pull requests. Validation checks internal links, anchors, required assets and German translation coverage.

## Update

Edit `index.html` for the English content, `script.js` for German translations, and `styles.css` for the visual theme. Update `resume-en.html` and `resume-de.html` after a professional profile change. Keep professional claims consistent with the current CV and distinguish direct hands-on work from operational support.
