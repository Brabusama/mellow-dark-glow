const Ticker = () => {
  return (
    <div className="fixed top-4 left-0 w-full z-50 overflow-hidden">
      <div className="bg-dark-primary/80 backdrop-blur-sm border-y border-dark-accent/30">
        <div className="ticker py-2">
          <span className="text-dark-glow font-mono text-lg font-bold whitespace-nowrap">
            $DARK • DARK TOKEN • PRICE: $0.00001337 • 24H: +420.69% • MARKET CAP: $133.7M • VOLUME: $42.0M • HOLDERS: 13,370 • 
            $DARK • DARK TOKEN • PRICE: $0.00001337 • 24H: +420.69% • MARKET CAP: $133.7M • VOLUME: $42.0M • HOLDERS: 13,370 • 
          </span>
        </div>
      </div>
    </div>
  );
};

export default Ticker;