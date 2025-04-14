"use client";

import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => (
  <button onClick={onClick} className="btn-primary">
    {children}
  </button>
);

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-gray-50 text-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 flex flex-col md:flex-row items-center">
          <div className="flex-1">
            <div className="border-[2px] border-brand-yellow w-[60px] mb-6" />
            <h2 className="text-6xl font-bold mb-6 flex-1 font-bebas uppercase text-left">Contact<br />Us</h2>
          </div>
          <div className="flex flex-col flex-1 gap-8">
            <p className="text-xl">Get in touch with us for your next project</p>
            <Link href="/contact">
              <Button
              >
                Contact Now
              </Button>
            </Link>

          </div>
        </div>


      </div>
    </section>
  );
}
