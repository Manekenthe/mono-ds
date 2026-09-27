import * as React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionPanel } from '../ui/Accordion';

const defaultItems = [
  { value: 'item-1', question: 'How does the subscription work?', answer: 'Plans renew automatically monthly. You can cancel anytime in settings.' },
  { value: 'item-2', question: 'What payment methods are supported?', answer: 'We accept Visa, Mastercard, PayPal and bank transfers.' },
  { value: 'item-3', question: 'Where can I find my invoices?', answer: 'All invoices are available under Settings > Billing > Invoice history.' },
];

// Carbon Design System icons 16x16
function IconTwoFactor() {
  return (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16 2L4 7v9c0 7.1 5.1 13.7 12 15.4C22.9 29.7 28 23.1 28 16V7L16 2zm0 2.3l10 4.5V16c0 6-4.2 11.6-10 13.4C10.2 27.6 6 22 6 16V8.8l10-4.5z"/>
      <path d="M15 17.6l-3.3-3.3-1.4 1.4L15 20.4l6.7-6.7-1.4-1.4z"/>
    </svg>
  );
}
function IconPassword() {
  return (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M11 16a5 5 0 1 1 5 5 5 5 0 0 1-5-5zm5-3a3 3 0 1 0 3 3 3 3 0 0 0-3-3z"/>
      <path d="M21.7 10.3A9 9 0 0 0 7 16H2v2h5v-2a7 7 0 0 1 13.7-1.9L28 7.4V5l-6.3 5.3z"/>
    </svg>
  );
}
function IconDevices() {
  return (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M28 6H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10v2H8v2h10v-2h-2v-2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm0 16H4V8h24z"/>
    </svg>
  );
}

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

// 2. With Icon - icon only on AccordionTrigger
const iconItems = [
  { value: 'icon-1', icon: <IconTwoFactor />, question: 'Two-factor authentication', answer: 'Enable 2FA to add an extra layer of security to your account.' },
  { value: 'icon-2', icon: <IconPassword />, question: 'Password and security settings', answer: 'Update your password and manage login sessions.' },
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
