import * as React from "react"

import { cn } from "~/lib/utils"

const PriceInput = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full rounded-md border border-input bg-background px-4 py-3 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-3xl font-extralight text-white/80",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
PriceInput.displayName = "PriceInput"

export { PriceInput }