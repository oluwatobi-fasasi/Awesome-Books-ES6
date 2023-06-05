import { DateTime } from './luxon.js';

const date = () => {
  const currentDate = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  document.getElementById('date').innerHTML = currentDate;
};

setInterval(date, 1000);