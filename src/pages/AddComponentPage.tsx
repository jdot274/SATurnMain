import React, { useState } from 'react';
import { FolderTree, File, Plus, X, Check } from 'lucide-react';
import PageLogo from '../components/PageLogo';
import Navigation from '../components/Navigation';

interface FolderStructure {
  name: string;
  type: 'folder' | 'file';
  content?: string;
  children?: FolderStructure[];
}

const AddComponentPage: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [componentName, setComponentName] = useState('');
  const [withStyles, setWithStyles] = useState(true);
  const [withTests, setWithTests] = useState(true);
  const [withStories, setWithStories] = useState(true);
  const [previewStructure, setPreviewStructure] = useState<FolderStructure[]>([]);

  const generateFolderStructure = (name: string): FolderStructure[] => {
    const structure: FolderStructure[] = [
      {
        name: name.toLowerCase(),
        type: 'folder',
        children: [
          {
            name: `${name}.tsx`,
            type: 'file',
            content: `import React from 'react';
import { cn } from '@/lib/utils';
import { ${name}Props } from './types';
import { containerStyles } from './styles';

export const ${name}: React.FC<${name}Props> = ({ className, children }) => {
  return (
    <div className={cn(containerStyles.base, className)}>
      {children}
    </div>
  );
};`
          },
          {
            name: 'types.ts',
            type: 'file',
            content: `import { ReactNode } from 'react';

export interface ${name}Props {
  className?: string;
  children?: ReactNode;
}`
          },
          {
            name: 'index.ts',
            type: 'file',
            content: `export * from './${name}';
export * from './types';`
          }
        ]
      }
    ];

    if (withStyles) {
      structure[0].children?.push({
        name: 'styles.ts',
        type: 'file',
        content: `export const containerStyles = {
  base: "relative w-full",
  content: "w-full h-full",
  header: "mb-4"
};`
      });
    }

    if (withTests) {
      structure[0].children?.push({
        name: `${name}.test.tsx`,
        type: 'file',
        content: `import { render, screen } from '@testing-library/react';
import { ${name} } from './${name}';

describe('${name}', () => {
  it('renders without crashing', () => {
    render(<${name}>Test</${name}>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});`
      });
    }

    if (withStories) {
      structure[0].children?.push({
        name: `${name}.stories.tsx`,
        type: 'file',
        content: `import type { Meta, StoryObj } from '@storybook/react';
import { ${name} } from './${name}';

const meta: Meta<typeof ${name}> = {
  title: 'Components/${name}',
  component: ${name},
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ${name}>;

export const Default: Story = {
  args: {
    children: 'Example Content',
  },
};`
      });
    }

    return structure;
  };

  const handlePreview = () => {
    if (!componentName) return;
    setPreviewStructure(generateFolderStructure(componentName));
  };

  const handleSubmit = () => {
    // Here you would typically make an API call or use a file system
    // to create the actual component files
    console.log('Creating component:', componentName);
    setIsDialogOpen(false);
    setComponentName('');
    setPreviewStructure([]);
  };

  const renderStructure = (items: FolderStructure[], level = 0) => {
    return (
      <div style={{ marginLeft: level * 20 }}>
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2 py-1">
            {item.type === 'folder' ? (
              <FolderTree className="w-4 h-4 text-blue-400" />
            ) : (
              <File className="w-4 h-4 text-white/60" />
            )}
            <span className="text-white/90">{item.name}</span>
            {item.children && renderStructure(item.children, level + 1)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <PageLogo />
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-white">Add Component</h1>
            <button
              onClick={() => setIsDialogOpen(true)}
              className="px-4 py-2 rounded-lg bg-blue-500/20 text-blue-400 
                       border border-blue-500/30 hover:bg-blue-500/30 
                       transition-all duration-300 flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              New Component
            </button>
          </div>

          {/* Component Dialog */}
          {isDialogOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
                   onClick={() => setIsDialogOpen(false)} />
              
              <div className="relative w-full max-w-2xl backdrop-blur-xl bg-white/5 
                           rounded-2xl p-8 border border-white/10 space-y-6">
                <button
                  onClick={() => setIsDialogOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/5 
                           transition-colors"
                >
                  <X className="w-5 h-5 text-white/60" />
                </button>

                <h2 className="text-2xl font-bold text-white">Create New Component</h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-1">
                      Component Name
                    </label>
                    <input
                      type="text"
                      value={componentName}
                      onChange={(e) => setComponentName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg 
                               px-4 py-2 text-white placeholder:text-white/40"
                      placeholder="MyComponent"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={withStyles}
                        onChange={(e) => setWithStyles(e.target.checked)}
                        className="rounded border-white/20 bg-white/5 text-blue-500"
                      />
                      <span className="text-white/70">Include styles</span>
                    </label>

                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={withTests}
                        onChange={(e) => setWithTests(e.target.checked)}
                        className="rounded border-white/20 bg-white/5 text-blue-500"
                      />
                      <span className="text-white/70">Include tests</span>
                    </label>

                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={withStories}
                        onChange={(e) => setWithStories(e.target.checked)}
                        className="rounded border-white/20 bg-white/5 text-blue-500"
                      />
                      <span className="text-white/70">Include Storybook stories</span>
                    </label>
                  </div>

                  {/* Preview Button */}
                  <button
                    onClick={handlePreview}
                    disabled={!componentName}
                    className="w-full py-2 rounded-lg bg-white/5 text-white/90 
                             border border-white/10 hover:bg-white/10 
                             transition-colors disabled:opacity-50 
                             disabled:cursor-not-allowed"
                  >
                    Preview Structure
                  </button>

                  {/* Structure Preview */}
                  {previewStructure.length > 0 && (
                    <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                      <h3 className="text-lg font-semibold text-white mb-4">
                        Component Structure
                      </h3>
                      {renderStructure(previewStructure)}
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="flex justify-end gap-4 mt-8">
                    <button
                      onClick={() => setIsDialogOpen(false)}
                      className="px-4 py-2 rounded-lg bg-white/5 text-white/90 
                               border border-white/10 hover:bg-white/10 
                               transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={!componentName}
                      className="px-4 py-2 rounded-lg bg-blue-500/20 text-blue-400 
                               border border-blue-500/30 hover:bg-blue-500/30 
                               transition-colors disabled:opacity-50 
                               disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      <Check className="w-4 h-4" />
                      Create Component
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AddComponentPage;