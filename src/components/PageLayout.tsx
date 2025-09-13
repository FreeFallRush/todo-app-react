interface PageLayoutProps {
  title: string;
  count?: number;
  children: React.ReactNode;
}

function PageLayout({ title, count, children }: PageLayoutProps) {
  return (
    <div className="page">
      <div className="page-header">
        <h2 className="page-title">
          {title} {typeof count === "number" ? `: ${count}` : ""}
        </h2>
      </div>
      <div className="page-content">{children}</div>
    </div>
  );
}

export default PageLayout;
