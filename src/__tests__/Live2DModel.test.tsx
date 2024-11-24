import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Live2DModel } from '../components/Live2DModel';

describe('Live2DModel', () => {
  it('renders without crashing', () => {
    const config = {
      modelPath: '/path/to/model',
      texturePath: '/path/to/texture',
    };

    const { container } = render(<Live2DModel config={config} />);
    expect(container.firstChild).toBeTruthy();
  });

  it('applies custom className', () => {
    const config = {
      modelPath: '/path/to/model',
      texturePath: '/path/to/texture',
    };

    render(<Live2DModel config={config} className="custom-class" />);
    expect(screen.getByRole('generic')).toHaveClass('custom-class');
  });
});
