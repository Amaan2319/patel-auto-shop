/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProductCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  features?: string[];
}

export interface FeatureStats {
  label: string;
  value: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ContactLead {
  fullName: string;
  phoneNumber: string;
  requirements: string;
  selectedCategory?: string; // Modular hooks for future database integrations
}
