// the dates array will contain date oobjects with an id and day property from 1-31 and will be imported to the dates state

export const datesArr = [];
for (let i = 1; i <= 31; i++) {
  datesArr.push({ id: i, date: i });
}
