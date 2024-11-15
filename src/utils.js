export const removeHTMLTags = (str) => {
  return str.replace(/<[^>]*>/g, '');
};