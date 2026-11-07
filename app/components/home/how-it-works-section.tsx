import { Icon, type IconName } from "../icons";

const steps: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "phone",
    title: "Contact Us",
    description: "Call or message us on WhatsApp, or use the booking form.",
  },
  {
    icon: "message",
    title: "Explain Your Problem",
    description: "Tell us the appliance, brand and what is going wrong.",
  },
  {
    icon: "calendar",
    title: "Schedule Your Service",
    description: "We help you arrange a service visit that suits you.",
  },
  {
    icon: "wrench",
    title: "Get Your Appliance Repaired",
    description: "We work on the fault and explain what was done.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="scroll-mt-24 bg-white py-16 sm:py-24" id="how-it-works">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.19em] text-brand">
            How it works
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] text-ink sm:text-4xl">
            Four simple steps to a working appliance.
          </h2>
        </div>

        <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li className="border-t-2 border-ink pt-5" key={step.title}>
              <div className="flex items-baseline justify-between">
                <span className="text-4xl font-semibold tracking-[-0.05em] text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Icon className="size-5 text-muted" name={step.icon} />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
