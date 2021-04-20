export const parseDate = (created) => {
  return created
    ? new Date(created).toLocaleDateString().replace(/\//g, '.')
    : new Date().toLocaleDateString().replace(/\//g, '.');
};
