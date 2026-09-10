import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import fs from "fs";
import path from "path";

function extractImagesPlugin() {
  return {
    name: "extract-base64-images",
    buildStart() {
      const htmlPath = path.resolve(__dirname, "in.html");
      const outputDir = path.resolve(__dirname, "public", "images");

      if (!fs.existsSync(htmlPath)) return;

      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      const html = fs.readFileSync(htmlPath, "utf8");
      const regex = /src=["'](data:image\/(png|jpeg|jpg|webp|svg\+xml);base64,([^"']+))["']/g;

      let match;
      let count = 0;
      const imageMap = [];

      while ((match = regex.exec(html)) !== null) {
        count++;
        const mimeType = match[2];
        const base64Data = match[3];

        let ext = "png";
        if (mimeType.includes("jpeg") || mimeType.includes("jpg")) ext = "jpg";
        else if (mimeType.includes("webp")) ext = "webp";
        else if (mimeType.includes("svg")) ext = "svg";

        const fileName = `img_${count}.${ext}`;
        const filePath = path.join(outputDir, fileName);
        const buffer = Buffer.from(base64Data, "base64");

        fs.writeFileSync(filePath, buffer);

        imageMap.push({
          index: count,
          fileName,
          publicPath: `/images/${fileName}`,
          size: buffer.length,
        });
      }

      console.log(`[Vite Plugin] Extracted ${count} images from in.html to public/images/`);
      fs.writeFileSync(
        path.join(outputDir, "image_map.json"),
        JSON.stringify(imageMap, null, 2)
      );
    },
  };
}

export default defineConfig({
  plugins: [extractImagesPlugin(), tailwindcss(), react()],
  server: {
    historyApiFallback: true,
  },
  preview: {
    historyApiFallback: true,
  },
});
