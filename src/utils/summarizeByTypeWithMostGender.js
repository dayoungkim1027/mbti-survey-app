export default function summarizeByTypeWithMostGender(data, key) {
	return Object.values(
    data.reduce((acc, obj) => {
      const value = obj[key];
      acc[value] = acc[value] || { [key]: value, count: 0 };
      acc[value].count++;
      return acc;
    }, {})
  );
}