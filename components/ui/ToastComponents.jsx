"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { LucideCircleArrowOutDownLeft } from "lucide-react";

export function ToastComponents() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Button 
      className="cursor-pointer"
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast
      </Button>
    </div>
  );
}


