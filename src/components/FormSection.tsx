
import { ReactNode } from 'react';
import { CircleIcon } from 'lucide-react';

interface FormSectionProps {
  title: string;
  children: ReactNode;
}

const FormSection = ({ title, children }: FormSectionProps) => {
  return (
    <div className="mb-8 animate-fade-in">
      <div className="sms-section-header">
        <CircleIcon size={16} className="text-sms-blue" />
        <h3 className="text-sm font-medium">{title}</h3>
      </div>
      <div className="p-6 bg-white">
        {children}
      </div>
    </div>
  );
};

export default FormSection;
