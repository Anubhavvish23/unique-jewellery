This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Git Large File Storage (LFS)

This project uses Git Large File Storage (LFS) to manage large files. To set up Git LFS, follow these steps:

1. Install Git LFS by running the following command:
   ```bash
   git lfs install
   ```

2. Track the large files you want to manage with LFS. For example, to track `.node` files, run:
   ```bash
   git lfs track "*.node"
   ```

3. Commit the changes to the `.gitattributes` file that Git LFS creates:
   ```bash
   git add .gitattributes
   git commit -m "Track large files with Git LFS"
   ```

4. Push your changes to the repository:
   ```bash
   git push origin <branch-name>
   ```

Make sure to replace `<branch-name>` with the name of your current branch.

## Deploy on Vercel


The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
