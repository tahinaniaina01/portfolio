import Footer from "@/src/components/pages/global/Footer";
import Header from "@/src/components/pages/global/Header";
import CanvasCursor from "@/src/components/utils/CanvasCursor";
import PageTransition from "@/src/components/utils/PageTransition";
import StairTransition from "@/src/components/utils/StairTransition";
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

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="w-[100vw] overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <CanvasCursor />
            <Header />
            <StairTransition />
            <PageTransition>{children}</PageTransition>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
