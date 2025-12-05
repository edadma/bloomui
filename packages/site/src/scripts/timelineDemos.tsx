import React from 'react';
import { createRoot } from 'react-dom/client';
import { Timeline } from 'asterui';
import { CheckCircleIcon } from '@heroicons/react/20/solid';

const CheckIcon = () => <CheckCircleIcon className="w-5 h-5" />;
const PrimaryCheckIcon = () => <CheckCircleIcon className="w-5 h-5 text-primary" />;

const demos: Record<string, React.ReactNode> = {
  basic: (
    <Timeline>
      <Timeline.Item start="1984" icon={<CheckIcon />} end="First Macintosh computer" endBox />
      <Timeline.Item start="iMac" icon={<CheckIcon />} end="1998" startBox />
    </Timeline>
  ),
  vertical: (
    <Timeline vertical>
      <Timeline.Item start="2015" icon={<PrimaryCheckIcon />} end="Apple Watch" endBox />
      <Timeline.Item start="2017" icon={<PrimaryCheckIcon />} end="iPhone X" endBox />
      <Timeline.Item start="2020" icon={<PrimaryCheckIcon />} end="Apple Silicon M1" endBox />
    </Timeline>
  ),
  compact: (
    <Timeline vertical compact>
      <Timeline.Item
        icon={<CheckIcon />}
        end={
          <div>
            <time>1984</time>
            <div className="text-lg font-black">First Macintosh computer</div>
          </div>
        }
        endBox
      />
      <Timeline.Item
        icon={<CheckIcon />}
        end={
          <div>
            <time>1998</time>
            <div className="text-lg font-black">iMac</div>
          </div>
        }
        endBox
      />
      <Timeline.Item
        icon={<CheckIcon />}
        end={
          <div>
            <time>2001</time>
            <div className="text-lg font-black">iPod</div>
          </div>
        }
        endBox
      />
    </Timeline>
  ),
};

document.querySelectorAll('.demo-container').forEach((container) => {
  const example = container.getAttribute('data-example');
  if (example && demos[example]) {
    const root = createRoot(container);
    root.render(<>{demos[example]}</>);
  }
});
