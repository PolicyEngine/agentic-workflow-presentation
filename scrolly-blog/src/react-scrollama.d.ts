declare module 'react-scrollama' {
  import { ReactNode } from 'react';

  interface ScrollamaProps {
    offset?: number;
    onStepEnter?: (response: { data: any; entry: IntersectionObserverEntry }) => void;
    onStepExit?: (response: { data: any; entry: IntersectionObserverEntry; direction: string }) => void;
    onStepProgress?: (response: { data: any; progress: number; entry: IntersectionObserverEntry }) => void;
    children: ReactNode;
    debug?: boolean;
    threshold?: number;
  }

  interface StepProps {
    data?: any;
    children: ReactNode;
  }

  export const Scrollama: React.FC<ScrollamaProps>;
  export const Step: React.FC<StepProps>;
}
