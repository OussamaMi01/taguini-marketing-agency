export interface HeaderItem {
  label: string;
  href: string;
  submenu?: Array<{
    label: string;
    href: string;
    description?: string;
    icon?: string;
  }>;
  featured?: boolean; // For special highlighting
}