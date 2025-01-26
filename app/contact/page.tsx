import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto py-12">
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="mb-4">
                We'd love to hear from you! If you have any questions or need assistance with our hijab collection, feel free to reach out.
              </p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <Input type="text" id="name" name="name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input type="email" id="email" name="email" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <Textarea id="message" name="message" rows={4} required />
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <p className="mb-2">Email: <a href="mailto:fizraamir3@gmail.com" className="text-blue-600">fizraamir3@gmail.com</a></p>
              <p className="mb-2">Phone: +923183919074</p>
              <p className="mb-4">Address: Alam Pride, North Karachi, Pakistan</p>
              <h2 className="text-xl font-semibold mb-4">Business Hours</h2>
              <p className="mb-2">Monday - Friday: 9am - 6pm</p>
              <p className="mb-2">Saturday: 10am - 4pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
