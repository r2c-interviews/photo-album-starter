import { AppShell } from "@mantine/core";
import { Navbar } from "./Navbar";
import { Header } from "./Header";
export const Layout = () => {
  return (
    <AppShell fixed header={<Header />} navbar={<Navbar />}>
      <div>Content area</div>
    </AppShell>
  );
};
