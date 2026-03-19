"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, ChevronDown } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
]

const serviceLinks = [
  { title: "Skin Test", href: "/skin/personal-form", description: "Take a skin test to get personalized recommendations." },
  { title: "Hair Test", href: "/hair-test", description: "Take a hair test to get personalized recommendations." },
]

export default function Header() {
  const pathname = usePathname()
  const [servicesOpen, setServicesOpen] = React.useState(false)
  const [indicatorStyle, setIndicatorStyle] = React.useState({ left: 0, width: 0, opacity: 0 })
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null)
  const navRef = React.useRef<HTMLDivElement>(null)
  const itemRefs = React.useRef<(HTMLAnchorElement | HTMLButtonElement | null)[]>([])

  // All nav items: regular links + services trigger
  const allLabels = [...navLinks.map(l => l.label), "Services"]

  // Find which item is active by pathname
  const getActiveIndex = () => {
    const idx = navLinks.findIndex(l =>
      l.href === "/" ? pathname === "/" : pathname.startsWith(l.href)
    )
    if (idx !== -1) return idx
    if (serviceLinks.some(s => pathname.startsWith(s.href))) return navLinks.length // Services
    return -1
  }

  const moveIndicatorTo = (el: HTMLElement | null) => {
    if (!el || !navRef.current) return
    const navRect = navRef.current.getBoundingClientRect()
    const elRect = el.getBoundingClientRect()
    setIndicatorStyle({
      left: elRect.left - navRect.left,
      width: elRect.width,
      opacity: 1,
    })
  }

  const resetIndicatorToActive = () => {
    const activeIdx = getActiveIndex()
    if (activeIdx !== -1) {
      moveIndicatorTo(itemRefs.current[activeIdx] ?? null)
    } else {
      setIndicatorStyle(s => ({ ...s, opacity: 0 }))
    }
  }

  // Set indicator to active link on mount and route change
  React.useEffect(() => {
    resetIndicatorToActive()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto ml-29! flex max-w-[1290px] items-center justify-between px-6! py-2!">

        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold text-emerald-700 font-(family-name:--font-viga)">
          XYZ
        </Link>

        {/* NAVIGATION */}
        <div className="flex justify-center ">
          <nav
            ref={navRef}
            className="relative flex items-center gap-1"
            onMouseLeave={() => { resetIndicatorToActive(); setHoveredIndex(null) }}
          >

            {/* Sliding box indicator */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 -translate-y-1/2 rounded-md bg-[#25544C] transition-all duration-300 ease-in-out"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
                height: "calc(100% - 8px)",
                opacity: indicatorStyle.opacity,
              }}
            />

            {/* Regular nav links */}
            {navLinks.map((link, i) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  ref={el => { itemRefs.current[i] = el }}
                  onMouseEnter={e => { moveIndicatorTo(e.currentTarget); setHoveredIndex(i) }}
                  className={`relative z-10 px-8! py-2! rounded-md font-(family-name:--font-viga) text-[18px] transition-colors duration-300 ${
                    hoveredIndex !== null
                      ? hoveredIndex === i
                      ? "text-white!"
                      : "text-[#25544C]"
                      : isActive
                      ? "text-white!"
                      : "text-[#25544C]"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                ref={el => { itemRefs.current[navLinks.length] = el }}
                onMouseEnter={e => { moveIndicatorTo(e.currentTarget); setHoveredIndex(navLinks.length) }}
                onClick={() => setServicesOpen(o => !o)}
                className={`relative z-10 text-black flex items-center gap-1 px-4! py-2! rounded-md font-(family-name:--font-viga) text-[18px] transition-colors duration-300 ${
                  hoveredIndex !== null
  ? hoveredIndex === navLinks.length
    ? "text-white"
    : "text-[#25544C]"
  : serviceLinks.some(s => pathname.startsWith(s.href))
  ? "text-white"
  : "text-[#25544C]"
                }`}
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[260px] rounded-xl border bg-white shadow-lg p-2! z-50">
                  {serviceLinks.map(s => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setServicesOpen(false)}
                      className="block rounded-lg px-4! py-3! hover:bg-[#25544C]/8 transition-colors"
                    >
                      <div className="font-semibold text-[#25544C] font-(family-name:--font-viga)">{s.title}</div>
                      <p className="text-sm text-gray-500 mt-0.5 font-(family-name:--font-subhead)">{s.description}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* BUTTON */}
        <div className="flex justify-end">
          <Link
            href="/appointment"
            className="text-white! cursor-pointer rounded-full flex font-(family-name:--font-viga) bg-[#25544C] px-7! py-2! font-medium hover:bg-[#1f453f] transition text-[17px]"
          >
            Book Appointment
            <ChevronRight />
          </Link>
        </div>

      </div>
    </header>
  )
}