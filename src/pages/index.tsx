import { JSX, useEffect } from "react";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Heading from "@theme/Heading";

export default function Home(): JSX.Element {
  return (
    <Layout title="Welcome" description="Documentation & guide for the @nexoracle/utils library">
      <main className="hero-container">
        <div className="hero-content">
          <Heading as="h1" className="hero-title">
            NexOracle Utils Documentation
          </Heading>
          <p className="hero-subtitle">Comprehensive guide for the @nexoracle/utils library</p>

          <BrowserOnly>
            {() => {
              useEffect(() => {
                const timer = setTimeout(() => {
                  window.location.href = "/docs/introduction";
                }, 3000);
                return () => clearTimeout(timer);
              }, []);

              return (
                <div className="redirect-notice">
                  <div className="spinner"></div>
                  <p>Taking you to the documentation...</p>
                  <a href="/docs/introduction" className="manual-link">
                    Click here if not redirected automatically
                  </a>
                </div>
              );
            }}
          </BrowserOnly>
        </div>
      </main>
    </Layout>
  );
}
