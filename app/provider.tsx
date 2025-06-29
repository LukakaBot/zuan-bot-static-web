"use client";

import "@/style/index";
import ThemeProvider from "@/components/theme/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import setupPlugin from "@/plugin";

function Providers({ children }: React.PropsWithChildren) {
  setupPlugin();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <Toaster richColors position="top-center" />
    </ThemeProvider>
  );
}

export default Providers;
