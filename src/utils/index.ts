export function toAmount(amount:string): string {
    if(amount) {
      return `$${parseFloat(amount).toFixed(2)}`
    }
    return '$0';
  }