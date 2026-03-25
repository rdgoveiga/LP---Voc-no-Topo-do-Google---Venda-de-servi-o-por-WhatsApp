
export type ABVersion = 'A' | 'B';

export const getABVersion = (): ABVersion => {
  if (typeof window === 'undefined') return 'A';
  
  const savedVersion = localStorage.getItem('ab_version') as ABVersion;
  if (savedVersion && (savedVersion === 'A' || savedVersion === 'B')) {
    return savedVersion;
  }

  const newVersion: ABVersion = Math.random() > 0.5 ? 'B' : 'A';
  localStorage.setItem('ab_version', newVersion);
  return newVersion;
};
