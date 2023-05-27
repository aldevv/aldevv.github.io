/** @type {import('tailwindcss').Config} */
module.exports =
  {
    content:
      [
        "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
      ],
    theme:
      {
        extend:
          {
            backgroundImage:
              {
                mybg: "url(./src/assets/bg.jpg)",
                // mybg: "url(./src/assets/placeholder.jpg)",
              },
            scale:
              {
                175: "1.75",
                185: "1.85",
                195: "1.95",
              },
          },
      },
    plugins:
      [],
  };
