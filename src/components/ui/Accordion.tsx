import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { cn } from '../../lib/utils';

export type AccordionVariant = 'default' | 'borderless' | 'grouped' | 'cards';

const VariantCtx = React.createContext<AccordionVariant>('default');
const HasIconCtx = React.createContext<boolean>(false);

function Chevron({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

type AccordionRootProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & {
  variant?: AccordionVariant;
};

const Accordion = ({ variant = 'default', className, ...props }: AccordionRootProps) => (
  <VariantCtx.Provider value={variant}>
    <AccordionPrimitive.Root
      className={cn(
        variant === 'grouped' && 'border border-[#2A2A2A] rounded-md overflow-hidden',
        className
      )}
      {...props}
    />
  </VariantCtx.Provider>
);
Accordion.displayName = 'Accordion';

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => {
  const variant = React.useContext(VariantCtx);
  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn(
        variant === 'default' && 'border-b border-[#2A2A2A] last:border-0',
        variant === 'grouped' && 'border-b border-[#2A2A2A] last:border-0',
        variant === 'cards' && 'border border-[#2A2A2A] rounded-md mb-3 last:mb-0',
        props.disabled && 'opacity-40 pointer-events-none',
        className
      )}
      {...props}
    />
  );
});
AccordionItem.displayName = 'AccordionItem';

interface AccordionTriggerProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  icon?: React.ReactNode;
}

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ className, children, icon, ...props }, ref) => (
  <HasIconCtx.Provider value={!!icon}>
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          'flex flex-1 items-center justify-between gap-2 px-4 py-4',
          'font-mono text-sm font-medium text-white',
          'transition-all duration-150',
          'hover:underline underline-offset-4',
          'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0071FC]',
          '[&[data-state=open]>svg:last-child]:rotate-180',
          className
        )}
        {...props}
      >
        {icon && (
          <span className="flex items-center justify-center text-[#A0A0A0] shrink-0 w-4">
            {icon}
          </span>
        )}
        <span className="flex-1 text-left">{children}</span>
        <Chevron className="text-[#A0A0A0] shrink-0 transition-transform duration-300 ease-out" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  </HasIconCtx.Provider>
));
AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionPanel = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const hasIcon = React.useContext(HasIconCtx);
  return (
    <AccordionPrimitive.Content
      ref={ref}
      className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up"
      {...props}
    >
      <div className={cn(
        'px-4 pb-4 font-mono text-xs font-medium text-[#A0A0A0] leading-5',
        hasIcon && 'pl-[40px]',
        className
      )}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
});
AccordionPanel.displayName = 'AccordionPanel';

export { Accordion, AccordionItem, AccordionTrigger, AccordionPanel };
