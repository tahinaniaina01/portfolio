import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com"], // Ajoutez ici les domaines autorisés
  },
};

export default withNextIntl(nextConfig);
