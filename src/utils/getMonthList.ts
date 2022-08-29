const months: string[] = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
]; 

const getMonthList = () => {
  const monthsObj = months.map((item, index) => {
    return { value:index + 1, label: item };
  });

  return monthsObj;
}

export default getMonthList;