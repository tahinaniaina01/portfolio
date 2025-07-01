import BottomNav from "@/src/components/pages/global/BottomNav";
import Footer from "@/src/components/pages/global/Footer";
import Header from "@/src/components/pages/global/Header";
import BubbleCursor from "@/src/components/utils/bulbeCursor";
import CanvasCursor from "@/src/components/utils/CanvasCursor";
import Stairs from "@/src/components/utils/Stairs";
import { routing } from "@/src/i18n/routing";
import { ThemeProvider } from "@/src/providers/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const locales: string[] = [...routing.locales];
  if (!locales.includes(locale)) {
    return notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  // console.log(`locales: ${locales}, locale : ${locale}`);

  // // console.log("wating...");
  // // await new Promise((resolve) => setTimeout(resolve, 7000));
  // console.log("ok");

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <Stairs />
            <CanvasCursor />
            <BubbleCursor />
            <Header />
            <main>{children}</main>
            <Footer />
            <BottomNav />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
