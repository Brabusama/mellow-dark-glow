interface LogoProps {
  src?: string;
  alt?: string;
  className?: string;
}

const Logo = ({ src = "/logo.gif", alt = "DARK Logo", className = "" }: LogoProps) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {src.endsWith('.gif') || src.endsWith('.png') || src.endsWith('.jpg') || src.endsWith('.svg') ? (
        <img 
          src={src} 
          alt={alt}
          className="w-16 h-16 dark-glow"
          onError={(e) => {
            // Fallback to text logo if image fails to load
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling?.classList.remove('hidden');
          }}
        />
      ) : null}
      <div className="hidden text-dark-glow font-bold text-2xl font-mono">
        $DARK
      </div>
    </div>
  );
};

export default Logo;