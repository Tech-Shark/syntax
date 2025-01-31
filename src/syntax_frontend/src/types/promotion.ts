export interface Promotion {
  id: string;
  promoName: string;
  promoType: string;
  audience: string;
  startDate: string;
  endDate: string;
  limit: string;
  promoCode?: string;
  promoDescription?: string;
  status: 'active' | 'disabled';
  redemptions: number;
}

export interface PromotionState {
  promotions: Promotion[];
}