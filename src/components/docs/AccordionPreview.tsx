import * as React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionPanel } from '../ui/Accordion';

const defaultItems = [
  {
    value: 'item-1',
    question: 'How does the subscription work?',
    answer: 'Plans renew automatically monthly. You can cancel anytime in settings.',
  },
  {
    value: 'item-2',
    question: 'What payment methods are supported?',
    answer: 'We accept Visa, Mastercard, PayPal and bank transfers.',
  },
  {
    value: 'item-3',
    question: 'Where can I find my invoices?',
    answer: 'All invoices are available under Settings > Billing > Invoice history.',
  },
];

// 1. Single
export function AccordionDefault() {
  return (
    <Accordion type="single" collapsible variant="default" className="w-full">
      {defaultItems.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionPanel>{item.answer}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

// 2. With Icon
function IconLock() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="3" y="7" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M5 7V5a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function IconKey() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="6" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8.5 9.5l5 5M11 12l1.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function IconDevices() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="1" y="3" width="10" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4 13h5M6.5 10v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="12" y="7" width="3" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

const iconItems = [
  { value: 'icon-1', icon: <IconLock />, question: 'Two-factor authentication', answer: 'Enable 2FA to add an extra layer of security to your account.' },
  { value: 'icon-2', icon: <IconKey />, question: 'Password and security settings', answer: 'Update your password and manage login sessions.' },
  { value: 'icon-3', icon: <IconDevices />, question: 'Connected devices and active sessions', answer: 'View and revoke access from any device connected to your account.' },
];

export function AccordionWithIcon() {
  return (
    <Accordion type="single" collapsible variant="default" className="w-full">
      {iconItems.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger icon={item.icon}>{item.question}</AccordionTrigger>
          <AccordionPanel>{item.answer}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

// 3. Borderless
export function AccordionBorderless() {
  return (
    <Accordion type="single" collapsible variant="borderless" className="w-full">
      {defaultItems.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionPanel>{item.answer}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

// 4. Grouped
const groupedItems = [
  { value: 'g-1', question: 'Shipping options and delivery', answer: 'We offer standard courier delivery and pickup location options.' },
  { value: 'g-2', question: 'Payment methods on delivery', answer: 'Cash on delivery and card payment are both supported.' },
  { value: 'g-3', question: 'How to return an item within 14 days', answer: 'Contact support and request a return label. Ship within 14 days of purchase.' },
];

export function AccordionGrouped() {
  return (
    <Accordion type="single" collapsible variant="grouped" className="w-full">
      {groupedItems.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionPanel>{item.answer}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

// 5. Cards
const cardItems = [
  { value: 'c-1', question: '14-day money-back guarantee', answer: 'Request a full refund within 14 days if you are not satisfied.' },
  { value: 'c-2', question: '99.9% uptime service guarantee', answer: 'We maintain high availability across all regions with redundant infrastructure.' },
  { value: 'c-3', question: '24/7 priority support for Pro users', answer: 'Pro plan includes direct access to our support team around the clock.' },
];

export function AccordionCards() {
  return (
    <Accordion type="single" collapsible variant="cards" className="w-full">
      {cardItems.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionPanel>{item.answer}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

// 6. Multiple
const multipleItems = [
  { value: 'm-1', question: 'Step 1: Create your account', answer: 'Enter your basic info and confirm your email address to register.' },
  { value: 'm-2', question: 'Step 2: Set up your profile', answer: 'Add billing details and select your preferred language.' },
  { value: 'm-3', question: 'Step 3: Invite your team', answer: 'Send email invites to colleagues and assign their workspace roles.' },
];

export function AccordionMultiple() {
  return (
    <Accordion type="multiple" variant="default" className="w-full">
      {multipleItems.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionPanel>{item.answer}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
