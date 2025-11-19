interface PageLayoutProps {
  children: React.ReactNode;
  showGradient?: boolean;
}

export function PageLayout({ children, showGradient = true }: PageLayoutProps) {
  return (
    <div className="min-h-screen">
      {showGradient && (
        <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-white -z-10 dark:from-primary/10 dark:via-secondary/10 dark:to-gray-900" />
      )}
      {children}
    </div>
  );
}
