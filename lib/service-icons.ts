import type { LucideIcon } from "lucide-react";
import { 
  Code, 
  Cloud, 
  Settings, 
  Shield, 
  Zap, 
  BarChart3,
} from "lucide-react";

// Service icon mappings
export const serviceIcons: Record<string, LucideIcon> = {
  "custom-software": Code,
  "cloud-azure": Cloud,
  "devops": Settings,
  "identity-access": Shield,
  "automation-ai": Zap,
  "data-bi": BarChart3,
};

