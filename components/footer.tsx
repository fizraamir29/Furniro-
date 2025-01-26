import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Furniro</h3>
            <p className="text-gray-600 text-sm">
              Alam Pride, North Karachi
              <br />
              Phone: +923183919074
              <br />
              Email: <a href="mailto:fizraamir3@gmail.com" className="text-blue-600">fizraamir3@gmail.com</a>
            </p>
          </div>
          <nav className="space-y-4">
            <h4 className="font-semibold">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-600 hover:text-gray-900">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <nav className="space-y-4">
            <h4 className="font-semibold">Help</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/payment" className="text-gray-600 hover:text-gray-900">
                  Payment Options
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-600 hover:text-gray-900">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
                  Privacy Policies
                </Link>
              </li>
            </ul>
          </nav>
          <div className="space-y-4">
            <h4 className="font-semibold">Newsletter</h4>
            <form className="space-y-2">
              <Input type="email" placeholder="Enter your email" className="bg-white" />
              <Button className="w-full" variant="outline">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Furniro. All rights reserved.</p>
        </div>
        {/* Social Media Links */}
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://www.facebook.com/TrendyTees" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            Facebook
          </a>
          <a href="https://www.instagram.com/TrendyTees" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            Instagram
          </a>
          <a href="https://twitter.com/TrendyTees" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            Twitter
          </a>
          <a href="https://www.pinterest.com/TrendyTees" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            Pinterest
          </a>
        </div>
      </div>
    </footer>
  )
}
