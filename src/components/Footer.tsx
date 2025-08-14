const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 bg-dark-primary/10 border-t border-dark-accent/5 opacity-5">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center space-x-8">
          <a
            href="https://dexscreener.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-dark-text hover:text-dark-text transition-colors duration-300 opacity-30"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span className="font-medium">Dexscreener</span>
          </a>
          
          <div className="w-px h-6 bg-dark-accent/20"></div>
          
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-dark-text hover:text-dark-text transition-colors duration-300 opacity-30"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <span className="font-medium">Twitter</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;