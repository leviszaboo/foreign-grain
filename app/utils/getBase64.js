export async function getBase64(url) {
  const base64str = await fetch(url).then(async (res) =>
    Buffer.from(await res.arrayBuffer()).toString("base64"),
  );

  const blurSvg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 5'>
      

      <image preserveAspectRatio='none' x='0' y='0' height='100%' width='100%' 
      href='data:image/avif;base64,${base64str}' />
    </svg>
  `;

  const toBase64 = (str) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  return `data:image/svg+xml;base64,${toBase64(blurSvg)}`;
}

export async function fetchBlurDataUrls(doc, featured = false) {
  const urls = [];

  if (!featured) {
    for (let i = 0; i < doc.imageUrls.length; i++) {
      const aspectRatio = doc.imageAspectRatios?.[i] || 1;
      const width = 100;
      const height = Math.round(width / aspectRatio);
      const placeholderSrc = `${doc.imageUrls[i].split("?")[0]}?tr=w-${width},h-${height},bl-10`;
      const base64 = await getBase64(placeholderSrc);

      urls.push(base64);
    }
  } else {
    for (let i = 0; i < doc.length; i++) {
      const aspectRatio = doc[i]?.aspectRatio || 1;
      const width = 100;
      const height = Math.round(width / aspectRatio);
      const placeholderSrc = `${doc[i].url.split("?")[0]}?tr=w-${width},h-${height},bl-10`;
      const base64 = await getBase64(placeholderSrc);

      urls.push(base64);
    }
  }

  return urls;
}
