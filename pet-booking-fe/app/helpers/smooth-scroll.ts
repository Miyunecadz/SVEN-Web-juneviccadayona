export const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
  const href = e.currentTarget.getAttribute("href");
  if (href && href.startsWith("#")) {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
};

export const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
};
