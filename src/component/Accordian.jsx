import { useState } from "react";
import Panel from './Panel.jsx';

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-8 text-center">
          Sumaiya
        </h2>

        <Panel
          title="Paid Course"
          isActive={activeIndex === 0 && true}
          onActive={() => setActiveIndex(0)}
        >
          Get access to premium content with lifetime support and certification.
          Our paid courses include hands-on projects, live sessions, and personalized
          mentorship to accelerate your learning journey.
        </Panel>

        <Panel
          title="Free Course"
          isActive={activeIndex === 1 && true}
          onActive={() => setActiveIndex(1)}
        >
          Start learning with our free courses available to everyone. Perfect for
          beginners who want to explore new technologies and build a strong foundation
          without any investment.
        </Panel>

        <Panel
          title="YouTube Tutorials"
          isActive={activeIndex === 2 && true}
          onActive={() => setActiveIndex(2)}
        >
          Subscribe to our YouTube channel for regular video tutorials, tips and tricks.
          Learn at your own pace with easy-to-follow videos covering various programming
          topics and web development concepts.
        </Panel>

        <Panel
          title="Community Support"
          isActive={activeIndex === 3 && true}
          onActive={() => setActiveIndex(3)}
        >
          Join our vibrant community of learners and developers. Get help with your doubts,
          share your projects, participate in coding challenges, and grow together with
          like-minded people.
        </Panel>
      </div>
    </div>
  );
}