import { useEffect } from "react";

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        "/logopng.png",
        "/heroImg.jpg",
        "/pic2.jpg",
        "/studentlaw.png",
      ];

      criticalImages.forEach((src) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Optimize images with lazy loading
    const optimizeImages = () => {
      const images = document.querySelectorAll("img[data-src]");
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove("lazy");
            observer.unobserve(img);
          }
        });
      });

      images.forEach((img) => imageObserver.observe(img));
    };

    // Add loading="lazy" to non-critical images
    const addLazyLoading = () => {
      const images = document.querySelectorAll("img:not([loading])");
      images.forEach((img, index) => {
        if (index > 2) {
          // Keep first 3 images eager loading
          img.loading = "lazy";
        }
      });
    };

    preloadCriticalResources();
    optimizeImages();
    addLazyLoading();

    // Add performance monitoring
    if ("performance" in window) {
      window.addEventListener("load", () => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType("navigation")[0];
          if (perfData) {
            console.log("Performance Metrics:", {
              "DOM Content Loaded":
                perfData.domContentLoadedEventEnd -
                perfData.domContentLoadedEventStart,
              "Load Complete": perfData.loadEventEnd - perfData.loadEventStart,
              "Total Load Time": perfData.loadEventEnd - perfData.fetchStart,
            });
          }
        }, 0);
      });
    }
  }, []);

  return null;
};

export default PerformanceOptimizer;
