import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      '404 Error: User attempted to access non-existent route:',
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <main id="main-content" className="flex min-h-screen items-center justify-center bg-[#070707] text-[#f3f4f6] px-6">
      <Helmet>
        <title>404 - Page Not Found | Vaibhav Rao Nallani</title>
        <meta name="description" content="The page you are looking for does not exist." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="text-center max-w-md p-8 border-2 border-[#D4AF37] bg-[#0E0E12] shadow-gold">
        <div className="inline-flex p-3 border border-[#D4AF37] bg-[#16161C] text-[#F5D77F] mb-4">
          <AlertTriangle className="w-6 h-6 text-[#D4AF37]" />
        </div>
        <h1 className="mb-2 text-5xl font-mono font-black text-gold-gradient">404</h1>
        <p className="mb-6 font-mono text-sm text-[#9CA3AF]">
          Oops! The requested page does not exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 border border-[#D4AF37] bg-[#D4AF37] text-[#070707] font-mono text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(212,175,55,0.4)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Portfolio</span>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
