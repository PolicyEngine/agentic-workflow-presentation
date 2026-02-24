import './PluginBlog.css';
import { HeroSection } from '../components/plugin-blog/HeroSection';
import { VideoSection } from '../components/plugin-blog/VideoSection';
import { CapabilitiesSection } from '../components/plugin-blog/CapabilitiesSection';
import { EcosystemSection } from '../components/plugin-blog/EcosystemSection';
import { KeyIdeasSection } from '../components/plugin-blog/KeyIdeasSection';
import { StatsSection } from '../components/plugin-blog/StatsSection';
import { LessonsSection } from '../components/plugin-blog/LessonsSection';
import { CTASection } from '../components/plugin-blog/CTASection';

export const PluginBlog = () => (
  <div className="pb">
    <HeroSection />
    <VideoSection />
    <CapabilitiesSection />
    <EcosystemSection />
    <KeyIdeasSection />
    <StatsSection />
    <LessonsSection />
    <CTASection />
  </div>
);
