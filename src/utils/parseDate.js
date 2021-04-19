export const parseDate = (created, updated) => {
  if (updated) return updated.toLocaleDateString().replace(/\//g, '.');
  if (created) return created.toLocaleDateString().replace(/\//g, '.');
  return new Date().toLocaleDateString().replace(/\//g, '.');
};
