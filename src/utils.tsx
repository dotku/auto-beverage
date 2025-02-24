export const formatter = new Intl.NumberFormat('zh-CN', {
    style: 'currency',
    currency: 'CNY'
  });

export function formatChineseCurrency(amount: number) {
    const formatter = new Intl.NumberFormat('zh-CN', {
      style: 'currency',
      currency: 'CNY',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  
// Get the default formatted number (e.g., ¥1,234,567.89)
let formatted = formatter.format(amount);
  
// Remove currency symbol
let num = formatted.replace(/¥|\s|,/g, '');

// Reverse the number to easily process from right to left
let parts = num.split('.');
let integerPart = parts[0].split('').reverse();

// Insert commas every four digits
let grouped = integerPart.map((digit, index) => (index > 0 && index % 4 === 0 ? digit + ',' : digit));

// Reverse back to correct order
let finalIntegerPart = grouped.reverse().join('');

return `¥${finalIntegerPart}.${parts[1]}`;
  }