# 📄 Portfolio Resume

Portfolio Resume is a web application designed to help users effortlessly create professional CVs and portfolios. With a user-friendly interface, users can input their personal information, work experience, education, skills, and other relevant details. The app then generates a well-formatted CV and portfolio, ready to be downloaded or shared online.

Whether you are a job seeker, freelancer, or professional, Portfolio Resume provides all the tools you need to create an outstanding CV and portfolio.

## 🚀 Features

- ✅ **Customizable Templates** – Choose from a variety of professional templates to match your style and industry.
- ✅ **Real-time Preview** – Instantly see how your CV and portfolio will look as you edit.
- ✅ **Easy Editing** – Modify your information anytime, with instant updates.
- ✅ **Multiple Export Options** – Download your CV and portfolio in PDF, Word, or HTML formats.
- ✅ **Secure Storage** – Your data is safely stored and accessible from any device.

## 🛠️ Tech Stack

| Technology | Description          |
| ---------- | -------------------- |
| Frontend   | React          |
| Backend    | Node & Express |
| Database   | MongoDB              |

## 🎯 Project Goals

This project aims to:

- 🔹 Improve workflow efficiency and collaboration.
- 🔹 Follow best practices in full-stack development.
- 🔹 Enhance our experience with TypeScript, React, Node, Express, and MongoDB.

## ⚠️ Attention  
This repository is intended for **local development and testing only**. We **do not recommend** using it in a production environment.  

## 🚀 Installation & Setup  

### 🐳 Recommended: Run with Docker  
For a consistent development environment, we **highly recommend using Docker**.  

Run the following commands:  
```bash
docker-compose build --no-cache
docker-compose up
```
### 💻 Alternative: Run Without Docker
If you prefer running the code directly on your machine, use the following commands:
```
npm install
npm run dev
```
## 🤝 Collaboration Convention

### 🔀 Branch Guidelines

When creating a branch, use one of the following prefixes to categorize your work:

| Prefix   | Purpose                               |
| -------- | ------------------------------------- |
| feature/ | Developing new features               |
| bugfix/  | Fixing bugs                           |
| hotfix/  | Addressing critical production issues |
| docs/    | Updating documentation                |

**Example Branch Names:**

```git
feature/T-456-user-authentication
bugfix/T-789-fix-header-styling
hotfix/T-321-security-patch
docs/T-654-update-readme
```

### 📝 Commit Guidelines

Use the following commit message types to ensure clarity and consistency:

| Commit Type | Description                                                               | Example                                              |
| ----------- | ------------------------------------------------------------------------- | ---------------------------------------------------- |
| build       | Changes affecting build configuration, dependencies, or development tools | `build: update npm dependencies`                     |
| chore       | Updates to auxiliary tools or configurations                              | `chore: update eslint config`                        |
| docs        | Documentation-only changes                                                | `docs: update README with installation instructions` |
| feat        | Adding a new feature (triggers a MINOR version bump)                      | `feat: add user authentication`                      |
| fix         | Bug fixes (triggers a PATCH version bump)                                 | `fix: resolve issue with login redirect`             |
| perf        | Performance improvements                                                  | `perf: optimize database query`                      |
| refactor    | Code restructuring without changing functionality                         | `refactor: simplify authentication logic`            |
| style       | Formatting, indentation, or stylistic changes                             | `style: reformat code for better readability`        |
| test        | Adding or modifying tests                                                 | `test: add unit tests for login`                     |

**Example Commit Messages:**

```bash
feat: add user authentication
fix: resolve issue with login redirect
docs: update README with installation instructions
perf: improve database query efficiency
style: reformat code for better readability
```

## 📌 How to Contribute

1. Fork the repository.
2. Create a new feature branch:
   ```bash
   git checkout -b feature/new-feature
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "feat: describe your change"
   ```
4. Push the changes:
   ```bash
   git push origin feature/new-feature
   ```
5. Open a Pull Request and describe your changes.

## 📜 License

This project is licensed under the MIT License.

## ✨ Contributors

Thanks to everyone contributing to this project! 😊

If you have any questions or suggestions, feel free to reach out. 🚀
