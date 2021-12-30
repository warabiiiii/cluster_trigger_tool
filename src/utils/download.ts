export const download = (
  content: string,
  fileName: string,
  contentType: string,
): void => {
  const file = new Blob([content], { type: contentType });
  const a = document.createElement("a");
  document.body.appendChild(a);
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
  a.remove();
};
