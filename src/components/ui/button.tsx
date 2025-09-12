/**
 * Button Component for BlueBoost Gaming Platform
 * 
 * A highly customizable button component built with Radix UI and class-variance-authority.
 * Features professional hover effects, multiple variants, sizes, and accessibility support.
 * 
 * Features:
 * - Multiple variants: default, destructive, outline, secondary, ghost, link
 * - Responsive sizing: sm, default, lg, icon
 * - Professional hover effects with scale, shadow, and translate animations
 * - Accessibility-first design with focus indicators
 * - Support for rendering as different elements via asChild prop
 * 
 * @author BlueBoost Development Team
 */

import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/utils";

/**
 * Button variant styles using class-variance-authority
 * 
 * Defines the base styles and all possible button variations.
 * Includes professional animations and hover effects consistent with the gaming theme.
 */
const buttonVariants = cva(
  // Base styles applied to all buttons
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transform hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg focus:shadow-lg",
  {
    variants: {
      variant: {
        // Primary button with brand colors and premium hover effects
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5",
        // Destructive actions with red color scheme
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:shadow-lg hover:shadow-destructive/25 hover:-translate-y-0.5",
        // Outlined button for secondary actions
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground hover:border-primary/50 hover:shadow-md hover:-translate-y-0.5",
        // Secondary button with muted styling
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 hover:shadow-lg hover:shadow-secondary/25 hover:-translate-y-0.5",
        // Minimal button without background
        ghost: "hover:bg-accent hover:text-accent-foreground hover:shadow-md hover:-translate-y-0.5",
        // Link-style button
        link: "text-primary underline-offset-4 hover:underline hover:text-primary/80 hover:-translate-y-0.5",
      },
      size: {
        default: "h-9 px-4 py-2",    // Standard button size
        sm: "h-8 rounded-md px-3 text-xs", // Small button for compact layouts
        lg: "h-10 rounded-md px-8",  // Large button for emphasis
        icon: "h-9 w-9",             // Square button for icons only
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

/**
 * Button component props interface
 * Extends standard HTML button attributes with variant and size options
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean; // Render as different element using Radix Slot
}

/**
 * Button Component
 * 
 * Renders a customizable button with professional styling and animations.
 * Can be rendered as different elements using the asChild prop.
 * 
 * @param {ButtonProps} props - Button properties including variant, size, and HTML attributes
 * @param {React.Ref<HTMLButtonElement>} ref - Forward ref for button element
 * @returns {JSX.Element} Styled button component
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // Use Radix Slot if asChild is true, otherwise render as button
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

// Set display name for React DevTools
Button.displayName = "Button";

export { Button, buttonVariants };
