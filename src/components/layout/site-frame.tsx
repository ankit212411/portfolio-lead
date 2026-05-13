import type { PropsWithChildren } from "react";

import { CartSidebarMount } from "@/components/layout/cart-sidebar-mount";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AgentWorkbenchLauncher } from "@/features/agent-workbench";

export function SiteFrame({ children }: PropsWithChildren) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <CartSidebarMount />
      <AgentWorkbenchLauncher />
    </>
  );
}
