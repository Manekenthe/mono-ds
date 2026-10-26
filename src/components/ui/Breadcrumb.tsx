import * as React from 'react';
import { cn } from '../../lib/utils';

function IconChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M11 8L5.99999 13L5.29999 12.3L9.59999 8L5.29999 3.7L5.99999 3L11 8Z" />
    </svg>
  );
}

function IconOverflow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M4 9C4.55228 9 5 8.55228 5 8C5 7.44772 4.55228 7 4 7C3.44772 7 3 7.44772 3 8C3 8.55228 3.44772 9 4 9Z" />
      <path d="M8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9Z" />
      <path d="M12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9Z" />
    </svg>
  );
}

/* Root */
export function Breadcrumb(props: React.ComponentPropsWithoutRef<'nav'>) {
  return <nav aria-label="breadcrumb" {...props} />;
}

/* List: 8px between every item and separator */
export function BreadcrumbList({ className, style, ...props }: React.ComponentPropsWithoutRef<'ol'>) {
  return (
    <ol
      className={cn('flex flex-wrap items-center gap-[8px] font-mono font-normal text-[14px] leading-[20px] text-[#A0A0A0]', className)}
      style={{ margin: 0, padding: 0, listStyle: 'none', ...style }}
      {...props}
    />
  );
}

export function BreadcrumbItem({ className, ...props }: React.ComponentPropsWithoutRef<'li'>) {
  return <li className={cn('inline-flex items-center', className)} {...props} />;
}

interface IconProps {
  icon?: React.ReactNode;
}

/* Link: gray, white on hover. The icon follows the text color. */
export function BreadcrumbLink({ icon, className, children, ...props }: React.ComponentPropsWithoutRef<'a'> & IconProps) {
  return (
    <a
      className={cn(
        'inline-flex items-center gap-[4px] rounded-[4px] text-[#A0A0A0] transition-colors duration-150 hover:text-white',
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0071FC]',
        className
      )}
      {...props}
    >
      {icon}
      {children}
    </a>
  );
}

/* Current page: white, not a link */
export function BreadcrumbPage({ icon, className, children, ...props }: React.ComponentPropsWithoutRef<'span'> & IconProps) {
  return (
    <span
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn('inline-flex items-center gap-[4px] text-white', className)}
      {...props}
    >
      {icon}
      {children}
    </span>
  );
}

/* Separator: a chevron by default, or any children (for example a slash) */
export function BreadcrumbSeparator({ children, className, ...props }: React.ComponentPropsWithoutRef<'li'>) {
  return (
    <li role="presentation" aria-hidden="true" className={cn('inline-flex items-center text-[#A0A0A0]', className)} {...props}>
      {children ?? <IconChevronRight />}
    </li>
  );
}

/* Ellipsis: stands in for hidden items. Hover state only for now, attach a menu with onClick. */
export function BreadcrumbEllipsis({ className, ...props }: React.ComponentPropsWithoutRef<'button'>) {
  return (
    <li className="inline-flex items-center">
      <button
        type="button"
        aria-label="Show more"
        aria-haspopup="menu"
        className={cn(
          'inline-flex cursor-pointer items-center rounded-[4px] text-[#A0A0A0] transition-colors duration-150 hover:text-white',
          'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0071FC]',
          className
        )}
        {...props}
      >
        <IconOverflow />
      </button>
    </li>
  );
}
