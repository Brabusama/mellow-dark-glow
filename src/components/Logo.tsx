interface LogoProps {
  src?: string;
  alt?: string;
  className?: string;
}

const Logo = ({ src = "/lovable-uploads/5e06d405-c1ac-4334-a9b6-be5fc12f4b34.png", alt = "DARK Logo", className = "" }: LogoProps) => {
  return (
    <div className={`flex items-center justify-center opacity-30 ${className}`}>
      <img 
        src={src} 
        alt={alt}
        className="w-24 h-16 opacity-60"
        onError={(e) => {
          // Fallback to text logo if image fails to load
          e.currentTarget.style.display = 'none';
          e.currentTarget.nextElementSibling?.classList.remove('hidden');
        }}
      />
      <div className="hidden text-dark-text font-bold text-2xl font-mono opacity-30">
        $DARK
      </div>
    </div>
  );
};

export default Logo;