import { parse } from "date-fns";

export const dateStringFormat = "yyyy-MM-dd";

export function parseDate(date) {
  return parse(date, dateStringFormat, new Date());
}
