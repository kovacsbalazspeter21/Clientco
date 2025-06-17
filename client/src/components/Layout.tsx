import Link from 'next/link';

export default function Layout({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <main>{children}</main>
    </div>
  );
}