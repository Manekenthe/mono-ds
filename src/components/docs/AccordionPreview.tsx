import * as React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionPanel } from '../ui/Accordion';

const defaultItems = [
  { value: 'item-1', question: 'How does the subscription work?', answer: 'Plans renew automatically monthly. You can cancel anytime in settings.' },
  { value: 'item-2', question: 'What payment methods are supported?', answer: 'We accept Visa, Mastercard, PayPal and bank transfers.' },
  { value: 'item-3', question: 'Where can I find my invoices?', answer: 'All invoices are available under Settings > Billing > Invoice history.' },
];

function IconTwoFactor() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <polygon points="11 23.18 9 21.179 7.589 22.589 11 26 17 20 15.59 18.59 11 23.18"/>
      <path d="M28,30H24V28h4V16H24V8a4.0045,4.0045,0,0,0-4-4V2a6.0067,6.0067,0,0,1,6,6v6h2a2.0021,2.0021,0,0,1,2,2V28A2.0021,2.0021,0,0,1,28,30Z"/>
      <path d="M20,14H18V8A6,6,0,0,0,6,8v6H4a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V16A2,2,0,0,0,20,14ZM8,8a4,4,0,0,1,8,0v6H8ZM20,28H4V16H20Z"/>
    </svg>
  );
}

function IconPassword() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M21,2a8.9977,8.9977,0,0,0-8.6119,11.6118L2,24v6H8L18.3881,19.6118A9,9,0,1,0,21,2Zm0,16a7.0125,7.0125,0,0,1-2.0322-.3022L17.821,17.35l-.8472.8472-3.1811,3.1812L12.4141,20,11,21.4141l1.3787,1.3786-1.5859,1.586L9.4141,23,8,24.4141l1.3787,1.3786L7.1716,28H4V24.8284l9.8023-9.8023.8472-.8474-.3473-1.1467A7,7,0,1,1,21,18Z"/>
      <circle cx="22" cy="10" r="2"/>
    </svg>
  );
}

function IconDevices() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M10,30H4a2,2,0,0,1-2-2V16a2,2,0,0,1,2-2h6a2,2,0,0,1,2,2V28A2,2,0,0,1,10,30ZM4,16V28h6V16Z"/>
      <path d="M28,4H6A2,2,0,0,0,4,6v6H6V6H28V20H14v2h2v4H14v2h9V26H18V22H28a2,2,0,0,0,2-2V6A2,2,0,0,0,28,4Z"/>
    </svg>
  );
}

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

const groupedItems = [
  { value: 'g-1', question: 'Shipping options and delivery', answer: 'We offer standard courier delivery and pickup location options.' },
  { value: 'g-2', question: 'Payment methods on delivery', answer: 'Cash on delivery and card payment are both supported.' },
  { value: 'g-3', question: 'How to return an item within 14 days', answer: 'Contact support and request a return label. Ship within 14 days of purchase.' },
];

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
