import Balance from "react-wrap-balancer"

import { cn } from "@/lib/utils"

function Header({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <header
      className={cn(
        "flex items-start gap-2 pt-1 shadow-lg shadow-black-500/40",
        className
      )}
      {...props}
    >
      {children}
    </header>
  )
}



export { Header }
