export interface ICard {
  id: number;
  companyId?: number;
  title: string;
  score: number;
  cashback: number;
  level: string;
  branding?: Branding;
}

export interface Branding {
  cardBackgroundColor: string;
  highlightTextColor: string;
  textColor: string;
  mainColor: string;
  accentColor: string;
  backgroundColor: string;
}
