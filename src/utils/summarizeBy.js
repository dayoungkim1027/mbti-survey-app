export default function summarizeBy(data, key, key2) {
  return Object.values(
    data.reduce((acc, obj) => {
      const value = key2 ? `${obj[key]}-${obj[key2][0]}` : obj[key];
      acc[value] = acc[value] || { [key]: value, count: 0 };
      acc[value].count++;
      return acc;
    }, {})
  );
}