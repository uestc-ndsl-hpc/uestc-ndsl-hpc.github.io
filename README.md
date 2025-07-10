[简体中文 | Chinese README](./README_zh.md)

# UESTC NDSL HPC Team Homepage

This project is the official website for the UESTC NDSL HPC research group, led by Dr. Shaoshuai Zhang at the University of Electronic Science and Technology of China. It is built with [VitePress](https://vitepress.dev/) and focuses on High Performance Computing (HPC) and Numerical Linear Algebra.

## Project Overview

- **Team Introduction**: Led by Dr. Shaoshuai Zhang, focusing on HPC, GPGPU, and matrix computations.
- **Main Content**:
  - Team members and alumni
  - Latest publications
  - Research directions and achievements
  - Gallery

## Getting Started

### Install dependencies

```bash
npm install
```

### Start local development

```bash
npm run docs:dev
```

### Build for production

```bash
npm run docs:build
```

### Preview production build

```bash
npm run docs:preview
```

## Directory Structure

- `docs/`: Main documentation folder
  - `index.md`: Home page
  - `teams.md`: Team members
  - `pub.md`: Publications
  - `gallery.md`: Gallery
  - `.vitepress/`: VitePress config and theme
- `package.json`: Dependencies and scripts

## Main Dependencies

- [vitepress](https://vitepress.dev/): Static site generator
- [vitepress-markdown-timeline](https://www.npmjs.com/package/vitepress-markdown-timeline): Timeline plugin

## Contact

- GitHub: [https://github.com/uestc-ndsl-hpc](https://github.com/uestc-ndsl-hpc)
- Email: szhang94@uestc.edu.cn

## Homepage update log

- beautify the page of the team and the gallery
- add some components for the gallery page

## Homepage Todo

1. Provide an image hosting solution so team members can easily add themselves to the team page