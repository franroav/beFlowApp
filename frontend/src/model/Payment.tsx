export interface Payment {
  object: string;
  description: string;
  billed_hours: number;
  billed_at: string;
  billing_currency: string;
  billed_amount: number;
  needs_exchange: boolean;
  exchange_currency: string;
  exchange: object;
  created_at: string;
  updated_at: string;
}
