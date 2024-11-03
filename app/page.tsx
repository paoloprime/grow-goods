import { Sprout } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFF7]">
      <div className="container mx-auto px-4 py-8">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
            <Sprout className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Hero Section */}
        <div className="w-full max-w-4xl mx-auto mb-12 text-center">
          <h1 className="display-2 md:display-1 mb-6 text-gray-900">
            Let's Grow
          </h1>
          <p className="heading-3 md:heading-2 text-gray-800">
            A new way of funding Public Goods
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <StatsCard
            value="+$300k"
            label="Value Donated"
            action="Donate"
          />
          <StatsCard
            value="$GROW"
            label="Swap to ETH"
            action="Swap"
          />
          <StatsCard
            value="+$270k"
            label="Total Value Locked"
            action="Lock"
          />
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mt-16">
          <SocialLink href="https://github.com" icon="github" />
          <SocialLink href="https://telegram.org" icon="telegram" />
          <SocialLink href="https://discord.com" icon="discord" />
          <SocialLink href="https://twitter.com" icon="twitter" />
        </div>
      </div>
    </main>
  );
}

function StatsCard({
  value,
  label,
  action,
}: {
  value: string;
  label: string;
  action: string;
}) {
  return (
    <Card className="bg-gradient-to-br from-[#41C8AF] to-[#69B4CA] p-6 border-[#737373] text-white rounded-3xl flex flex-col items-end">
      <div className="space-y-2 mb-4 text-right">
        <h2 className="heading-2 font-medium">{value}</h2>
        <p className="body-xl text-white/90">{label}</p>
      </div>
      <Button 
        variant="secondary" 
        className="bg-white text-gray-800 hover:bg-white/90 ui-button shadow-lg rounded-full px-6"
      >
        {action}
      </Button>
    </Card>
  );
}

function SocialLink({ href, icon }: { href: string; icon: string }) {
  const icons = {
    github: "M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z",
    telegram: "M22 3.1c-.3-.1-.7-.1-1.1.1L2.8 11.3c-.5.2-.8.5-.8 1s.3.8.8 1l5.3 2.5 2.5 5.3c.2.5.5.8 1 .8s.8-.3 1-.8l8.1-18.1c.2-.4.2-.8.1-1.1zM7.7 13.7l8.9-4.2-4.2 8.9-1.8-3.8-2.9-1z",
    discord: "M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z",
    twitter: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  };

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="ui-link">
      <div className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 text-gray-700"
          fill="currentColor"
        >
          <path d={icons[icon as keyof typeof icons]} />
        </svg>
      </div>
    </Link>
  );
}