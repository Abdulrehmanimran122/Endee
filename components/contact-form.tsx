export function ContactForm() {
  return (
    <form action="#" className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#1d1d1d]">Full name</label>
          <input
            id="name"
            name="name"
            className="w-full rounded-xl border border-[#ddd2c7] bg-white px-4 py-3 text-sm text-[#111111] outline-none transition focus:border-[#111111]"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-[#1d1d1d]">Company</label>
          <input
            id="company"
            name="company"
            className="w-full rounded-xl border border-[#ddd2c7] bg-white px-4 py-3 text-sm text-[#111111] outline-none transition focus:border-[#111111]"
            placeholder="Company / brand"
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#1d1d1d]">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full rounded-xl border border-[#ddd2c7] bg-white px-4 py-3 text-sm text-[#111111] outline-none transition focus:border-[#111111]"
            placeholder="name@email.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[#1d1d1d]">Phone</label>
          <input
            id="phone"
            name="phone"
            className="w-full rounded-xl border border-[#ddd2c7] bg-white px-4 py-3 text-sm text-[#111111] outline-none transition focus:border-[#111111]"
            placeholder="Optional"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#1d1d1d]">Project details</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          className="w-full rounded-xl border border-[#ddd2c7] bg-white px-4 py-3 text-sm text-[#111111] outline-none transition focus:border-[#111111]"
          placeholder="Tell us about your textile requirement, target quantities, or import/export needs."
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-[#111111] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2b2b2b]"
        >
          Send inquiry
        </button>
      </div>
    </form>
  );
}
