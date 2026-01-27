import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  children,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`rounded-xl border bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${className} card-hover`}
      {...props}
    >
      {title && (
        <div className="border-b p-4 bg-gray-50">
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, ...props }) => {
  return (
    <div className="border-b p-4 bg-gray-50" {...props}>
      {children}
    </div>
  );
};

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardContent: React.FC<CardContentProps> = ({ children, ...props }) => {
  return (
    <div className="p-6" {...props}>
      {children}
    </div>
  );
};

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardFooter: React.FC<CardFooterProps> = ({ children, ...props }) => {
  return (
    <div className="border-t p-4 bg-gray-50" {...props}>
      {children}
    </div>
  );
};