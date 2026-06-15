export interface SimulationState {
  id: string;
  propertyName: string;
  purchasePrice: number;
  taxRegistrationPercent: number;
  developmentHoldingCost: number;
  targetSellingPrice: number;
  holdingPeriodMonths: number;
  annualRentIncome: number;
  timestamp: string;
}

export interface LegalTask {
  id: string;
  phase: 'registration' | 'operational' | 'vetting';
  title: string;
  description: string;
  authority: string;
  requiredDocs: string[];
  duration: string;
  checked?: boolean;
}

export interface TimelineMilestone {
  id: string;
  phase: string;
  title: string;
  duration: string;
  description: string;
  steps: string[];
  status: 'pending' | 'ongoing' | 'completed';
}

export interface FaqItem {
  question: string;
  answer: string;
  tag: string;
}
