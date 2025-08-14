interface LogoProps {
  src?: string;
  alt?: string;
  className?: string;
}

const Logo = ({ src = "/logo.gif", alt = "DARK Logo", className = "" }: LogoProps) => {
  return (
    <div className={`flex items-center justify-center opacity-5 ${className}`}>
      {src.endsWith('.gif') || src.endsWith('.png') || src.endsWith('.jpg') || src.endsWith('.svg') ? (
        <img 
          src={src} 
          alt={alt}
          className="w-16 h-16 opacity-20"
          onError={(e) => {
            // Fallback to text logo if image fails to load
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling?.classList.remove('hidden');
          }}
        />
      ) : null}
      <div className="hidden text-dark-text font-bold text-2xl font-mono opacity-30">
        $DARK
      </div>
    </div>
  );
};

export default Logo;