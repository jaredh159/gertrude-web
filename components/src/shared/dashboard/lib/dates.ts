// import * as typesafe from './typesafe';
/**
 * long: `Thursday, August 18, 2022`
 * medium: `Thursday, Aug. 18, 2022`
 * short: `8/18/22`
 * url: `08-18-2022`
 */
export function formatDate(
  date: Date,
  style: 'long' | 'medium' | 'short' | 'url' | 'dateInput',
): string {
  if (style === `short`) {
    return date.toLocaleDateString();
  }

  if (style === `url`) {
    return [
      `${date.getMonth() + 1}`.padStart(2, `0`),
      `${date.getDate()}`.padStart(2, `0`),
      `${date.getFullYear()}`,
    ].join(`-`);
  }

  if (style === `dateInput`) {
    return [
      `${date.getFullYear()}`,
      `${date.getMonth() + 1}`.padStart(2, `0`),
      `${date.getDate()}`.padStart(2, `0`),
    ].join(`-`);
  }

  return [
    date.toLocaleDateString(`en-US`, { weekday: `long` }),
    `, `,
    date.toLocaleDateString(`en-US`, { month: style === `long` ? `long` : `short` }),
    style === `long` ? ` ` : `. `,
    date.getDate(),
    `, `,
    date.getFullYear(),
  ].join(``);
}

export function isoToDateInput(iso: string): string {
  return formatDate(new Date(iso), `dateInput`);
}

export function isoToTimeInput(iso: string): string {
  const [, time = `12:00`] = iso.split(`T`);
  return time.slice(0, 5);
}

export function daysFromNow(days: number): Date {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date;
}

export function localToUtc(localDate: Date): Date {
  const tzOffsetMs = new Date().getTimezoneOffset() * 60000;
  const withoutOffset = new Date(localDate.getTime());
  const withOffset = new Date(withoutOffset.getTime() + tzOffsetMs);
  return withOffset;
}

export function localIsoToUtc(localTime: string): string {
  const tzOffsetMs = new Date().getTimezoneOffset() * 60000;
  const withoutOffset = new Date(localTime);
  const withOffset = new Date(withoutOffset.getTime() + tzOffsetMs);
  return withOffset.toISOString();
}

export function utcToLocal(utc: Date): Date {
  const tzOffsetMs = new Date().getTimezoneOffset() * 60000;
  const withoutOffset = new Date(utc.getTime());
  const withOffset = new Date(withoutOffset.getTime() - tzOffsetMs);
  return withOffset;
}

export function isoToLocal(iso: string): string {
  const tzOffsetMs = new Date().getTimezoneOffset() * 60000;
  const withoutOffset = new Date(iso);
  const withOffset = new Date(withoutOffset.getTime() - tzOffsetMs);
  return withOffset.toISOString();
}

export function isoFromDateInput(dateInput: string, existingIso?: string): string {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateInput)) {
    throw new Error(`Invalid date input: ${dateInput}`);
  }

  const date = new Date(existingIso ?? Date.now());
  const [year = 0, month = 0, day = 0] = dateInput.split(`-`).map((s) => parseInt(s, 10));
  date.setFullYear(year);
  date.setMonth(month - 1);
  date.setDate(day);
  return date.toISOString();
}

const rtf = new Intl.RelativeTimeFormat(`en`, { numeric: `auto` });

export function relativeTime(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const UNITS = {
    year: 24 * 60 * 60 * 1000 * 365,
    month: (24 * 60 * 60 * 1000 * 365) / 12,
    day: 24 * 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    minute: 60 * 1000,
    second: 1000,
  } as const;
  for (const [unit, num] of Object.entries(UNITS)) {
    if (Math.abs(diff) > num || unit === `second`) {
      return rtf.format(-Math.round(diff / num), unit as any);
    }
  }
  return `now`;
}

export function dateFromUrl(urlDate: string): Date {
  const [month, days, year] = urlDate.split(`-`);
  return new Date(Date.parse(`${year}-${month}-${days}T12:00:00.000Z`));
}

export function formatDateAndTimeFromInputElements(date: string, time: string): string {
  const expiry = new Date(date);
  expiry.setHours(Number(time.split(`:`)[0]));
  expiry.setMinutes(Number(time.split(`:`)[1]));
  return `${formatDate(expiry, `medium`)} at ${expiry.toLocaleTimeString(`en-US`)}`;
}