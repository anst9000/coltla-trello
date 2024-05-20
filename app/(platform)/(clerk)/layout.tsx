type ClerkLayoutProps = {
  children: React.ReactNode
}

const ClerkLayout = ({ children }: ClerkLayoutProps) => {
  return (
    <div className="h-full flex items-center justify-center bg-slate-200">
      {children}
    </div>
  )
}

export default ClerkLayout
