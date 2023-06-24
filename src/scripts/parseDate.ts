export default function parseDate(date: Date | string): string {
  const parsedDate = new Date(date).toDateString();
  return parsedDate;
}
