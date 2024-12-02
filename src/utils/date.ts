import { format, formatDistance, formatRelative, isDate } from 'date-fns';

export function formatDateTime(date: Date | string): string {
  const d = isDate(date) ? date : new Date(date);
  return format(d, 'MMM d, yyyy HH:mm');
}

export function formatDateOnly(date: Date | string): string {
  const d = isDate(date) ? date : new Date(date);
  return format(d, 'MMM d, yyyy');
}

export function formatTimeAgo(date: Date | string): string {
  const d = isDate(date) ? date : new Date(date);
  return formatDistance(d, new Date(), { addSuffix: true });
}

export function formatRelativeTime(date: Date | string): string {
  const d = isDate(date) ? date : new Date(date);
  return formatRelative(d, new Date());
}