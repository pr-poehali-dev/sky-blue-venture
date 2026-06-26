import { useState } from "react"
import HeroBackground from "@/components/HeroBackground"
import HeroHeader from "@/components/HeroHeader"
import HeroContent from "@/components/HeroContent"

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen relative overflow-hidden">
      <HeroBackground />
      <HeroHeader mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <HeroContent />
    </div>
  )
}
