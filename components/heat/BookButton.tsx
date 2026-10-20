"use client";

import { openBooking } from "@/lib/booking";
import type { Appliance } from "@/lib/landing-copy";

/** A button that opens the booking sheet with an appliance already picked. */
export function BookButton({
  appliance,
  className,
  children,
  label,
}: {
  appliance?: Appliance;
  className?: string;
  children: React.ReactNode;
  label?: string;
}) {
  return (
    <button type="button" className={className} onClick={() => openBooking(appliance)} aria-label={label}>
      {children}
    </button>
  );
}
