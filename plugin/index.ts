import setupBucket from './bucket';

function setupPlugin() {
  if (typeof window !== 'undefined') {
    setupBucket();
  }
}

export default setupPlugin;