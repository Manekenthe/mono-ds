import * as React from 'react';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../ui/Breadcrumb';

function IconHome() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8.306 1.107C8.21728 1.03783 8.108 1.00027 7.9955 1.00027C7.883 1.00027 7.77372 1.03783 7.685 1.107L0.5 6.7095L1.1215 7.4955L2 6.8105V13C2.00053 13.2651 2.10606 13.5191 2.29348 13.7065C2.4809 13.8939 2.73495 13.9995 3 14H13C13.2651 13.9995 13.5191 13.8939 13.7065 13.7065C13.8939 13.5191 13.9995 13.2651 14 13V6.815L14.8785 7.5L15.5 6.714L8.306 1.107ZM9 13H7V9H9V13ZM10 13V9C10 8.73479 9.89464 8.48043 9.70711 8.29289C9.51957 8.10536 9.26522 8 9 8H7C6.73478 8 6.48043 8.10536 6.29289 8.29289C6.10536 8.48043 6 8.73479 6 9V13H3V6.031L8 2.136L13 6.036V13H10Z" />
    </svg>
  );
}

function IconFolder() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M5.585 3L7.295 4.705L7.585 5H14V13H2V3H5.585ZM5.585 2H2C1.73478 2 1.48043 2.10536 1.29289 2.29289C1.10536 2.48043 1 2.73478 1 3V13C1 13.2652 1.10536 13.5196 1.29289 13.7071C1.48043 13.8946 1.73478 14 2 14H14C14.2652 14 14.5196 13.8946 14.7071 13.7071C14.8946 13.5196 15 13.2652 15 13V5C15 4.73478 14.8946 4.48043 14.7071 4.29289C14.5196 4.10536 14.2652 4 14 4H8L6.295 2.295C6.20197 2.20142 6.09134 2.12717 5.96948 2.07654C5.84763 2.02591 5.71696 1.9999 5.585 2Z" />
    </svg>
  );
}

function IconChartPie() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 2C6.81331 2 5.65328 2.35189 4.66658 3.01118C3.67989 3.67047 2.91085 4.60754 2.45673 5.7039C2.0026 6.80026 1.88378 8.00666 2.11529 9.17054C2.3468 10.3344 2.91825 11.4035 3.75736 12.2426C4.59648 13.0818 5.66558 13.6532 6.82946 13.8847C7.99335 14.1162 9.19975 13.9974 10.2961 13.5433C11.3925 13.0892 12.3295 12.3201 12.9888 11.3334C13.6481 10.3467 14 9.18669 14 8C14 6.4087 13.3679 4.88258 12.2426 3.75736C11.1174 2.63214 9.5913 2 8 2ZM13 7.5H8.5V3.025C9.65208 3.13487 10.7304 3.64099 11.551 4.45705C12.3716 5.2731 12.8837 6.34855 13 7.5ZM7.71 13C6.44369 12.9411 5.24702 12.4034 4.3621 11.4957C3.47719 10.588 2.97009 9.37804 2.94341 8.11064C2.91672 6.84324 3.37245 5.61302 4.21838 4.66887C5.06431 3.72472 6.23729 3.13714 7.5 3.025V7.525C7.5 7.79022 7.60536 8.04457 7.7929 8.23211C7.98043 8.41964 8.23479 8.525 8.5 8.525H13C12.867 9.80976 12.2419 10.9932 11.2558 11.8274C10.2697 12.6616 8.99903 13.0818 7.71 13Z" />
    </svg>
  );
}

// links in the docs previews should not navigate away
const stay = (e: React.MouseEvent) => e.preventDefault();

// 1. Basic
export function BreadcrumbBasic() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#" onClick={stay}>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#" onClick={stay}>Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

// 2. With dropdown
export function BreadcrumbWithDropdown() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#" onClick={stay}>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbEllipsis />
        <BreadcrumbItem>
          <BreadcrumbLink href="#" onClick={stay}>Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

// 3. With slash separator
export function BreadcrumbWithSlash() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#" onClick={stay}>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="#" onClick={stay}>Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

// 4. With icon
export function BreadcrumbWithIcon() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#" onClick={stay} icon={<IconHome />}>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#" onClick={stay} icon={<IconFolder />}>Projects</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage icon={<IconChartPie />}>Reports</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
