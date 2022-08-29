const getYearsList = (list: any) => {
  const currentYears: number[] = [new Date().getFullYear()];

  list.forEach((item: any) => {
    const year = new Date(item.date).getFullYear();

    if (!currentYears.includes(year)) {
      currentYears.push(year);
    }
  });

  currentYears.sort((a, b) => b - a);

  const yearsObj = currentYears.map((item) => {
    return { value: item, label: item };
  });

  return yearsObj;
}

export default getYearsList;