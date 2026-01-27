// Utility function to generate unique IDs
export function generateId(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

// Utility function to validate email format
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Utility function to validate phone format (Pakistan-specific)
export function isValidPhone(phone: string): boolean {
  // Simple Pakistan phone number validation
  const phoneRegex = /^(\+92|0)?[0-9]{3}[0-9]{7}$/;
  return phoneRegex.test(phone.replace(/\s+/g, ''));
}

// Utility function to format date
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

// Utility function to truncate text
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
}

// Utility function to group items by category
export function groupByCategory<T extends { category: string }>(items: T[]): Record<string, T[]> {
  return items.reduce((acc, item) => {
    const category = item.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {} as Record<string, T[]>);
}

// Utility function to get a random item from an array
export function getRandomItem<T>(array: T[]): T | undefined {
  if (array.length === 0) return undefined;
  return array[Math.floor(Math.random() * array.length)];
}

// Utility function to capitalize the first letter of a string
export function capitalize(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Utility function to format currency (Pakistan Rupees)
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-PK', {
    style: 'currency',
    currency: 'PKR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}