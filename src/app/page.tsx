import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Contact from "@/components/ui/contact"


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="relative h-[70vh]">
          <Image
            src="/background.jpg"
            alt="Fresh baked bread"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Welcome to Leaven and Jake</h1>
              <p className="text-xl md:text-2xl text-white mb-8">Naturally Fermented, Passionately Crafted.</p>
              <Button asChild size="lg">
                <Link href="/order">Order Now</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-amber-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Our Featured Bakes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Sourdough Boule', 'Whole Wheat Loaf', 'Cinnamon Raisin Swirl'].map((product) => (
                <Card key={product}>
                  <CardContent className="p-4">
                    <Image
                      src="/sourdough-4.jpg"
                      alt={product}
                      width={400}
                      height={300}
                      className="rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">{product}</h3>
                    <p className="text-gray-600 mb-4">Delicious, freshly baked goodness.</p>
                    <Button variant="outline">Learn More</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="About Leaven and Jake"
                  width={800}
                  height={600}
                  className="rounded-lg"
                />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <h2 className="text-3xl font-bold mb-4">About Leaven and Jake</h2>
                <p className="text-gray-600 mb-4">
                  At Leaven and Jake, we're passionate about creating the finest artisanal breads using traditional methods and the best ingredients. Our journey began with a simple love for the perfect loaf and has grown into a commitment to bringing that same joy to our community.
                </p>
                <p className="text-gray-600 mb-4">
                  Every day, we handcraft a variety of breads, from classic sourdoughs to innovative specialty loaves. We believe in the power of good bread to bring people together and make every meal special.
                </p>
                <Button asChild>
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-amber-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Alice", quote: "The best sourdough I've ever tasted!" },
                { name: "Bob", quote: "Leaven and Jake's bread is a staple in our household." },
                { name: "Charlie", quote: "I love the variety and quality of their bakes." }
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                    <p className="font-semibold">- {testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Contact />

      <footer className="bg-amber-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Leaven and Jake</h3>
              <p>123 Bakery Street, Breadtown, BT 12345</p>
              <p>Phone: (555) 123-4567</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-amber-300">Facebook</a>
                <a href="#" className="hover:text-amber-300">Instagram</a>
                <a href="#" className="hover:text-amber-300">Twitter</a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2023 Leaven and Jake. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
