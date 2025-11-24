import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Malaysian currency formatter
export function formatPrice(price: number): string {
  return `RM ${price.toLocaleString('en-MY', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

// Format Malaysian phone number
export function formatPhone(phone: string): string {
  // Remove any non-digit characters
  const digits = phone.replace(/\D/g, '');

  // Format as +60 XX-XXX XXXX
  if (digits.startsWith('60')) {
    const countryCode = digits.substring(0, 2);
    const areaCode = digits.substring(2, 4);
    const firstPart = digits.substring(4, 7);
    const secondPart = digits.substring(7, 11);
    return `+${countryCode} ${areaCode}-${firstPart} ${secondPart}`;
  }

  return phone;
}
