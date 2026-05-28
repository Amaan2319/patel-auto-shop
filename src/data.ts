/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ProductCategory, FeatureCard, FeatureStats } from './types';

export const statsData: FeatureStats[] = [
  { label: 'Retail Upgrades Completed', value: '10K+' },
  { label: 'Trade & Dealer Partners', value: '500+' },
  { label: 'In-Stock Accessories', value: '15K+' },
  { label: 'Expert Technicians', value: '12+' }
];

export const featuresData: FeatureCard[] = [
  {
    id: 'expert-install',
    title: 'Expert Installation',
    description: 'Precision wiring and flawless fitting by our highly trained automotive technicians.',
    iconName: 'Wrench'
  },
  {
    id: 'vast-inventory',
    title: 'Vast Inventory',
    description: 'Immediate access to the widest selection of car custom setups in Gujarat.',
    iconName: 'Boxes'
  },
  {
    id: 'premium-brands',
    title: 'Premium Brands',
    description: 'Direct importer of genuine head-turning products and high-performance audio setups.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'best-pricing',
    title: 'Best Wholesale Pricing',
    description: 'Unbeatable direct-from-importer pricing that maximizes value for custom projects.',
    iconName: 'Tag'
  }
];

export const productCategories: ProductCategory[] = [
  {
    id: 'sound-systems',
    title: 'SOUND SYSTEMS',
    subtitle: 'Everything your car needs to stand out and sound better.',
    description: 'Premium audio setups, amplifiers, and custom enclosures.',
    imageUrl: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&q=80&w=800',
    features: ['Custom fiber woofer enclosures', 'Premium amplifier racks', 'Direct high-to-low couplers', 'High-end component systems']
  },
  {
    id: 'head-tail-lights',
    title: 'HEAD & TAIL LIGHTS',
    subtitle: 'Brighten the road with aggressive signature lighting.',
    description: 'High-intensity LED conversions and custom light assemblies.',
    imageUrl: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800',
    features: ['Matrix sequential turn lamps', 'Premium high-lumen LEDs', 'Bi-LED projector retrofits', 'Laser shadow headlights']
  },
  {
    id: 'drl-fog-lamps',
    title: 'DRL & FOG LAMPS',
    subtitle: 'Command the dark with powerful driving beams.',
    description: 'Cut through the dark with ultra-bright fog and running lights.',
    imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800',
    features: ['Dual-color high-focus fog pods', 'OEM-fit dual-intensity DRLs', 'Strobe & strobe-flash modes', 'Custom grill illumination bars']
  },
  {
    id: 'seat-covers',
    title: 'SEAT COVERS & INTERIOR',
    subtitle: 'Re-imagine your cockpit with bespoke tailored comfort.',
    description: 'Luxury leather stitching and dashboard enhancements.',
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
    features: ['Nappa & Ortho custom seat covers', 'Suede roof linings with starlights', 'Dashboard carbon hydrodipping', 'Ambient active RGB ambient logs']
  },
  {
    id: 'camera-sensors',
    title: 'CAMERA & SENSORS',
    subtitle: 'Enhance control and park with professional precision.',
    description: 'Reverse cameras and 360-degree parking assistance.',
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800',
    features: ['Sony IMX 1080p bird-eye rigs', 'Active dynamic steering lines', 'Proactive bumper collision sonar', 'Integrated dual DVR dashboard feeds']
  },
  {
    id: 'wheels-exterior',
    title: 'WHEELS & EXTERIOR',
    subtitle: 'Command presence with stunning exterior finishes.',
    description: 'Alloys, chrome deletes, and exterior styling.',
    imageUrl: 'https://images.unsplash.com/photo-1611245084964-b0cfce39ea75?auto=format&fit=crop&q=80&w=800',
    features: ['Performance light-alloy rims', 'Custom premium vehicle wraps', 'Piano black detailing kits', 'Tailored protective underbody coatings']
  }
];
